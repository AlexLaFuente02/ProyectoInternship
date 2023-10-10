CREATE TABLE tipousuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL,
	fechacreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO tipousuario (tipo) VALUES
('Administrador'),
('Estudiante'),
('Institución');