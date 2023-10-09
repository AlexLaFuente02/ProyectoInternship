<template>
<NavBarComponent />
  <router-view />
  <FooterComponent />
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "App",
  components: {
    NavBarComponent,
    FooterComponent
  }
};
</script>

<style></style>