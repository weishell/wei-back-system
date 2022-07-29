<template>
  <div>
    子组件2如果父组件没有传插槽内容：
    <slot name="f1">没值使用这个</slot>
  </div>
</template>

<script setup lang="ts">
import Slot from './index.vue';

</script>

<style scoped>

</style>