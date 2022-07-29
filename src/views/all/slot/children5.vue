<template>
  <div>
    解构插槽 Prop：
    <div class="Child">
    <span v-for="item in list">
      <slot :Name="item.name" :Age="item.age">{{item.name}} </slot>
      <br/>
    </span>
  </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, toRef } from 'vue';
import type{PropType} from 'vue'
const props = defineProps({
  list: {
    type: Array as PropType<any[]>,
    default() {
      return [];
    }
  }
});
const { list } = toRefs(props);

</script>
