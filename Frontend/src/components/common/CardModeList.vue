<template>
    <hr class="line">
    <div class="card">
        <div class="container__card">
            <div class="img__card">
                <img src="https://pbs.twimg.com/profile_images/1026937398855389186/1fpmfMrK_400x400.jpg" alt="Imagen de la empresa">
            </div>
            <div class="header__card__responsive">
                <div class="time__card">
                    <font-awesome-icon :icon="['fas', 'calendar-xmark']" size="2xl" />
                    <h4>{{this.informationCard.fechaseleccionpasante}}</h4>
                </div>
                <div class="state_card">
                    <h4>{{ this.informationCard.estadoconvocatoria.nombreestadoconvocatoria }}</h4>
                </div>
                <Button 
                    text="Más información" 
                    :color="0" 
                    :disabled="false"
                    @option-selected="moreInformation"
                    >
                </Button>
            </div>
            <div class="body__card">
                <div class="company__card">
                    <p>{{this.informationCard.institucion.nombreinstitucion}}</p>
                </div>
                <div class="description__card">
                    <div class="description__content">
                        <p>{{ this.informationCard.descripcionfunciones }}</p>
                    </div>
                </div>
            </div>
            <div class="header__card">
                <div class="time__card">
                    <font-awesome-icon :icon="['fas', 'calendar-xmark']" size="2xl" />
                    <h4>{{this.informationCard.fechaseleccionpasante}}</h4>
                </div>
                <div class="state_card">
                    <h4>{{ this.informationCard.estadoconvocatoria.nombreestadoconvocatoria }}</h4>
                </div>
                <Button 
                    text="Más información" 
                    :color="0" 
                    :disabled="false"
                    @option-selected="moreInformation"
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
    data() {
        return {
            informationCard:[],
        };
    },
    methods: {
        getData(){
            this.informationCard = this.internship;
        },
        moreInformation(){
            this.$router.push({name: "InternshipInformation", params: {id: this.informationCard.id}});
        }
    },
    props: {
        internship: {
            type: Object,
            required: true,
        },
    },
    created(){
        this.getData();
    },
}
</script>
<style scoped>
    .line{
        border: 1px solid #E5E5E5;
        width: 100%;
    }
    .dark-theme .line{
        border: 1px solid rgba(255,255,255,.3);
    }
    .card{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container__card{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0.3rem;
    }
    .img__card{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img__card img{
        object-fit: cover;
        width: 150px!important;
        border-radius: 15px;
        box-shadow: 0 4px 10px #00000008,0 0 2px #0000000f,0 2px 6px #0000001f!important;
    }
    .body__card{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .description__card{
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.4rem 0;
        border-bottom: 1px solid rgba(255,255,255,.1);

    }
    .description__content{
        max-height: 130px;
        overflow-y: auto;
    }
    .description__card p{
        width: 100%;
        height: 100%;
        font-size: 1.2rem;
        font-weight: 400;
        text-align: center;
        
    }
    .company__card{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        
    }
    .company__card p{
        height: 100%;
        font-size: 1.2rem;
        font-weight: 400;
        padding: 0.2rem;
        text-align: center;
    }
    .header__card{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column  ;
        justify-content: space-between;
        align-items: center;
    }
    .header__card__responsive{
        display: none;
    }
    .time__card{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0.3rem;
    }
    .time__card h4{
        margin-left: 14px;
        font-size: 1.2rem;
        font-weight: 400;
        margin: 0;
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
        font-size: 1.2rem;
        font-weight: 400;
        margin: 0;
    }
@media only screen and (max-width: 600px) {

}
@media only screen and (min-width: 601px) and (max-width: 1024px) {
}
@media only screen and (min-width: 1025px) and (max-width: 1440px) {
}
@media only screen and (min-width: 1441px) {

}

</style>