<template>
    <div class="card">
        
    <div class="container__card">

        
        <div class="header__card">
            <div class="time__card">
                <font-awesome-icon :icon="['fas', 'calendar-xmark']" size="2xl" />
                <h4>05/12/2023</h4>
            </div>
            <div class="state_card">
                <h4>Activo</h4>
            </div>
        </div>
        <div class="body__card">
            <div class="img__card">
                <img src="https://pbs.twimg.com/profile_images/1026937398855389186/1fpmfMrK_400x400.jpg" alt="Imagen de la empresa">
            </div>
            
            <div class="title__card">
                <h3>Prácticas profesionales</h3>
            </div>
            <div class="description__card">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
        </div>
        
        <div class="footer__card">
            <div class="company__card">
                <h4>Empresa</h4>
                <p>Nombre de la empresa</p>
            </div>
            <Button 
                text="Más información" 
                :color="0" 
                :disabled="false"
                @option-selected="login"
                >
            </Button>
            
        </div>
    </div>
    </div>
</template>
<script>
import Button from "@/components/common/Button.vue";
export default {
    components: {
        Button,
    },
}
</script>
<style scoped>
    .card{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .img__card{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;

    }
    .img__card img{
        height: 100px;
        object-fit: cover;
        width: 150px!important;
        border-radius: 15px;
        box-shadow: 0 4px 10px #00000008,0 0 2px #0000000f,0 2px 6px #0000001f!important;
    }
    .container__card{
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 15px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }
    .container__card:hover{
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    }
    .dark-theme .container__card{
        background-color: #434B54;
    }
    .header__card{
        width: 100%;
        height: 20%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .time__card{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    
    .time__card h4{
        margin-left: 14px;
    }
    .state_card{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #C8E6C9;
        border-radius: 5px;
        color: #256029;
        padding: 0.5rem;
    }
    .state_card h4{
        margin: 0;
    }
    
    .body__card{
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    
    .title__card{
        width: 100%;
        height: 20%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .title__card h3{
        font-size: 1.5rem!important;
        font-weight: 500;
    }
    .description__card{
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .description__card p{
        font-size: 1rem!important;
        font-weight: 400;
        text-align: center;
    }
    .footer__card{
        width: 100%;
        height: 20%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    
</style>