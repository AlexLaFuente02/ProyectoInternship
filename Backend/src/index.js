const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Importa las rutas de tipoUsuarioAPI
const tipoUsuarioAPI = require("./API/tipoUsuarioAPI");
const UsuarioAPI = require("./API/usuarioAPI");
const estadoPostulacionAPI = require("./API/estadoPostulacionAPI");
const semestreAPI = require("./API/semestreAPI");
const sedeAPI = require("./API/sedeAPI");
const institucionAPI = require("./API/institucionAPI");

const sectorPertenenciaAPI = require("./API/sectorPertenenciaAPI");
const carreraAPI = require("./API/carreraAPI");
// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// Usa las rutas de tipoUsuarioAPI
app.use("/tipoUsuario", tipoUsuarioAPI);
app.use("/usuario", UsuarioAPI);
app.use("/estadoPostulacion", estadoPostulacionAPI);
app.use("/semestre", semestreAPI);
app.use("/sede", sedeAPI);
app.use("/sectorPertenencia", sectorPertenenciaAPI);
app.use("/carrera", carreraAPI);
app.use("/institucion", institucionAPI);

// Ruta de inicio
app.get("/", (req, res) => {
  res.send("¡Bienvenido al API REST de INTERNSHIP!");
});

// Escucha en el puerto especificado
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
