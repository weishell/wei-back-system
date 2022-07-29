<template>
  <div>
    作用域插槽：
    <slot :item="item" name="other"></slot>
    <br/>
    <slot name="title"></slot>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
let item =ref(10)
setTimeout(() => {
  item.value = 30
}, 2000);
</script>

<style scoped>

</style>