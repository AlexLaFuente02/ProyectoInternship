<template>
    <div>
        <NavbarCommon />
        <div class="Institutions__Page">
            <h1>Institutions</h1>
            <p>Information about the institutions will be added here.</p>
        </div>
        <!-- Prueba de componente PrimeVue -->
        <div class="card flex flex-wrap gap-3  justify-content-center">
            <ButtonPrime icon="pi pi-check" aria-label="Submit" />
            <ButtonPrime label="Submit" icon="pi pi-check" />
            <ButtonPrime label="Submit" icon="pi pi-check" iconPos="right" />
        </div>s
      <FooterCommon />
    </div>
</template>
<script>
import FooterCommon from '@/components/common/FooterCommon.vue'
import NavbarCommon from '@/components/common/NavbarCommon.vue'
//Importar el componente de PrimeVue

export default {
    components: {
        FooterCommon,
        NavbarCommon,
    },
    
}
</script>
<style >
    
</style>