const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const axios = require('axios');
//CORS - conexion entre servidores
const cors = require("cors");
//Seguridad
const passport = require("passport");
const session = require("express-session");
const { isAuthenticated, checkRole} = require("./services/authService"); // Importa el middleware isAuthenticated
//Swagger para documentar
const { swaggerDocs: V1SwaggerDocs } = require("./swagger");
//Fotos
const path = require('path');
app.use('/images', express.static(path.join(__dirname, '..', 'images')));


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
const estadoSolicitudInstitucionAPI = require("./API/estadoSolicitudInstitucionAPI");
const historicoPostulacionesAPI = require("./API/historicoPostulacionesAPI");

const authAPI = require("./API/authAPI");

const studentRoutes = require('./routes/studentRoutes');
const instutionRoutes = require('./routes/institutionRoutes');
const useiRoutes = require('./routes/useiRoutes');


// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());
app.use(cors());
// Middleware para permitir CORS desde cualquier dominio
const corsOptions = {
  // Permitir explícitamente el origen del cliente
  origin: 'http://localhost:5173',
  credentials: true, // Esto es necesario para las cookies de sesión y los headers de autenticación
};
app.use(cors(corsOptions));
// Configuración de Passport
app.use(
  session({ secret: "your-secret-key", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Usa las rutas
app.use("/adminUSEI", adminuseiAPI); //NO INCLUIR EN CONSUMOS PORQUE SOLO SE MANEJA DESDE BASE DE DATOS DE ADMINISTRADOR
app.use("/aprobacionConvocatoria", aprobacionConvocatoriaAPI);  //REVISAR UTILIDAD, NO SE USA EN FRONTEND
app.use("/carrera", carreraAPI);  //SIN AUTENTICACION PORQUE SE USA EN REGISTRO DE ESTUDIANTE, usa en FRONT
app.use("/convocatoria", convocatoriaAPI); //usado en FRONT por STUDENT(getall y getid), POST por INSTITUCION, GetAll,GetByID, PUT por USEI
//app.use("/convocatoria", isAuthenticated, checkRole("1"), convocatoriaAPI); //usado en FRONT por STUDENT(getall y getid), POST por INSTITUCION, GetAll,GetByID, PUT por USEI
                                      //verificando if admin
app.use("/estadoConvocatoria", estadoConvocatoriaAPI); //No se usa en FRONT, util en Convocatorias    
app.use("/estadoPostulacion", estadoPostulacionAPI); //No se usa en FRONT, util en Convocatorias
app.use("/estadosolicitudinstitucion", estadoSolicitudInstitucionAPI); //Utilizable en FRONT por Instituciones para saber su estado de solicitud
app.use("/estudiante", estudianteAPI); //Post utilizado en FRONT para registro STUDENT, GET por admin?
app.use("/historicoConvocatorias", historicoConvocatoriasAPI); //futuro uso por ID de INSTITUCION****
app.use("/historicoPostulaciones", historicoPostulacionesAPI); //futuro uso por ID de STUDENT****
app.use("/historicoUsuario", historicoUsuarioAPI); //no tiene uso en FRONT, USEI
app.use("/institucion",  institucionAPI); //usado en FRONT para POST por INSTITUCION
app.use("/postulacion", postulacionAPI); //usado en FRONT por STUDENT(post), GetAll y GetID por INSTITUCION
app.use("/sectorPertenencia", sectorPertenenciaAPI); //SIN AUTENTICACION usado en FRONT getAll por INSTITUCION
app.use("/sede", sedeAPI); //SIN AUTENTICACION usado en FRONT getAll por STUDENT
app.use("/semestre", semestreAPI); //SIN AUTENTICACION usado en FRONT getAll por STUDENT
app.use("/tiempoacumplir", tiempoAcumplirAPI); //utilizado por INSTIUTICION en FRONT para POST
app.use("/tipoUsuario", tipoUsuarioAPI);  //no tiene uso en FRONT, USEI
app.use("/usuario", UsuarioAPI); //no tiene uso en FRONT, a no ser modificar contraseña****

app.use("/auth", authAPI); 

app.use('/student', studentRoutes);
app.use('/institution', instutionRoutes);
app.use('/usei', useiRoutes);

// Ruta de inicio
app.get("/", (req, res) => {
  res.send("¡Bienvenido al API REST de INTERNSHIP!");
});
// Verifica si cors ya está configurado
if (!app.hasCorsConfigured) {
  //CORS - conexion entre servidores
  const cors = require("cors");

  // Middleware para permitir CORS desde cualquier dominio
  const corsOptions = {
    // Permitir explícitamente el origen del cliente
    origin: 'http://localhost:3001',
    credentials: true, // Esto es necesario para las cookies de sesión y los headers de autenticación
  };
  app.use(cors(corsOptions));

  // Marca la aplicación como configurada con cors
  app.hasCorsConfigured = true;
}
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
// Escucha en el puerto especificado
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});


