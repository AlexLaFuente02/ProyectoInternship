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
    /*id varchar(36) PRIMARY KEY,  -- Cambiado a VARCHAR para usar UUID Comentado por ahora*/
    id INT AUTO_INCREMENT PRIMARY KEY,
    idusuario varchar(50) NOT NULL,
    contrasenia varchar(255) NOT NULL,
    tipousuario_id int NOT NULL,
    CONSTRAINT userid UNIQUE (idusuario),
    CONSTRAINT usuario_tipousuario FOREIGN KEY (tipousuario_id) REFERENCES tipousuario (id)
);

INSERT INTO usuario (idusuario, contrasenia, tipousuario_id) VALUES
('admin', 'admin', 1);

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

-- Table: sede
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


/*INSTITUCION*/
-- Table: institucion
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

INSERT INTO institucion 
(nombreinstitucion,  reseniainstitucion, logoinstitucion, nombrecontacto,
correocontacto, celularcontacto, usuario_id, sectorpertenencia_id) 
VALUES 
('EMAPA', 'Somos la institucion de agua de la ciudad de La Paz', NULL, 'Juan Pérez',
'juan.perez@utech.edu', '123-456-7890', null, 1);

 /*Hacer trigger para asignar valor a usuario_id cuando USEI aprobar institucion*/
