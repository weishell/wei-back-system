<template>
  <div class="home">
    <div class="header">头部</div>
    <div class="body">
      <div class="menu">
        <Menu></Menu>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Menu from '@/components/Menu/index.vue';
export default defineComponent({
  name: 'Home',
  components: {
    Menu
  },
  setup() {}
});
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
.header {
  height: 70px;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}
.body {
  display: flex;
  height: calc(100% - 70px);
  .menu {
    width: 200px;
    height: 100%;
    box-sizing: border-box;
  }
  .content {
    flex: 1;
  }
}
</style>
