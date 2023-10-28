const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//CORS - conexion entre servidores
const cors = require("cors");
//Seguridad
const passport = require('passport');
const session = require('express-session');
const { isAuthenticated } = require('./services/authService'); // Importa el middleware isAuthenticated
//Swagger para documentar
const { swaggerDocs: V1SwaggerDocs } = require("./swagger");

// Importa las rutas 
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
const aprobacionConvocatoriaAPI = require("./API/aprobacionConvocatoriaAPI");
const historicoPostulacionesAPI = require("./API/historicoPostulacionesAPI");

const authAPI = require("./API/authAPI");


// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// Middleware para permitir CORS desde cualquier dominio
app.use(cors()); // Agrega esta línea justo antes de tus rutas

// Configuración de Passport
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Usa las rutas 
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
app.use("/aprobacionConvocatoria", aprobacionConvocatoriaAPI);
app.use("/historicoPostulaciones", historicoPostulacionesAPI);


app.use("/auth", authAPI);

// Ruta de inicio
app.get("/", (req, res) => {
  res.send("¡Bienvenido al API REST de INTERNSHIP!");
});

// Escucha en el puerto especificado
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
