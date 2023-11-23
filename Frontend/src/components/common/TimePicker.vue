<template>
  <div class="card flex flex-wrap gap-3 p-fluid">
    <div class="flex-auto">
      <Calendar v-model="time" :manualInput="false" timeOnly />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const time = ref();
</script>
