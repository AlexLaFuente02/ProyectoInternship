<template>
  <div class="card flex justify-content-center">
    <Calendar
      v-model="date"
      :manualInput="false"
      dateFormat="dd/mm/yy"
      showButtonBar
      showIcon
    />
    <!-- <Calendar
      v-model="date"
      :manualInput="false"
      dateFormat="dd/mm/yy"
      touchUI
      showButtonBar
      showIcon
    /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
</script>
