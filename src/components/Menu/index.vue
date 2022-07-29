<template>
  <div class="menu">
    <el-menu default-active="1.1" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
      <menu-tree :menu-data="menuList"></menu-tree>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
// import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';
import menuTree from './menuTree.vue';

let menuList = ref();

const router = useRouter();
console.log(router.options.routes);
console.log(router.getRoutes());

// menuList.value = router.getRoutes()
menuList.value = router.options.routes&&router.options.routes.filter(e=>{
  console.log(e.path)
  let tem =e.path 
  console.log(typeof tem)
 
  if(tem === '/login'){
    return false
  }else{
    return true
  }
})
console.log(menuList.value);

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
  background: #2D325C;
}

::v-deep .el-menu-item:hover{
  background: #3856F2 !important;
  width:100;
}
::v-deep .el-menu-item a,::v-deep .el-menu-item,::v-deep .el-sub-menu__title,::v-deep .el-sub-menu__title a {
  color:#FFF;
}
::v-deep .el-menu-item,::v-deep .el-sub-menu__title{
  background: #2D325C;
}
::v-deep .el-sub-menu .el-menu-item {
  min-width: 199px;
}
// ::v-deep .is-active.el-menu-item a,
::v-deep .is-active.el-menu-item{
  background: #3856F2 !important;
  // color:var(--el-color-primary);
  color: #fff;
}

</style>
