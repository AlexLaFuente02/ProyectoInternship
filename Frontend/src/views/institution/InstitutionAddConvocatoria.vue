<template>
    <div class="container">
      
      <div class="container__content">
        <component :is="steps[currentStep - 1].component"></component>
      </div>
    </div>
</template>
<script>
import FooterCommon from '../../components/common/FooterCommon.vue';
import NavbarCommon from '../../components/common/NavbarCommon.vue';
import InstitutionFormAddConvocatoria from '../../components/institution/InstitutionFormAddConvocatoria.vue';
import { useThemeStore } from "@/store/common/useThemeStore";
import { useFormRegisterStore } from "@/store/student/formRegisterStore";
export default {
    components:{
        NavbarCommon,
        FooterCommon,
        InstitutionFormAddConvocatoria,
    },
    data(){
        return{
            formStore: useFormRegisterStore(),
            currentStep: 1,
            steps: [
                {
                    id: 1,
                    component: 'InstitutionFormAddConvocatoria',
                    title: 'Formulario',
                },
            ],

        }
      },
    methods: {
        nextStep(){
            this.currentStep++;
        },
        prevStep(){
            this.currentStep--;
        },
        register(){
            console.log(this.formStore);
            //Enviar datos al backend
        }
    },
    computed: {
        //Obtener el modo oscuro
        darkTheme(){
            return useThemeStore().darkTheme;
        }
    },
}
</script>
<style scoped>
</style>

