const passport = require('passport');
const bcrypt = require('bcrypt');
const UsuarioENT = require('../ENT/UsuarioENT');
const LoginDTO = require('../DTO/LoginDTO');
const ResponseDTO = require('../DTO/ResponseDTO');

const { Strategy: LocalStrategy } = require('passport-local');

passport.use(new LocalStrategy(
  {
    usernameField: 'idusuario',
    passReqToCallback: true // Se agrega esta línea para tener acceso a req
  },
  async (req, idusuario, password, done) => { // Ahora req es el primer argumento
    try {
      console.log(`Buscando usuario por ID de usuario: ${idusuario}`);
      const usuario = await UsuarioENT.findOne({ where: { idusuario: idusuario } });

      if (!usuario) {
        console.log('Usuario no encontrado');
        return done(null, false, new ResponseDTO('AUTH-1001', null, 'Usuario no encontrado'));
      }

      console.log(`Comparando contraseñas para el usuario: ${idusuario}`);
      const isPasswordValid = await bcrypt.compare(password, usuario.contrasenia);

      if (!isPasswordValid) {
        console.log('Contraseña incorrecta');
        return done(null, false, new ResponseDTO('AUTH-1002', null, 'Contraseña incorrecta'));
      }

      
      // Asignación de roles en la sesión basado en tipousuario_id
      let role;
      switch (usuario.tipousuario_id) {
        case 1:
          role = 'ADMIN';
          break;
        case 2:
          role = 'STUDENT';
          break;
        case 3:
          role = 'INSTITUTION';
          break;
        default:
          role = 'UNKNOWN'; 
      }

      // Aquí almacenamos la información en la sesión
      req.session.user = {
        id: usuario.id,
        tipousuario_id: usuario.tipousuario_id,
      };

      console.log(`Informacion de usuario almacenada, tipo de usuario: ${role}`);

      console.log(`Usuario autenticado exitosamente: ${idusuario}`);
      const loginDTO = new LoginDTO(usuario.id, usuario.tipousuario_id);
      return done(null, usuario, new ResponseDTO('AUTH-0000', loginDTO, 'Inicio de sesión exitoso'));

    } catch (error) {
      console.error(`Error en el proceso de autenticación: ${error}`);
      return done(error, false, new ResponseDTO('AUTH-1003', null, `Error en la autenticación: ${error}`));
    }
  }
));

passport.serializeUser((usuario, done) => {
  console.log(`Serializando usuario: ${usuario.id}`);
  done(null, usuario.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    console.log(`Deserializando usuario por ID: ${id}`);
    const usuario = await UsuarioENT.findByPk(id);
    done(null, usuario);
  } catch (error) {
    console.error(`Error al deserializar usuario: ${error}`);
    done(error);
  }
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('Usuario está autenticado');
    return next();
  }
  console.log('Usuario no autenticado');
  res.status(401).json(new ResponseDTO('AUTH-0001', null, 'Usuario no autenticado'));
}

function checkRole(requiredRole) {
  return function(req, res, next) {
    console.log(`Verificando rol requerido: ${requiredRole}`);
    const userRole = req.user.tipousuario_id;
    console.log(`Rol del usuario: ${userRole}`);
    console.log(`Rol requerido: ${requiredRole}`);

    if (userRole == requiredRole) {
      console.log('El usuario tiene el rol requerido');
      return next();
    } else {
      console.log('El usuario no tiene el rol requerido');
      return res.status(403).json(new ResponseDTO('AUTH-0002', null, 'Acceso denegado: no tiene permiso para realizar esta acción'));
    }
  };
}

module.exports = { passport, isAuthenticated, checkRole };
