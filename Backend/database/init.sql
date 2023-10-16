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
    tipousuario_id int NOT NULL UNIQUE,
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