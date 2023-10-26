const express = require("express");
const cors = require("cors");
const { swaggerDocs: V1SwaggerDocs } = require("./swagger");
const app = express();
const PORT = process.env.PORT || 3000;

// Importa las rutas de tipoUsuarioAPI
const tipoUsuarioAPI = require("./API/tipoUsuarioAPI");
const UsuarioAPI = require("./API/usuarioAPI");
const estadoPostulacionAPI = require("./API/estadoPostulacionAPI");
const semestreAPI = require("./API/semestreAPI");
const sedeAPI = require("./API/sedeAPI");
const sectorPertenenciaAPI = require("./API/sectorPertenenciaAPI");
const carreraAPI = require("./API/carreraAPI");
const institucionAPI = require("./API/institucionAPI");
const estadoConvocatoriaAPI = require("./API/estadoConvocatoriaAPI");
const tiempoAcumplirAPI = require("./API/tiempoacumplirAPI");
const convocatoriaAPI = require("./API/convocatoriaAPI");
const adminuseiAPI = require("./API/adminuseiAPI");
const historicoUsuarioAPI = require("./API/historicoUsuarioAPI");
const historicoConvocatoriasAPI = require("./API/historicoConvocatoriasAPI");
const estudianteAPI = require("./API/estudianteAPI");
const postulacionAPI = require("./API/postulacionAPI");

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// Middleware para permitir CORS desde cualquier dominio
app.use(cors()); // Agrega esta línea justo antes de tus rutas

// Usa las rutas de tipoUsuarioAPI
app.use("/tipoUsuario", tipoUsuarioAPI);
app.use("/usuario", UsuarioAPI);
app.use("/estadoPostulacion", estadoPostulacionAPI);
app.use("/semestre", semestreAPI);
app.use("/sede", sedeAPI);
app.use("/sectorPertenencia", sectorPertenenciaAPI);
app.use("/carrera", carreraAPI);
app.use("/institucion", institucionAPI);
app.use("/estadoConvocatoria", estadoConvocatoriaAPI);
app.use("/tiempoacumplir", tiempoAcumplirAPI);
app.use("/convocatoria", convocatoriaAPI);
app.use("/adminUSEI", adminuseiAPI);
app.use("/historicoUsuario", historicoUsuarioAPI);
app.use("/historicoConvocatorias", historicoConvocatoriasAPI);
app.use("/estudiante", estudianteAPI);
app.use("/postulaciones", postulacionAPI);

// Ruta de inicio
app.get("/", (req, res) => {
  res.send("¡Bienvenido al API REST de INTERNSHIP!");
});

// Escucha en el puerto especificado
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
