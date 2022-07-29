<template>
  <template v-for="(menu, index) in menuData">
    <el-sub-menu :key="index" :index="menu.meta.index" v-if="menu.children && menu.children.length">
      <template #title>
        <router-link :to="menu.path">
          <el-icon>
            <component :is="menu.meta.icon"></component>
          </el-icon>
          {{ menu.meta.name }}
       </router-link>
      </template>
      <menu-tree :menuData="menu.children"></menu-tree>
    </el-sub-menu>
    <el-menu-item :key="index + 'else'" :index="menu.meta.index" v-else>
      <template #title>
        <router-link :to="menu.path">
          <el-icon>
            <component :is="menu.meta.icon"></component>
          </el-icon>
          {{ menu.meta.name }}
        </router-link>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { defineProps, toRefs, toRef } from 'vue';
// import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';

import type { PropType } from 'vue';
interface Menu {
  children: any[];
  meta: {
    name: string;
    icon: string;
    index: string;
  };
  path: string;
  name: string;
}
const props = defineProps({
  menuData: {
    type: Array as PropType<Menu[]>,
    default() {
      return [];
    }
  },
  title: {
    type: String,
    default: ''
  }
});

const { menuData, title } = toRefs(props);
console.log(menuData);
console.log(title);
</script>

<style lang="scss" scoped></style>
