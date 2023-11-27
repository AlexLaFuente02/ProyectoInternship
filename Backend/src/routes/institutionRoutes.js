const express = require('express');
const convocatoriaService = require('../services/convocatoriaService');
const estadosolicitudinstitucionService = require('../services/estadoSolicitudInstitucionService');
const historicoConvocatoriasService = require('../services/historicoConvocatoriasService');
const institucionService = require('../services/institucionService');
const postulacionService = require('../services/postulacionService');
const router = express.Router();

//Fotos
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../..', 'images')); // Subir un nivel y luego entrar a la carpeta images
      },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

const upload = multer({ storage: storage });

// Ruta para publicar convocatoria por institucion
router.post('/convocatoria/', async (req, res) => {
    try {
        console.log('POST request received for createConvocatoria for INSTITUCION');
        const response = await convocatoriaService.createConvocatoria(req.body);
        res.json({
            method: 'createConvocatoria',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error creating convocatoria for INSTITUCION:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener todos los estados de solicitud de institucion
router.get('/estadosolicitudinstitucion', async (req, res) => {
    try {
        console.log('GET request received for getAllEstadoSolicitudInstitucion for INSTITUCION');
        const response = await estadosolicitudinstitucionService.getAllEstadoSolicitudInstitucion();
        res.json({
            method: 'getAllEstadoSolicitudInstitucion',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting all estado solicitud institucion for INSTITUCION:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener todas los historicos de convocatorias por institucion
router.get('/historicoConvocatorias', async (req, res) => {
    try {
        console.log('GET request received for getAllHistoricoConvocatorias for INSTITUCION');
        const response = await historicoConvocatoriasService.getAllHistoricos();
        res.json({
            method: 'getAllHistoricoConvocatorias',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting all historico convocatorias for INSTITUCION:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para añadir una institucion

router.post('/crear', upload.single('logoinstitucion'), async (req, res) => {
    console.log('POST request received for createInstitution');
  
    // Extrae los datos del cuerpo de la solicitud y la ruta del archivo de imagen
    const institutionData = {
        ...req.body,
        logoinstitucion: req.file ? req.file.filename : null, // Usa filename y no path
    };
  
    // Llama al servicio y pasa los datos de la institución, incluyendo la ruta de la imagen
    const response = await institucionService.createInstitution(institutionData);
  
    // Envía la respuesta
    res.json({
      method: 'createInstitution',
      code: response.code,
      result: response.result,
      message: response.message,
    });
  });

// Ruta para obtener todas las postulaciones
router.get('/postulacion', async (req, res) => {
    try {
        console.log('GET request received for getAllPostulaciones for INSTITUCION');
        const response = await postulacionService.getAllPostulaciones();
        res.json({
            method: 'getAllPostulaciones',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting all postulaciones for INSTITUCION:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener una postulacion por id
router.get('/postulacion/:id', async (req, res) => {
    try {
        console.log('GET request received for getPostulacionById for INSTITUCION');
        const response = await postulacionService.getPostulacionById(req.params.id);
        res.json({
            method: 'getPostulacionById',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting postulacion by id for INSTITUCION:', error);
        res.status(500).json({ error: error.message });
    }
});

// Define la ruta para obtener postulaciones por ID de convocatoria
router.get('/postulaciones/convocatoria/:idConvocatoria', async (req, res) => {
    try {
        const idConvocatoria = req.params.idConvocatoria;
        console.log(`GET request received for getPostulacionesPorIdConvocatoria, ID de convocatoria: ${idConvocatoria}`);
        
        const response = await postulacionService.getPostulacionesPorIdConvocatoria(idConvocatoria);
        
        res.json({
            method: 'getPostulacionesPorIdConvocatoria',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting postulaciones by convocatoria ID:', error);
        res.status(500).json({ error: error.message });
    }
});

// Define la ruta para obtener convocatorias por ID de institución
router.get('/convocatorias/institucion/:idInstitucion', async (req, res) => {
    try {
        const idInstitucion = req.params.idInstitucion;
        console.log(`GET request received for getConvocatoriasPorIdInstitucion, ID de institución: ${idInstitucion}`);
        
        const response = await convocatoriaService.getConvocatoriasPorIdInstitucion(idInstitucion);
        
        res.json({
            method: 'getConvocatoriasPorIdInstitucion',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting convocatorias by institution ID:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener InstitutionID por UserID
router.get('/institucion/user/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        console.log(`GET request received for getInstitutionIdByUserId, UserID: ${userId}`);
        
        const response = await institucionService.getInstitutionIdByUserId(userId);
        
        res.json({
            method: 'getInstitutionIdByUserId',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting InstitutionID by UserID:', error);
        res.status(500).json({ error: error.message });
    }
});

//Ruta para obtener Institution by ID
router.get('/institucion/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log(`GET request received for getInstitutionById, ID: ${id}`);
        
        const response = await institucionService.getInstitutionById(id);
        
        res.json({
            method: 'getInstitutionById',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting Institution by ID:', error);
        res.status(500).json({ error: error.message });
    }
});

//Ruta para obtener postulaciones de instituciones
router.get('/destacadas', async (req, res) => {
    try {
        console.log('GET request received for getInstitutionPostulations');
        
        const response = await institucionService.getInstitutionPostulations();
        
        res.json({
            method: 'getInstitutionPostulations',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting Institution Postulations:', error);
        res.status(500).json({ error: error.message });
    }
});

//Ruta para obtener postulaciones de institucionID
router.get('/postulaciones/:institutionId', async (req, res) => {
    const institutionId = req.params.institutionId;

    if (!institutionId) {
        return res.status(400).json({ error: 'Se requiere el ID de la institución' });
    }

    try {
        console.log(`GET request received for getPostulationsByInstitutionId with ID: ${institutionId}`);

        const response = await institucionService.getPostulationsByInstitutionId(institutionId);

        res.json({
            method: 'getPostulationsByInstitutionId',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error(`Error getting postulations for institution ID ${institutionId}:`, error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener las convoctarias activas para estudiantes
router.get('/convocatorias/activas/:institutionId', async (req, res) => {
    const institutionId = req.params.institutionId;
    try {
        console.log('GET request received for getConvocatoriasActivasById for INSTITUTION');
        const response = await convocatoriaService.getActiveConvocatoriasById(institutionId);
        res.json({
            method: 'getConvocatoriasActivasById',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting convocatorias activas for INSTITUTION:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener las convoctarias inactivas para estudiantes
router.get('/convocatorias/inactivas/:institutionId', async (req, res) => {
    const institutionId = req.params.institutionId;
    try {
        console.log('GET request received for getConvocatoriasInactivasById for INSTITUTION');
        const response = await convocatoriaService.getInactiveConvocatoriasById(institutionId);
        res.json({
            method: 'getConvocatoriasInactivasById',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting convocatorias inactivas for INSTITUTION:', error);
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener un resumen de convocatorias activas e inactivas
router.get('/convocatorias/sumatorias/:institutionId', async (req, res) => {
    const institutionId = req.params.institutionId;
    try {
        console.log('GET request received for getSummaryOfConvocatorias');
        const response = await convocatoriaService.getSummaryOfConvocatorias(institutionId);
        res.json({
            method: 'getSummaryOfConvocatorias',
            code: response.code,
            result: response.result,
            message: response.message,
        });
    } catch (error) {
        console.error('Error getting summary of convocatorias:', error);
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
