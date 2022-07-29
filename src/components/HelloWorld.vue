<template>
  <div class="hello">
    {{ a }}
    <button @click="add">+</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
let a = ref(1000);
const add = () => {
  a.value = a.value + 5;
};
</script>
