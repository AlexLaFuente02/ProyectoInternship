const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Importa las rutas de tipoUsuarioAPI
const tipoUsuarioAPI = require("./API/tipoUsuarioAPI");
//const estadoPostulacionAPI = require("./API/estadoPostulacionAPI");

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// Usa las rutas de tipoUsuarioAPI
app.use("/tipoUsuario", tipoUsuarioAPI);
//app.use("/estadoPostulacion", estadoPostulacionAPI);

// Ruta de inicio
app.get("/", (req, res) => {
  res.send("¡Bienvenido al API REST de INTERNSHIP!");
});

// Escucha en el puerto especificado
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
