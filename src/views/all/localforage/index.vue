<template>
  <div>localforage</div>
  <div v-for="item in arr" :key="item">{{ item }}</div>
  <div v-html="myhtml"></div>
</template>

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

<style lang="scss" scoped></style>
