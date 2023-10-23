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