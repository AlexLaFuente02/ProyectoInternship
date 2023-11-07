const passport = require('passport');
const bcrypt = require('bcrypt');
const UsuarioENT = require('../ENT/UsuarioENT');
const LoginDTO = require('../DTO/LoginDTO');
const ResponseDTO = require('../DTO/ResponseDTO');

const { Strategy: LocalStrategy } = require('passport-local'); // Importa LocalStrategy desde passport-local

passport.use(new LocalStrategy(
  { usernameField: 'idusuario' }, // Ajusta el campo de nombre de usuario para que coincida con tu modelo
  async (idusuario, password, done) => {
    try {
      const usuario = await UsuarioENT.findOne({ where: { idusuario: idusuario } });

      let response;
      if (!usuario) {
        response = new ResponseDTO('AUTH-1001', null, 'Usuario no encontrado');
        return done(null, false, response); // Autenticación fallida
      } else {
        const isPasswordValid = await bcrypt.compare(password, usuario.contrasenia);
        if (!isPasswordValid) {
          response = new ResponseDTO('AUTH-1002', null, 'Contraseña incorrecta');
          return done(null, false, response); // Autenticación fallida
        } else {
          const loginDTO = new LoginDTO(usuario.id, usuario.tipousuario_id);
          response = new ResponseDTO('AUTH-0000', loginDTO, 'Inicio de sesión exitoso');
          return done(null, usuario, response); // Autenticación exitosa
        }
      }

      return done(null, usuario, response);
    } catch (error) {
      const response = new ResponseDTO('AUTH-1003', null, 'Error en la autenticación: ' + error);
      return done(error, false, response);
    }
  }
));

// AUTENTICACION:
passport.serializeUser((usuario, done) => {
  done(null, usuario.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const usuario = await UsuarioENT.findByPk(id);
    done(null, usuario);
  } catch (error) {
    done(error);
  }
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json(new ResponseDTO('AUTH-0001', null, 'Usuario no autenticado'));
}

module.exports = { passport, isAuthenticated };
