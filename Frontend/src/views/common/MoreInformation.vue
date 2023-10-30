<template >
  <div class="container4">
      <div class="wrapper">
          <div class="container"  id="c2">
               <div class="image" id="i2">
                  <div class="city">
                      <img src="https://www.la-razon.com/wp-content/uploads/2022/07/26/13/Campus-U.C.B..jpg" alt="Descripción de la imagen">
                  </div>
              </div>
              <div class="story" id="s2">
                  <div class="city">
                      <h3>Más información sobre <br>Internship by Cato</h3>
                      <p>¡Bienvenido a Internship by Cato, la Bolsa de Trabajo de la Universidad Católica Boliviana "San Pablo" - Sede La Paz! ¿Por qué elegirnos? Te lo explicamos a continuación.</p>
                  </div>
              </div>
          </div>
          <div class="container" id="c3">
               <div class="image" id="i3">
                  <div class="city">
                      <img src="https://www.ucb.edu.bo/wp-content/uploads/2022/05/graduacion.cbba_.jpg" alt="Descripción de la imagen">
                  </div>
              </div>
              <div class="story" id="s0">
                  <div class="city">
                      <h3>Conexión y Oportunidades</h3>
                      <p>En el mundo de las prácticas pre profesionales y pasantías no
curriculares, la conexión adecuada es esencial. En Internship by Cato,
te ofrecemos una plataforma que agiliza el proceso de publicación de
convocatorias, lo que signifca que puedes acceder a oportunidades
más rápido que nunca. Además, nuestras herramientas de orientación
personalizan las publicaciones para adaptarse a tus necesidades,
asegurando que encuentres las ofertas que te interesan.</p>
                  </div>
              </div>
          </div>
          <div class="container" id="c1">
               <div class="image" id="i1">
                  <div class="city">
                      <img class="imagen-centrada" src="https://boliviaemprende.com/wp-content/uploads/2020/02/ucb.jpg" alt="Descripción de la imagen">
                  </div>
              </div>
              <div class="story" id="s1">
                  <div class="city">
                      <h3>Datos Útiles para tu Futuro</h3>
                      <p>Sabemos lo importante que es el seguimiento y la recopilación de
datos en tu camino académico y profesional. Internship by Cato te
permite registrar tu información de manera sencilla, lo que facilita la
posterior generación de reportes para tu desarrollo y crecimiento.</p>
                  </div>
              </div>
          </div>
          <div class="container" id="c3">
               <div class="image" id="i3">
                  <div class="city">
                      <img src="https://www.noticiasfides.com/images/news/2021/01/c-ucb1-407738-27D1.jpg" alt="Descripción de la imagen">
                  </div>
              </div>
              <div class="story" id="s3">
                  <div class="city">
                      <h3> Interacción Simplifcada</h3>
                      <p>Nuestra aplicación se basa en cinco actividades clave: registro de
datos, registro de convocatorias, aprobación de convocatorias,
respuesta a convocatorias y generación de reportes. Estas actividades
interactúan en tres procesos fundamentales, cada uno con su
propósito y tiempo de acción defnidos.</p>
                  </div>
              </div>
          </div>
          <br>
          <br>
          <br>
          <div class="container" id="c2">
               <div class="image" id="i2">
                  <div class="city">
                      <img src="https://lpz.ucb.edu.bo/wp-content/uploads/2023/07/ucb-inscripciones-6-estudiamos-webucb-1.jpg" alt="Descripción de la imagen">
                  </div>
              </div>
              <div class="story" id="s2">
                  <div class="city">
                      <h3>Contacto y Soporte</h3>
                      <p>Para cualquier consulta o asistencia, no dudes en ponerte en contacto con la Unidad de Servicios Estudiantiles Integrales (USEI). Aquí tienes sus datos de contacto:
Unidad de Servicios Estudiantiles Integrales
Bloque N, Subsuelo – Lado Unidad de Recursos Humanos
Teléfono: 2782222 Interno 2723
Directo: 2692723
Celular: 76521445
En Internship by Cato, estamos comprometidos con brindarte las herramientas necesarias para impulsar tu futuro profesional. Únete a nosotros y descubre un mundo de oportunidades. ¡Comienza ahora!</p>
                  </div>
              </div>
          </div>
      </div> 
  </div>
  
  
  </template>
<script>
export default {

};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:200');

body {
font-family: 'Raleway', sans-serif;
background: #eee;
}

.wrapper {
position: absolute;
top: 10%;
left:25%;
width:50%;
height: 50%;
}


.container {
position: auto;
top: 0%;
width: 300%;
height: 100%;
transition: 0.5s all ease;
margin-bottom: 5%;
transform:  scale(0.5);

}



/**prueba */
.container45 {
position: auto;
width: 100%;
height: 100%;
transition: 0.5s all ease;
margin-bottom: 20%;
transform: rotate(0deg); /* Elimina la rotación actual */
}

.rotate-animation3 {
animation: rotate 1s linear infinite; /* Establece la animación de rotación */
}

img{
width: 100%; /* Esto permite que la imagen se ajuste automáticamente al ancho máximo */
height:500px; /* Esto permite que la imagen se ajuste automáticamente al alto máximo */
justify-content: center; /* Centra horizontalmente */
}


.container4 {
  margin-top: 10%; /* Agrega margen superior para separar del navbar */
margin-bottom: 110%; /* Agrega margen inferior para separar del footer */
}

@media (max-width: 1900px) {
  .container4 {
      margin-bottom: 180%; /* Agrega margen inferior para separar del footer */
      margin-top: 10%; /* Aumenta el margen superior en pantallas pequeñas */
}

.wrapper {
left:20%;
}

}

@media (max-width: 1550px) {
.container4 {
      margin-bottom: 180%; /* Agrega margen inferior para separar del footer */
      margin-top: 10%; /* Aumenta el margen superior en pantallas pequeñas */
}

.wrapper {
left:10%;
}
}

@media (max-width: 1550px) {
.container4 {
      margin-bottom: 220%; /* Agrega margen inferior para separar del footer */
      margin-top: 10%; /* Aumenta el margen superior en pantallas pequeñas */
}

.wrapper {
left:10%;
}
}

@media (max-width: 1300px) {
.container4 {
      margin-bottom: 240%; /* Agrega margen inferior para separar del footer */
      margin-top: 0%; /* Aumenta el margen superior en pantallas pequeñas */
}

}

@media (max-width: 1120px) {
.container4 {
      margin-bottom: 260%; /* Agrega margen inferior para separar del footer */
      margin-top: 0%; /* Aumenta el margen superior en pantallas pequeñas */
}

}


@media (max-width: 1070px) {
.container4 {
      margin-bottom: 280%; /* Agrega margen inferior para separar del footer */
      margin-top: 0%; /* Aumenta el margen superior en pantallas pequeñas */
}

}

@media (max-width: 930px) {
.container4 {
      margin-bottom: 310%; /* Agrega margen inferior para separar del footer */
      margin-top: 0%; /* Aumenta el margen superior en pantallas pequeñas */
}

}

@media (max-width: 850px) {
.container4 {
      margin-bottom: 350%; /* Agrega margen inferior para separar del footer */
      margin-top: 0%; /* Aumenta el margen superior en pantallas pequeñas */
}

}
@media (max-width: 830px) {
.container4 {
      margin-bottom: 380%; /* Agrega margen inferior para separar del footer */
      margin-top: 0%; /* Aumenta el margen superior en pantallas pequeñas */
}

}

@media (max-width: 670px) {
.container4 {
      margin-bottom: 460%; /* Agrega margen inferior para separar del footer */
      margin-top: 0%; /* Aumenta el margen superior en pantallas pequeñas */
}

}

/* Eo */
@media (max-width: 590px) {
.container4 {
      margin-bottom: 670%; /* Agrega margen inferior para separar del footer */
      margin-top: 0%; /* Aumenta el margen superior en pantallas pequeñas */
}

.wrapper {
left:0%;
width:50%;
height: 69%;
}
}

@media (max-width: 520px) {
.container4 {
      margin-bottom: 730%; /* Agrega margen inferior para separar del footer */
      margin-top: 0%; /* Aumenta el margen superior en pantallas pequeñas */
}

.wrapper {
left:0%;
width:50%;
height: 69%;
}
}


#c0 {
position: relative;
top: 0%;
width: 100%;
height: 100%;
background: linear-gradient(to bottom, #eba65b 30%, #d99267 100%);
z-index: 300;
box-shadow: 0px 20px 100px #555;
}

#c1 {
background: linear-gradient(to bottom, #59476f 30%, #7b88d1 100%);
box-shadow: 0px 20px 100px #555;
left: 100%;
z-index: 0;

}

#c2 {
left: -100%;
z-index: 0;
background: linear-gradient(to bottom, #59476f 30%, #7b88d1 100%);
box-shadow: 0px 20px 100px #555;
}

.container:hover {
cursor: pointer;
transform: rotate(0deg) scale(1) translateY(10px);
transition: 0.5s all ease;
z-index: 1000;
}

.image {
position: absolute;
top: 0%;
left: 0%;
width: 100%;
height: 45%;
background: linear-gradient(to top, #eba65b 30%, #d99267 100%);
}

#i1 {
background: linear-gradient(to bottom, #59476f 30%, #7b88d1 100%);
}

#i2 {
background: linear-gradient(to bottom, #59476f 30%, #7b88d1 100%);
}

span {
position: absolute;
top: 0%;
left: 55%;
border-radius: 100%;
background-color: #fff;
z-index: 10;
}

.sun {
position: absolute;
top: 50%;
height: 50%;
left: 0%;
width: 100%;
}

.sun1 {
width: 50px;
height: 50px;
box-shadow: 0px 0px 10px #fff;
}

.st4 {
fill: #f8c56f;
opacity: 1;
}

.st5,
.st7 {
fill: #fff;
}

#sh2 {
opacity: 0.5;
}

#sh3 {
opacity: 0.5;
}

.st6 {
fill: #59476f;
}

.st10 {
fill: #c5a7e5;
stroke: #222;
}

.st11 {
stroke: #212121;
opacity: 0.5;
}

#sh1 {
fill: #f8c56f;
opacity: 0.5;
}

.st0 {
fill: #a25a62;
stroke: none;
}

.st1 {
fill: none;
stroke: #a25a62;
stroke-width: 2;
stroke-miterlimit: 10;
}

.st2 {
fill: #cd775c;
}

.st3 {
fill: #fff;
opacity: 0.3;
}

.story {/*parte del texto de las tarejta */
position: absolute;
top: 45%;
left: 0%;
height: 55%;
width: 100%;
background: linear-gradient(to bottom, #eba65b 0%, #d99267 40%);
z-index: 30;
}

#s1 {
background: linear-gradient(to top, #5b62a2 0%, #7b88d1 100%);
}

#s2 {
background: linear-gradient(to top, #5b62a2 0%, #7b88d1 120%);
}

.info {
position: absolute;
top: 0%;
}

h3 {
text-align: center;
text-shadow: 0px 0px 10px #eee;
color: #eee;
letter-spacing: 2px;
}

h4 {
color: #111;
position: absolute;
top: 30%;
left: 30%;
letter-spacing: 2px;
}

h1 {
color: #111;
position: fixed;
top: 0%;
left: 30%;
letter-spacing: 2px;
}

p {
font-size: 20px;
color: #fff;
padding: 0px 20px 20px 20px;
line-height: 150%;
text-align: center;
letter-spacing: 1px;
}

.page {
position: absolute;
top: 80%;
width: 100%;
left: 0%;
height: 20%;
z-index: 30;
}

li {
position: absolute;
top: 50%;
list-style: none;
color: #111;
}

li:nth-child(1) {
left: 15%;
animation: simple1 1s linear infinite;
}

li:nth-child(2) {
right: 15%;
animation: simple 1s linear infinite;
}

@keyframes simple {
50% {
  transform: translateX(10px);
  opacity: 0.5;
}
100% {
  transform: translateX(10px);
  opacity: 0;
}
}

@keyframes simple1 {
50% {
  transform: translateX(-10px);
  opacity: 0.5;
}
100% {
  transform: translateX(-10px);
  opacity: 0;
}
}

@keyframes entry {
0% {
  top: -20%;
  opacity: 0.1;
}
100% {
  top: 0%;
}
}
</style>
