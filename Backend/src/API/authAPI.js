const express = require('express');
const { passport, isAuthenticated } = require('../services/authService'); // Importa la instancia de passport y el middleware isAuthenticated

const LoginDTO = require('../DTO/LoginDTO');
const ResponseDTO = require('../DTO/ResponseDTO');

const router = express.Router();

// Ruta para iniciar sesión
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, usuario, response) => {
    if (err || !usuario) {
      const status = err ? 500 : 401;
      return res.status(status).json(response);
    }

    req.logIn(usuario, (loginErr) => {
      if (loginErr) {
        return res.status(500).json(response);
      }

      const loginDTO = response.result;
      res.status(200).json(new ResponseDTO('AUTH-0000', loginDTO, 'Inicio de sesión exitoso'));
    });
  })(req, res, next);
});

// Ruta para cerrar sesión
router.get('/logout', isAuthenticated, (req, res) => {
  req.logout(function (err) {
    if (err) {
      return res.status(500).json(new ResponseDTO('AUTH-1004', null, 'Error al cerrar sesión'));
    }
    res.status(200).json(new ResponseDTO('AUTH-0003', null, 'Cierre de sesión exitoso'));
  });
});

// Ruta para verificar el estado de autenticación
router.get('/status', isAuthenticated, (req, res) => {
  if (req.isAuthenticated()) {
    const userDTO = new LoginDTO(req.user.id, req.user.idusuario);
    res.status(200).json(new ResponseDTO('AUTH-0000', userDTO, 'Usuario autenticado'));
  } else {
    res.status(200).json(new ResponseDTO('AUTH-0001', null, 'Usuario no autenticado'));
  }
});

module.exports = router;
