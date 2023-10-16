<template>
  <footer>
    <div class="container">
      <div class="content__footer">
        <div class="profil">
          <div class="logo__area">
            <font-awesome-icon
              :icon="['fas', 'earth-americas']"
              size="2x"
              style="color: #838b8e"
            />
            <span class="logo__name">Internship</span>
          </div>
          <div class="desc__area">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              architecto minima suscipit hic! Nulla labore illum ratione unde
              perferendis, totam suscipit sequi fugiat. Tempora quaerat neque
              laudantium? Perspiciatis, non nostrum?
            </p>
          </div>
          <div class="social_media">
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              style="color: #838b8e"
            />
            <font-awesome-icon
              :icon="['fab', 'tiktok']"
              style="color: #838b8e"
            />
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              style="color: #838b8e"
            />
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              style="color: #838b8e"
            />
          </div>
        </div>

        <div class="service__area">
          <ul class="service__header">
            <li class="service__name">Enlaces de navegación</li>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Mis pasantías</a></li>
            <li><a href="#">Busqueda de pasantías</a></li>
            <li><a href="#">Mi perfil</a></li>
            <li><a href="#">Contáctenos</a></li>
          </ul>
          <ul class="service__header">
            <li class="service__name">Información de contacto</li>
            <li><a href="tel:+591123456789">Teléfono: 123456789</a></li>
            <li>
              <a href="mailto:info@internship">Correo: info@internship</a>
            </li>
            <li><a href="#">Dirección: Calle 123</a></li>
          </ul>
          <ul class="service_header">
            <li class="service__name">Acerca de nosotros</li>
            <li><a href="#">¿Quienes somos?</a></li>
            <li><a href="#">Nuestro equipo</a></li>
            <li><a href="#">Nuestros servicios</a></li>
            <li><a href="#">Preguntas frecuentes</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="footer__bottom">
        <div class="copy__right">
          <font-awesome-icon
            icon="fas-solid fa-registered"
            style="color: #838b8e"
          />
          <span>2023 Internship</span>
        </div>
        <div class="tou">
          <a href="#">Términos de uso</a>
          <a href="#">Politica de privacidad</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
/* Footer */
footer {
  background-color: #1b3039;
  color: #838b8e;
  padding: 50px 0;
}
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}
.copy__right {
  display: flex;
  align-items: center;
}
.copy__right span {
  margin-left: 10px;
}
.tou a {
  margin-left: 20px;
}
.content__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.profil {
  width: 30%;
}
.logo__area {
  display: flex;
  align-items: center;
}
.logo__name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 10px;
}
.desc__area {
  margin-top: 20px;
}
.social_media {
  margin-top: 20px;
}
.social_media a {
  margin-right: 20px;
}
.service__area {
  display: flex;
  justify-content: space-between;
  width: 70%;
}
.service__header {
  margin-right: 40px;
}
li.service__name {
  color: #fff;
  font-weight: 600;
}
.service__header li a {
  color: #838b8e;
  padding-bottom: 1px;
  font-weight: 400;
}
.service__header li a:hover {
  color: #fff;
}
.service__header li {
  margin-bottom: 10px;
}
hr {
  height: 1px;
  border: none;
  background-color: #838b8e;
  margin-bottom: 1rem;
}
@media screen and (max-width: 768px) {
  .content__footer {
    flex-direction: column;
  }
  .profil {
    width: 100%;
  }
  .service__area {
    width: 100%;
  }
  .service__header {
    margin-right: 0;
  }
}
</style>
