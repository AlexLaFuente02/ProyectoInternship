<template>
    <div class="container">
        <Stepper :steps="steps" :currentStep="currentStep"/>
      <div class="container__content">
        <component :is="steps[currentStep - 1].component"></component>
      </div>
      <div class="controls">
        <button class="btn btn-primary" @click="prevStep" :disabled="currentStep === 1">Anterior</button>
        <button class="btn btn-primary" @click="nextStep" v-if="currentStep !== steps.length">Siguiente</button>
        <button class="btn btn-primary" v-else>Enviar</button>
      </div>
    </div>
</template>
<script>
import FooterCommon from '../../components/common/FooterCommon.vue';
import NavbarCommon from '../../components/common/NavbarCommon.vue';
import StudentFormRegister from '../../components/student/StudentFormRegister.vue';
import StudentValidationRegister from '../../components/student/StudentValidationRegister.vue';
import Stepper from '../../components/common/Stepper.vue';
export default {
    components:{
        NavbarCommon,
        FooterCommon,
        StudentFormRegister,
        StudentValidationRegister,
        Stepper
    },
}
</script>
<style>
</style>

