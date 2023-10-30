<template>
  <footer>
    <div class="footer__logo">
      <img src="../images/USEI.png"  alt="Unidad de Servicios Estudiantiles Integrales"/>
    </div>
    <div class="footer__links">
        <a
          class="social-media-btn"
          style="background-color: #3b5998"
          href="https://www.facebook.com/usei.lpz"
          role="button"
          ><font-awesome-icon :icon="['fab', 'facebook']"
        /></a>
        <a
          class="social-media-btn"
          style="background-color: #55acee"
          href="https://twitter.com/UCBLaPaz"
          role="button"
          ><font-awesome-icon :icon="['fab', 'twitter']"
        /></a>
        <a
          class="social-media-btn"
          style="background-color: #dd4b39"
          href="https://mail.google.com/mail/u/1/#inbox?compose=DmwnWsCRjWtfwVwNPvpsfBxKhjWRJWTNWsBrVrjkhPXCqBqStBvQlDTKSnBpJGCFDVNPRRMBDXDV"
          role="button"
          ><font-awesome-icon :icon="['fab', 'google']"
        /></a>
        <a
          class="social-media-btn"
          style="background-color: #ac2bac"
          href="https://www.instagram.com/usei.lapaz/?fbclid=IwAR07aYlD7DflEtSJDuW6ERzw_r7DjawQAQVxbXcShM4RmZjLHQAUPensFyc"
          role="button"
          ><font-awesome-icon :icon="['fab', 'instagram']"
        /></a>
        <a
          class="social-media-btn"
          style="background-color: #0082ca"
          href="https://www.linkedin.com/in/usei-la-paz-080327253/?originalSubdomain=bo"
          role="button"
          ><font-awesome-icon :icon="['fab', 'linkedin']"
        /></a>
        <a
          class="social-media-btn"
          style="background-color: #333333"
          href="https://www.tiktok.com/@lacato._?is_from_webapp=1&sender_device=pc"
          role="button"
          ><font-awesome-icon :icon="['fab', 'tiktok']"
        /></a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer{
    background-color: #FDFEFF;
    box-shadow: 0 24px 64px -2px rgba(0, 0, 0, 0.02), 0 6px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -2px rgba(0, 0, 0, 0.08);
    padding: 1rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

}
/*Modo oscuro*/
.dark-theme footer{
    background-color: #434B54;
    box-shadow: 0 24px 64px -2px rgba(255, 255, 255, 0.02), 0 6px 16px -2px rgba(255, 255, 255, 0.06), 0 2px 6px -2px rgba(255, 255, 255, 0.08);
}
.dark-theme .footer__logo {
    filter: invert(20%) sepia(100%) saturate(100%) hue-rotate(220deg);
}
.social-media-btn {
  color: white;
  padding: 15%;
  border-radius: 30px;
  margin-right: 6px;
}
/*Reducir el tamaño del img*/
img{
  width: 280px;
  height: auto;
}
.footer__links {
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 768px) {
  footer{
    flex-direction: column-reverse;
  }
  .footer__links{
    margin-top: 1rem;
  }
  img{
    width: 200px;
    height: auto;
  }
}
@media (max-width: 576px) {
  .footer__links{
    margin-top: 0.5rem;
  }
}

</style>
