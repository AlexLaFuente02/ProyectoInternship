const passport = require('passport');
const bcrypt = require('bcrypt');
const UsuarioENT = require('../ENT/UsuarioENT');
const LoginDTO = require('../DTO/LoginDTO');
const ResponseDTO = require('../DTO/ResponseDTO');

const TipoUsuario = require('../ENT/TipoUsuarioENT');
const TipoUsuarioDTO = require('../DTO/TipoUsuarioDTO');

const { Strategy: LocalStrategy } = require('passport-local'); // Importa LocalStrategy desde passport-local

//Metodo LOGIN
passport.use(new LocalStrategy(
  { usernameField: 'idusuario' },
  async (idusuario, password, done) => {
    try {
      // Asegúrate de que la consulta incluya la información del tipo de usuario
      const usuario = await UsuarioENT.findOne({
        where: { idusuario: idusuario },
        include: [{ model: TipoUsuario, as: 'tipousuario' }] // Esto debe coincidir con cómo has definido la relación en tus modelos
      });

      let response;
      if (!usuario) {
        response = new ResponseDTO('AUTH-1001', null, 'Usuario no encontrado');
        return done(null, false, response);
      } else {
        const isPasswordValid = await bcrypt.compare(password, usuario.contrasenia);
        if (!isPasswordValid) {
          response = new ResponseDTO('AUTH-1002', null, 'Contraseña incorrecta');
          return done(null, false, response);
        } else {
          // Aquí creas el LoginDTO incluyendo el tipo de usuario
          const tipoUsuarioDTO = new TipoUsuarioDTO(usuario.tipousuario.id, usuario.tipousuario.tipo);
          const loginDTO = new LoginDTO(usuario.id, usuario.idusuario, tipoUsuarioDTO);
          response = new ResponseDTO('AUTH-0000', loginDTO, 'Inicio de sesión exitoso');
          return done(null, usuario, response);
        }
      }
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
