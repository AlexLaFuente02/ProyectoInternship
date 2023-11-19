const express = require('express');
const { isAuthenticated, checkRole } = require('../services/authService');
const convocatoriaService = require('../services/convocatoriaService');
const carreraService = require('../services/carreraService');
const usuarioService = require('../services/usuarioService');
const historicoPostulacionesService = require('../services/historicoPostulacionesService');
const postulacionService = require('../services/postulacionService');
const sedeService = require('../services/sedeService');
const router = express.Router();

const { sendEmail } = require('../services/emailService');
// Ruta para obtener todas las convocatorias para estudiantes
router.get('/convocatoria', async (req, res) => {
    try {
        console.log('GET request received for getAllConvocatorias for STUDENT');
        const response = await convocatoriaService.getAllConvocatorias();
        res.json({
            method: 'getAllConvocatorias',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting all convocatorias for STUDENT:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener una convocatoria por ID para estudiantes
router.get('/convocatoria/:id', async (req, res) => {
    try {
        console.log(`GET request received for getConvocatoriaById with ID: ${req.params.id} for STUDENT`);
        const response = await convocatoriaService.getConvocatoriaById(req.params.id);
        res.json({
            method: 'getConvocatoriasByID',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error(`Error getting convocatoria by ID: ${req.params.id} for STUDENT:`, error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener todas las carreras para estudiantes

router.get('/carrera', async (req, res) => {
    try {
        console.log('GET request received for getAllCarreras for STUDENT');
        const response = await carreraService.getAllCarreras();
        res.json({
            method: 'getAllCarreras',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting all carreras for STUDENT:', error);
        res.status(500).json({ error: error.message });
    }
});

//Ruta para agregar un usuario
router.post('/usuario', async (req, res) => {
    try {
        console.log('POST request received for createUsuario for STUDENT');
        const response = await usuarioService.createUser(req.body);
        res.json({
            method: 'createUsuario',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error creating usuario for STUDENT:', error);
        res.status(500).json({ error: error.message });
    }
});


//Ruta para obtener todos los historicos de postulaciones
router.get('/historicoPostulaciones', async (req, res) => {
    try {
        console.log('GET request received for getAllHistoricoPostulaciones for STUDENT');
        const response = await historicoPostulacionesService.getAllHistoricosPostulaciones();
        res.json({
            method: 'getAllHistoricoPostulaciones',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting all historicoPostulaciones for STUDENT:', error);
        res.status(500).json({ error: error.message });
    }
});

//Ruta para agregar una postulacion
router.post('/postulacion', async (req, res) => {
    try {
        console.log('POST request received for createPostulacion for STUDENT');
        const response = await postulacionService.createPostulacion(req.body);
        res.json({
            method: 'createPostulacion',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error creating postulacion for STUDENT:', error);
        res.status(500).json({ error: error.message });
    }
});

//Ruta para obtener todas las sedes
router.get('/sede', async (req, res) => {
    try {
        console.log('GET request received for getAllSedes for STUDENT');
        const response = await sedeService.getAll();
        res.json({
            method: 'getAllSedes',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting all sedes for STUDENT:', error);
        res.status(500).json({ error: error.message });
    }
});
//prueba email
router.post('/send-email', async (req, res) => {
    const { to } = req.body;
  
    try {
      const code = await sendEmail(to);
      res.json({ success: true, code });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
module.exports = router;
