<template>
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-5 px-6 border-top-1 bg-body-tertiary text-bg-light">
    <div class="col-md-4 d-flex align-items-center">
      <div class="mb-3 mb-md-0 d-none d-md-block">
        <img src="../images/USEI.png" class="w-100" alt="Unidad de Servicios Estudiantiles Integrales"/>
      </div>
      <div class="col-12 col-md-4 mb-4 mb-md-0 col-md-8 d-none d-md-block text-center">
        <span>Todos los Derechos Reservados &copy; Universidad Católica Boliviana"San Pablo". 2023.</span>
      </div>
    </div>
    <div class="col-12 mb-3 d-md-none">
      <img src="../images/USEI.png" class="w-100" alt="Unidad de Servicios Estudiantiles Integrales" />
    </div>
    <div class="col-12 d-md-none text-center mb-4">
      <span>Todos los Derechos Reservados &copy; Universidad Católica Boliviana "San Pablo". 2023.</span>
    </div>
    <div class="col-md-4 d-flex align-items-center justify-content-center mb-4 mb-md-0 me-md-auto" >
      <font-awesome-icon :icon="['fas', 'earth-americas']" size="2x" class="me-3" />
      <span class="text-3xl text-center">INTERNSHIP BY UCB</span>
    </div>
    <div class="text-center justify-content-center">
      <h3>Nuestras Redes Sociales:</h3>
      <div class="p-3 pb-0">
        <a
          class="btn text-white btn-floating rounded-circle m-1"
          style="background-color: #3b5998"
          href="https://www.facebook.com/usei.lpz"
          role="button"
          ><font-awesome-icon :icon="['fab', 'facebook']"
        /></a>
        <a
          class="btn text-white btn-floating rounded-circle m-1"
          style="background-color: #55acee"
          href="https://twitter.com/UCBLaPaz"
          role="button"
          ><font-awesome-icon :icon="['fab', 'twitter']"
        /></a>
        <a
          class="btn text-white btn-floating rounded-circle m-1"
          style="background-color: #dd4b39"
          href="https://mail.google.com/mail/u/1/#inbox?compose=DmwnWsCRjWtfwVwNPvpsfBxKhjWRJWTNWsBrVrjkhPXCqBqStBvQlDTKSnBpJGCFDVNPRRMBDXDV"
          role="button"
          ><font-awesome-icon :icon="['fab', 'google']"
        /></a>
        <a
          class="btn text-white btn-floating rounded-circle m-1"
          style="background-color: #ac2bac"
          href="https://www.instagram.com/usei.lapaz/?fbclid=IwAR07aYlD7DflEtSJDuW6ERzw_r7DjawQAQVxbXcShM4RmZjLHQAUPensFyc"
          role="button"
          ><font-awesome-icon :icon="['fab', 'instagram']"
        /></a>
        <a
          class="btn text-white btn-floating rounded-circle m-1"
          style="background-color: #0082ca"
          href="https://www.linkedin.com/in/usei-la-paz-080327253/?originalSubdomain=bo"
          role="button"
          ><font-awesome-icon :icon="['fab', 'linkedin']"
        /></a>
        <a
          class="btn text-white btn-floating rounded-circle m-1"
          style="background-color: #333333"
          href="https://www.tiktok.com/@lacato._?is_from_webapp=1&sender_device=pc"
          role="button"
          ><font-awesome-icon :icon="['fab', 'tiktok']"
        /></a>
      </div>
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
    padding: 50px 0;
    border-radius: 5px;
  
}

/*Modo oscuro*/
.dark-theme ::after footer{
    background-color: #515C66;
    box-shadow: 0 24px 64px -2px rgba(255, 255, 255, 0.02), 0 6px 16px -2px rgba(255, 255, 255, 0.06), 0 2px 6px -2px rgba(255, 255, 255, 0.08);
}
.footer__bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}


.copy__right{
    display: flex;
    align-items: center;
}
.copy__right span{
    margin-left: 10px;
}
.content__footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.profil{
    width: 30%;
}
.logo__area{
    display: flex;
    align-items: center;
}
.logo__name{
    font-size: 1.5rem;
    font-weight: 700;
    margin-left: 10px;
}
.social_media{
    margin-top: 20px;
}
.social_media a{
    margin-right: 20px;
}
@media screen and (max-width: 768px){
    .content__footer{
        flex-direction: column;
    }
    .profil{
        width: 100%;
    }
}

</style>
