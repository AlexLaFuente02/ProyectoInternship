CREATE TABLE tipousuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL,
	fechacreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tipousuario (tipo) VALUES
('Administrador'),
('Estudiante'),
('Institución');

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idusuario varchar(50) NOT NULL,
    contrasenia varchar(255) NOT NULL,
    tipousuario_id int NOT NULL,
    CONSTRAINT userid UNIQUE (idusuario),
    CONSTRAINT usuario_tipousuario FOREIGN KEY (tipousuario_id) REFERENCES tipousuario (id)
);

INSERT INTO usuario (idusuario, contrasenia, tipousuario_id) VALUES
('alex', 'alex123', 1);
#insertar el resto de un request la contrasenia porque la contraseña debe estar hasheada

CREATE TABLE estadopostulacion (
    id int AUTO_INCREMENT PRIMARY KEY,
    nombreestadopostulacion varchar(100) NOT NULL
);

INSERT INTO estadopostulacion (nombreestadopostulacion) VALUES
('APROBADO'),
('EN ESPERA'),
('RECHAZADO');

CREATE TABLE semestre (
    id int AUTO_INCREMENT PRIMARY KEY,
    codigosemestre varchar(30) NOT NULL
);

INSERT INTO semestre (codigosemestre) VALUES
("2-2022"),
("1-2023"),
("2-2023");

CREATE TABLE sectorpertenencia (
    id int AUTO_INCREMENT PRIMARY KEY,
    nombresectorpertenencia varchar(100) NOT NULL
);

INSERT INTO sectorpertenencia (nombresectorpertenencia) VALUES
("SECTOR 1"),
("SECTOR 2"),
("SECTOR 3");

CREATE TABLE sede (
    id int AUTO_INCREMENT PRIMARY KEY,
    nombresede varchar(100) NOT NULL
);

INSERT INTO sede (nombresede) VALUES
("La Paz"),
("Cochabamba"),
("Santa Cruz");

CREATE TABLE carrera (
    id int AUTO_INCREMENT PRIMARY KEY,
    nombrecarrera varchar(100) NOT NULL
);

INSERT INTO carrera (nombrecarrera) VALUES
("Carrera 1"),
("Carrera 2"),
("Carrera 3");


CREATE TABLE institucion (
    id int AUTO_INCREMENT PRIMARY KEY,
    nombreinstitucion varchar(100) NOT NULL,
    reseniainstitucion text NULL,
    logoinstitucion BLOB NULL,  
    nombrecontacto varchar(100) NOT NULL,
    correocontacto varchar(100) NOT NULL,
    celularcontacto varchar(15) NOT NULL,
    usuario_id int NULL,
    sectorpertenencia_id int NOT NULL,
    CONSTRAINT instituciones_sectorpertenencia FOREIGN KEY (sectorpertenencia_id) REFERENCES sectorpertenencia (id),
    CONSTRAINT institucion_usuario FOREIGN KEY (usuario_id) REFERENCES usuario (id)
);

INSERT INTO institucion 
(nombreinstitucion,  reseniainstitucion, logoinstitucion, nombrecontacto,
correocontacto, celularcontacto, usuario_id, sectorpertenencia_id) 
VALUES 
('EMAPA', 'Somos la institucion de agua de la ciudad de La Paz', NULL, 'Juan Pérez',
'juan.perez@utech.edu', '123-456-7890', null, 1);

#Hacer trigger para asignar valor a usuario_id cuando USEI aprobar institucion


CREATE TABLE estadoconvocatoria (
    id int AUTO_INCREMENT PRIMARY KEY,
    nombreestadoconvocatoria varchar(100) NOT NULL
);
CREATE TABLE adminusei (
    id int AUTO_INCREMENT PRIMARY KEY,
    usuario_id int NOT NULL UNIQUE,
    CONSTRAINT adminusei_usuario FOREIGN KEY (usuario_id) REFERENCES usuario (id)
);

INSERT INTO adminusei (usuario_id) VALUES (1);



INSERT INTO estadoconvocatoria (nombreestadoconvocatoria) VALUES
('ACTIVA'),
('PENDIENTE'),
('INACTIVA');


CREATE TABLE tiempoacumplir (
    id int AUTO_INCREMENT PRIMARY KEY,
    descripcion varchar(255) NOT NULL
);

INSERT INTO tiempoacumplir (descripcion) VALUES
('8 horas'),
('4 horas'),
('12 horas');


CREATE TABLE convocatoria (
    id int AUTO_INCREMENT PRIMARY KEY,
    areapasantia varchar(100) NOT NULL,
    descripcionfunciones text NOT NULL,
    requisitoscompetencias text NOT NULL,
    horario_inicio TIME NOT NULL,
    horario_fin TIME NOT NULL,
    fechasolicitud date NOT NULL,
    fechaseleccionpasante date NULL,
    estadoconvocatoria_id int NOT NULL,
    institucion_id int NOT NULL,
    tiempoacumplir_id int NOT NULL,
    CONSTRAINT convocatoria_estadoconvocatoria FOREIGN KEY (estadoconvocatoria_id) REFERENCES estadoconvocatoria (id),
    CONSTRAINT convocatoria_institucion FOREIGN KEY (institucion_id) REFERENCES institucion (id),
    CONSTRAINT convocatoria_tiempoacumplir FOREIGN KEY (tiempoacumplir_id) REFERENCES tiempoacumplir (id)
);

INSERT INTO convocatoria
(areapasantia, descripcionfunciones, requisitoscompetencias, horario_inicio, horario_fin, fechasolicitud, fechaseleccionpasante, estadoconvocatoria_id, institucion_id, tiempoacumplir_id)
VALUES
('Area 1', 'Descripcion 1', 'Requisitos 1', '08:00:00', '12:00:00', '2021-01-01', '2021-01-01', 1, 1, 1),
('Area 2', 'Descripcion 2', 'Requisitos 2', '08:00:00', '12:00:00', '2021-01-01', '2021-01-01', 1, 1, 1),
('Area 3', 'Descripcion 3', 'Requisitos 3', '08:00:00', '12:00:00', '2021-01-01', '2021-01-01', 1, 1, 1);


CREATE TABLE historico_convocatorias (
    id_h int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_c int NOT NULL, 
    areapasantia varchar(100) NOT NULL,
    descripcionfunciones text NOT NULL,
    requisitoscompetencias text NOT NULL,
    horario_inicio TIME NOT NULL,
    horario_fin TIME NOT NULL,
    fechasolicitud date NOT NULL,
    fechaseleccionpasante date NULL,
    estadoconvocatoria_id int NOT NULL,
    institucion_id int NOT NULL,
    tiempoacumplir_id int NOT NULL,
    accion ENUM('post', 'put', 'delete') NOT NULL,
    fecha_accion TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (estadoconvocatoria_id) REFERENCES estadoconvocatoria (id),
    FOREIGN KEY (institucion_id) REFERENCES institucion (id),
    FOREIGN KEY (tiempoacumplir_id) REFERENCES tiempoacumplir (id)
);


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

INSERT INTO estudiante (usuario_id, nombres, apellidos, carnetidentidad, correoelectronico, celularcontacto, graduado, carrera_id, semestre_id, sede_id, aniograduacion, linkcurriculumvitae)
VALUES (1, 'Juan', 'Pérez', '1234567', 'juan@example.com', '123-456-7890', 1, 2, 3, 1, 2022, 'https://example.com/juan_cv.pdf');


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

INSERT INTO postulacion (fechapostulacion, estadopostulacion_id, estudiante_id, convocatoria_id)
VALUES ('2023-10-25', 1, 1, 3);

CREATE TABLE historico_postulaciones (
    id_h int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_p int NOT NULL,
    fechapostulacion date NOT NULL,
    estadopostulacion_id int NOT NULL,
    estudiante_id int NOT NULL,
    convocatoria_id int NOT NULL,
    accion ENUM('post', 'put', 'delete') NOT NULL,
    fecha_accion TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (id_p) REFERENCES postulacion (id),
    FOREIGN KEY (estadopostulacion_id) REFERENCES estadopostulacion (id),
    FOREIGN KEY (estudiante_id) REFERENCES estudiante (id),
    FOREIGN KEY (convocatoria_id) REFERENCES convocatoria (id)
);


CREATE TABLE historico_usuario (
    id_h int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_u int NOT NULL,
    idusuario varchar(50) NOT NULL,
    contrasenia varchar(255) NOT NULL,
    tipousuario_id int NOT NULL
);

CREATE TABLE aprobacionconvocatoria (
    id int AUTO_INCREMENT PRIMARY KEY,
    fechaaprobacion date NOT NULL,
    estado varchar(100) NOT NULL,
    adminusei_id int NOT NULL,
    convocatoria_id int NOT NULL,
    CONSTRAINT aprobacionconvocatoria_adminusei FOREIGN KEY (adminusei_id) REFERENCES adminusei (id),
    CONSTRAINT aprobacionconvocatoria_convocatoria FOREIGN KEY (convocatoria_id) REFERENCES convocatoria (id)
);

INSERT INTO aprobacionconvocatoria (fechaaprobacion, estado, adminusei_id, convocatoria_id)
VALUES ('2023-10-25', 'APROBADO', 1, 3);