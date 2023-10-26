# 🚀 Backend_Internship

## 📌 Descripción del proyecto:

**Internship by Cato** es una plataforma integral diseñada para transformar la forma en que se manejan las prácticas pre-profesionales y pasantías no curriculares. No solo optimiza y simplifica el proceso de publicación de convocatorias, sino que también ofrece un conjunto de herramientas robustas para diversas partes interesadas:

- **Para los Estudiantes**: Se convierte en un centro unificado donde pueden obtener información detallada sobre las convocatorias y seguir de cerca sus postulaciones, todo desde una sola página web.

- **Para las Instituciones y Empresas**: Les brinda una plataforma eficiente para gestionar sus convocatorias, desde la creación hasta la recepción de solicitudes de postulación, facilitando así la selección de candidatos ideales.

- **Para el Admin USEI**: Actúa como superusuario, otorgándole la capacidad de gestionar y aprobar empresas, así como validar y dar luz verde a sus convocatorias. Adicionalmente, se está trabajando en incorporar características analíticas, que ofrecerán estadísticas valiosas sobre estudiantes e instituciones para una mejor toma de decisiones.

Este enfoque multipropósito asegura que cada usuario, ya sea un estudiante, una institución o el administrador, tenga una experiencia personalizada y eficiente en la plataforma.


## 🎯 Objetivos del proyecto:

- Proporcionar endpoints para gestionar [ej. usuarios, estudiantes, instituciones, convocatorias, postulaciones, etc.].
- Asegurar la información del usuario mediante cifrado de contraseñas y autenticación. 
- Facilitar la integración con un frontend a través de CORS.
- Ofrecer documentación API a través de Swagger.

## 📣 Consideraciones importantes:

- Asegúrate de tener Node.js instalado para ejecutar el backend.
- La configuración de la base de datos debe estar correcta para conectarse al servidor MySQL.
- Las variables de entorno o los archivos de configuración no están incluidos en el repositorio debido a razones de seguridad.

## 💻 Tecnologías utilizadas:

- **Lenguaje de Programación**: JavaScript (Node.js).
- **Framework de Desarrollo**: Express.js.
- **Base de datos**: MySQL con Sequelize ORM.
- **Autenticación**: Bcrypt para cifrado de contraseñas, Passport para autenticación, y Passport-local para la estrategia de autenticación local.
- **Gestión de sesiones**: Express-session.
- **Documentación API**: Swagger-jsdoc y Swagger-ui-express.
- **Control de Versiones**: Git.

## 📂 Código fuente:

El código fuente del proyecto backend se encuentra alojado en nuestro repositorio GitHub. Se ha puesto especial énfasis en asegurar que el código esté organizado, bien estructurado y comentado para facilitar su lectura y mantenimiento.

Enlace al repositorio: [insertar enlace del repositorio aquí]

## 🛠 Comandos para instalación:

1. Dentro de la carpeta ProyectoInternship:

```
cd Backend
```

2. Instalamos nodemon para crear la carpeta node_modules y package-lock.json (ignoradas por .gitignore):

```
npm install -D nodemon
```

3. Instalamos express:

```
npm i express
```

4. Instalamos mysql en el proyecto:

```
npm i mysql
```

5. Instalamos sequelize en el proyecto:

```
npm i sequelize
```

6. Instalamos mysql2 para sequelize en el proyecto:

```
npm i mysql2
```


<<<<<<< Updated upstream
## Comandos para compilación:
=======
```
npm install cors
```

8. Instalacion de swagger-jsdoc y swagger-ui-express:

```
npm install swagger-jsdoc swagger-ui-express
```

9. Bcrypt para el cifrado de contraseñas:

   ```
   npm install bcrypt
   ```

10. Passport para la autenticación:
   ```
   npm install passport
   ```

11. Passport-local para la estrategia de autenticación local:
   ```
   npm install passport-local
   ```

12. Express-session para gestionar sesiones de usuario:
   ```
   npm install express-session
   ```

## ⚙ Comandos para compilación:
>>>>>>> Stashed changes

1. SIEMPRE entrar a /Backend:

```
cd Backend
```

2. Para ejecutar como desarrollador:

```
npm run dev
```

---

Para más detalles o consultas sobre el proyecto, no dudes en contactarnos. ¡Gracias por usar nuestro backend! 🙏🎉

---
