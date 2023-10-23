<template>
    <NavbarCommon/>	
    <main>
        <Carousel/>
    </main>
    <FooterCommon/>
</template>
<script>
import FooterCommon from '@/components/common/FooterCommon.vue'
import NavbarCommon from '@/components/common/NavbarCommon.vue'
import Carousel from '@/components/common/Carousel.vue'
export default {
    components: {
        FooterCommon,
        Carousel,
        NavbarCommon,
    }, 

}
</script>
<style>
</style>