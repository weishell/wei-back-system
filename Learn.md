## vue-router 
vue-router相关内容
### router
1. useRouter 获取$router,获取路径/跳转/跳转
```js
const router = useRouter()
router.getRoutes()//获取路由表 获取的是扁平化的路由表

menuList.value =router.options.routes //=>获取的是配置的路由表的完整结构
```
2. useRoute 获取$route,获取参数query/path

--------------------------------------------------

## vue3
vue3的使用

### props
vue3接受props写法：defineProps + toRefs 、defineProps + toRef
```vue
<template>demo {{ menuData }}</template>

<script setup lang="ts">
import { defineProps,toRefs ,toRef } from 'vue';
// 利用 defineProps获取props
const props = defineProps({
  menuData: {
    type: Array,
    default() {
      return []
    }
  },
  title:{
    type:String,
    default:'kkkkk'
  }
});
// 解构menuData
const { menuData } = toRefs(props);
console.log(menuData)
// title不一定从父元素传递过来
const skt = toRef(props,'title')
console.log(skt.value)
</script>
```

### component
动态的组件引入时，如elementplus图标组件使用
```vue
<el-icon>
  <component :is="menu.meta.icon"></component> 
</el-icon>
```

--------------------------------------------------
## element-plus
version:v2.2.10,当前版本并未icon组件，需要使用的自己单独引入@element-plus/icons-vue
```bash
cnpm i @element-plus/icons-vue --save
```
```ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import './registerServiceWorker'

const app = createApp(App)
app.use(ElementPlus).mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
```

### el-menu 递归调用

+ 父元素
```vue
<template>
  <div class="menu">
    <el-menu default-active="1.1" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
      <menu-tree :menu-data="menuList"></menu-tree>
    </el-menu>
  </div>
</template>
```
+ menu-tree组件
```vue
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
```




--------------------------------------------------
## localforage

+ 本地存储
```vue
<script setup lang="ts">
import sql from 'localforage';
import { ref } from 'vue';
console.log(sql);

let arr = ref([1, 2, 3, 4, 5]);
let myhtml = ref();
arr.value.push(6);
sql.config({
  driver: [sql.INDEXEDDB, sql.LOCALSTORAGE],
  name: 'wei'
});

sql.ready().then(_ => {
  sql.setItem('myhtml', '<div style="color:red">111111</div>').then(res => {
    console.log(res);
    sql.getItem('myhtml').then(res => {
      myhtml.value = res;
    });
  });
});
</script>
```
--------------------------------------------------



## 遇到的问题
1. 控制台打印的行数位置和实际项目的行数位置不一致，查看资料是配置devtool: 'source-map'
，可是没有生效。修改devtool的值，行数会有一定的变化，但是都没有完全和代码中的行数重合。
