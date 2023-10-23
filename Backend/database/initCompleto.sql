-- Table: tipousuario
CREATE TABLE tipousuario (
    id int AUTO_INCREMENT PRIMARY KEY,
    tipo varchar(50) NOT NULL
);

-- Table: usuario
CREATE TABLE usuario (
    id int AUTO_INCREMENT PRIMARY KEY,
    idusuario varchar(50) NOT NULL,
    contrasenia varchar(255) NOT NULL,
    tipousuario_id int NOT NULL,
    CONSTRAINT userid UNIQUE (idusuario),
    CONSTRAINT usuario_tipousuario FOREIGN KEY (tipousuario_id) REFERENCES tipousuario (id)
);

-- Table: estadopostulacion
CREATE TABLE estadopostulacion (
    id int AUTO_INCREMENT PRIMARY KEY,
    nombreestadopostulacion varchar(100) NOT NULL
);

-- Table: sectorpertenencia
CREATE TABLE sectorpertenencia (
    id int AUTO_INCREMENT PRIMARY KEY,
    nombresectorpertenencia varchar(100) NOT NULL
);

-- Table: sede
CREATE TABLE sede (
    id int AUTO_INCREMENT PRIMARY KEY,
    nombresede varchar(100) NOT NULL
);

-- Table: semestre
CREATE TABLE semestre (
    id int AUTO_INCREMENT PRIMARY KEY,
    codigosemestre varchar(30) NOT NULL
);

-- Table: carrera
CREATE TABLE carrera (
    id int AUTO_INCREMENT PRIMARY KEY,
    nombrecarrera varchar(100) NOT NULL
);

-- Table: estudiante
CREATE TABLE estudiante (
    id int AUTO_INCREMENT PRIMARY KEY,
    usuario_id int NOT NULL UNIQUE,
    nombres varchar(50) NOT NULL,
    apellidos varchar(50) NOT NULL,
    carnetidentidad varchar(15) NOT NULL,
    correoelectronico varchar(100) NOT NULL,
    celularcontacto varchar(15) NOT NULL,
    graduado bit NOT NULL,
    carrera_id int NOT NULL,
    semestre_id int NULL,
    sede_id int NULL,
    aniograduacion int NULL,
    linkcurriculumvitae varchar(255) NOT NULL,
    CONSTRAINT estudiantes_carrera FOREIGN KEY (carrera_id) REFERENCES carrera (id),
    CONSTRAINT estudiantes_semestre FOREIGN KEY (semestre_id) REFERENCES semestre (id),
    CONSTRAINT estudiantes_sede FOREIGN KEY (sede_id) REFERENCES sede (id),
    CONSTRAINT estudiantes_usuario FOREIGN KEY (usuario_id) REFERENCES usuario (id)
);

-- Table: institucion
CREATE TABLE institucion (
    id int AUTO_INCREMENT PRIMARY KEY,
    nombreinstitucion varchar(100) NOT NULL,
    reseniainstitucion text NULL,
    logoinstitucion BLOB NULL,  -- Cambiado a BLOB ya que MySQL no tiene tipo image
    nombrecontacto varchar(100) NOT NULL,
    correocontacto varchar(100) NOT NULL,
    celularcontacto varchar(15) NOT NULL,
    usuario_id int NULL,
    sectorpertenencia_id int NOT NULL,
    CONSTRAINT instituciones_sectorpertenencia FOREIGN KEY (sectorpertenencia_id) REFERENCES sectorpertenencia (id),
    CONSTRAINT institucion_usuario FOREIGN KEY (usuario_id) REFERENCES usuario (id)
);

-- Table: adminusei
CREATE TABLE adminusei (
    id int AUTO_INCREMENT PRIMARY KEY,
    usuario_id int NOT NULL UNIQUE,
    CONSTRAINT adminusei_usuario FOREIGN KEY (usuario_id) REFERENCES usuario (id)
);

-- Table: estadoconvocatoria
CREATE TABLE estadoconvocatoria (
    id int AUTO_INCREMENT PRIMARY KEY,
    nombreestadoconvocatoria varchar(100) NOT NULL
);

-- Table: convocatoria
CREATE TABLE convocatoria (
    id int AUTO_INCREMENT PRIMARY KEY,
    institucion_id int NOT NULL,
    areapasantia varchar(100) NOT NULL,
    descripcionfunciones text NOT NULL,
    requisitoscompetencias text NOT NULL,
    horario text NOT NULL,
    tiempoacumplir text NOT NULL,
    fechasolicitud date NOT NULL,
    fechaseleccionpasante date NOT NULL,
    estadoconvocatoria_id int NOT NULL,
    CONSTRAINT convocatoria_estadoconvocatoria FOREIGN KEY (estadoconvocatoria_id) REFERENCES estadoconvocatoria (id),
    CONSTRAINT convocatoria_institucion FOREIGN KEY (institucion_id) REFERENCES institucion (id)
);

-- Table: aprobacionconvocatoria
CREATE TABLE aprobacionconvocatoria (
    id int AUTO_INCREMENT PRIMARY KEY,
    fechaaprobacion date NOT NULL,
    estado varchar(100) NOT NULL,
    adminusei_id int NOT NULL,
    convocatoria_id int NOT NULL,
    CONSTRAINT aprobacionconvocatoria_adminusei FOREIGN KEY (adminusei_id) REFERENCES adminusei (id),
    CONSTRAINT aprobacionconvocatoria_convocatoria FOREIGN KEY (convocatoria_id) REFERENCES convocatoria (id)
);

-- Table: estadosolicitudinstitucion
CREATE TABLE estadosolicitudinstitucion (
    id int AUTO_INCREMENT PRIMARY KEY,
    fechaaprobacion date NOT NULL,
    estadosolicitud varchar(100) NOT NULL,
    adminusei_id int NOT NULL,
    institucion_id int NOT NULL,
    CONSTRAINT estadosolicitudinstitucion_adminusei FOREIGN KEY (adminusei_id) REFERENCES adminusei (id),
    CONSTRAINT estadosolicitudinstitucion_institucion FOREIGN KEY (institucion_id) REFERENCES institucion (id)
);

-- Table: postulacion
CREATE TABLE postulacion (
    id int AUTO_INCREMENT PRIMARY KEY,
    fechapostulacion date NOT NULL,
    estadopostulacion_id int NOT NULL,
    estudiante_id int NOT NULL,
    convocatoria_id int NOT NULL,
    CONSTRAINT postulacion_estadopostulacion FOREIGN KEY (estadopostulacion_id) REFERENCES estadopostulacion (id),
    CONSTRAINT postulacion_estudiante FOREIGN KEY (estudiante_id) REFERENCES estudiante (id),
    CONSTRAINT postulacion_convocatoria FOREIGN KEY (convocatoria_id) REFERENCES convocatoria (id)
);

-- Table: historico_convocatorias
-- Realizar procedimiento almacenado
CREATE TABLE historico_convocatorias (
    id_h int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_c int NOT NULL,
    institucion_id int NOT NULL,
    areapasantia varchar(100) NOT NULL,
    descripcionfunciones text NOT NULL,
    requisitoscompetencias text NOT NULL,
    horario text NOT NULL,
    tiempoacumplir text NOT NULL,
    fechasolicitud date NOT NULL,
    fechaseleccionpasante date NOT NULL,
    estadoconvocatoria_id int NOT NULL,
    FOREIGN KEY (id_c) REFERENCES convocatoria (id),
    FOREIGN KEY (estadoconvocatoria_id) REFERENCES estadoconvocatoria (id),
    FOREIGN KEY (institucion_id) REFERENCES institucion (id)
);

-- Table: historico_postulaciones
-- Realizar procedimiento almacenado
CREATE TABLE historico_postulaciones (
    id_h int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_p int NOT NULL,
    fechapostulacion date NOT NULL,
    estadopostulacion_id int NOT NULL,
    estudiante_id int NOT NULL,
    convocatoria_id int NOT NULL,
    FOREIGN KEY (id_p) REFERENCES postulacion (id),
    FOREIGN KEY (estadopostulacion_id) REFERENCES estadopostulacion (id),
    FOREIGN KEY (estudiante_id) REFERENCES estudiante (id),
    FOREIGN KEY (convocatoria_id) REFERENCES convocatoria (id)
);

-- Historico de usuario
-- Realizar procedimiento almacenado
CREATE TABLE historico_usuario (
    id_h int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_u int NOT NULL,
    idusuario varchar(50) NOT NULL,
    contrasenia varchar(255) NOT NULL,
    tipousuario_id int NOT NULL,
    FOREIGN KEY (id_u) REFERENCES usuario (id),
    FOREIGN KEY (tipousuario_id) REFERENCES tipousuario (id)
);
