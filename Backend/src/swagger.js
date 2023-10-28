const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

//Metadata info about our API
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "INTERNSHIP BY UCB API",
      version: "1.0.0",
    },
  },
  apis: [
    "src/API/authAPI.js",
    "src/API/usuarioAPI.js",
    "src/API/carreraAPI.js",
    "src/API/historicoConvocatoriasAPI.js",
    "src/API/historicoPostulacionesAPI.js",
    "src/API/estudianteAPI.js",
    "src/API/postulacionAPI.js",
    "src/API/tiempoACumplirAPI.js",
    "src/API/TipoUsuarioAPI.js",
    "src/API/estadoConvocatoriaAPI.js",
    "src/API/aprobacionConvocatoriaAPI.js",
    "src/API/estadoSolicitudInstitucionAPI.js",
    "src/DTO/ResponseDTO.js",
    "src/DTO/UsuarioDTO.js",
    "src/DTO/CarreraDTO.js",
    "src/DTO/historicoConvocatoriasDTO.js",
    "src/DTO/historicoPostulacionesDTO.js",
    "src/DTO/TiempoACumplirDTO.js",
    "src/DTO/TipoUsuarioDTO.js",
    "src/DTO/EstadoConvocatoriaDTO.js",
    "src/DTO/EstudianteDTO.js",
    "src/DTO/PostulacionDTO.js",
    "src/DTO/AprobacionConvocatoriaDTO.js",
    "src/DTO/EstadoSolicitudInstitucionDTO.js",


    // Add more API and service pairs as needed
  ],
};

//Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup our Docs
const swaggerDocs = (app, port) => {
  app.use(
    "/internshipByUCB/docs",
    swaggerUI.serve,
    swaggerUI.setup(swaggerSpec)
  );
  app.get("/internshipByUCB/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `📄 Version 1 Docs are Available at http://localhost:${port}/internshipByUCB/docs`
  );
};

module.exports = { swaggerDocs };
