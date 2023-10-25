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


CREATE TABLE estadoconvocatoria (
    id int AUTO_INCREMENT PRIMARY KEY,
    nombreestadoconvocatoria varchar(100) NOT NULL
);

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


-- Table: historico_convocatorias
CREATE TABLE historico_convocatorias (
    id_h int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_c int NOT NULL, -- No tiene restricción de clave foránea
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
    -- Las siguientes claves foráneas no incluyen a id_c
    FOREIGN KEY (estadoconvocatoria_id) REFERENCES estadoconvocatoria (id),
    FOREIGN KEY (institucion_id) REFERENCES institucion (id),
    FOREIGN KEY (tiempoacumplir_id) REFERENCES tiempoacumplir (id)
);

/*triggers historico convocatoria*/
DELIMITER //
CREATE TRIGGER after_convocatoria_insert
AFTER INSERT ON convocatoria
FOR EACH ROW
BEGIN
    INSERT INTO historico_convocatorias (id_c, areapasantia, descripcionfunciones, requisitoscompetencias, horario_inicio, horario_fin, fechasolicitud, fechaseleccionpasante, estadoconvocatoria_id, institucion_id, tiempoacumplir_id)
    VALUES (NEW.id, NEW.areapasantia, NEW.descripcionfunciones, NEW.requisitoscompetencias, NEW.horario_inicio, NEW.horario_fin, NEW.fechasolicitud, NEW.fechaseleccionpasante, NEW.estadoconvocatoria_id, NEW.institucion_id, NEW.tiempoacumplir_id);
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER after_convocatoria_update
AFTER UPDATE ON convocatoria
FOR EACH ROW
BEGIN
    INSERT INTO historico_convocatorias (id_c, areapasantia, descripcionfunciones, requisitoscompetencias, horario_inicio, horario_fin, fechasolicitud, fechaseleccionpasante, estadoconvocatoria_id, institucion_id, tiempoacumplir_id)
    VALUES (NEW.id, NEW.areapasantia, NEW.descripcionfunciones, NEW.requisitoscompetencias, NEW.horario_inicio, NEW.horario_fin, NEW.fechasolicitud, NEW.fechaseleccionpasante, NEW.estadoconvocatoria_id, NEW.institucion_id, NEW.tiempoacumplir_id);
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER after_convocatoria_delete
AFTER DELETE ON convocatoria
FOR EACH ROW
BEGIN
    INSERT INTO historico_convocatorias (id_c, areapasantia, descripcionfunciones, requisitoscompetencias, horario_inicio, horario_fin, fechasolicitud, fechaseleccionpasante, estadoconvocatoria_id, institucion_id, tiempoacumplir_id)
    VALUES (OLD.id, OLD.areapasantia, OLD.descripcionfunciones, OLD.requisitoscompetencias, OLD.horario_inicio, OLD.horario_fin, OLD.fechasolicitud, OLD.fechaseleccionpasante, OLD.estadoconvocatoria_id, OLD.institucion_id, OLD.tiempoacumplir_id);
END;
//
DELIMITER ;
