<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://www.animafestexperience.net/internshipsabroad/wp-content/uploads/2019/08/ANIMAFEST-PASANTIAS-REMUNERADAS-min-min-800x333.jpg"
          class="d-block w-100"
          alt="Mundo laboral"
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>Mundo Laboral</h5>
          <p>Mundo Laboral :D</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://idiomasseif.com/wp-content/uploads/2019/04/importancia-del-ingles-en-el-mundo-laboral.jpg" class="d-block w-100" alt="" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Second Slide</h5>
          <p>Second Slide Caption goes here</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://media.gq.com.mx/photos/642447f1c632255eae24a045/master/w_1920,c_limit/trabajo.jpg" class="d-block w-100" alt="" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Third Slide</h5>
          <p>Third Slide Caption goes here</p>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="carousel-control-prev"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button
      type="button"
      class="carousel-control-next"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Siguiente</span>
    </button>
  </div>
</template>
