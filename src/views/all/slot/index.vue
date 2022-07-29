<template>
  <div>
      <children1>
        {{changeChildren1}}
      </children1>
      <hr/>
      <children2 #f1>传了值的children2</children2>
      <children2></children2>

      <hr/>
      <!-- v-slot 一般只能添加在 <template>,或者组件上  -->
      <!-- v-slot can only be used on components or <template> tags. -->
      <children3>    
         <template #footer>
          footer
        </template>
        <template v-slot:header>
         header {{changeChildren1}}
        </template>
        <template v-slot:default>
          default
        </template>
      </children3>
      <hr/>
      <children4>
        <template v-slot:other="otherSlotProps">
          {{otherSlotProps.item}}
        </template>
        <template #title>
          title
        </template>  
      </children4>
      <hr/>
      <children5 :list="list">
         <template v-slot:default="{Name, Age}"> <!-- 这里对对象slotProps作了解构 -->
            {{Name}}: {{Age}}
         </template>
      </children5>
      <hr/>
      <button @click="change">button</button>
      <children6>
        <template v-slot:[changeSlot]>xxxx</template>
      </children6>



  </div>
</template>

<script setup lang="ts">
import children1 from './children1.vue';
import children2 from './children2.vue';
import children3 from './children3.vue';
import children4 from './children4.vue';
import children5 from './children5.vue';
import children6 from './children6.vue';



import {ref,Ref, reactive,toRefs} from 'vue'
let changeChildren1:Ref<string|number> = ref(0)

let data = reactive({
  list:[
          { name: 'Tom', age: 23 },
          { name: 'Jack', age: 24 },
          { name: 'Steve', age: 25 },
        ]
})
let changeSlot  = ref('')

let change = ()=>{
  if((changeChildren1.value as number) % 2 === 0){
    changeSlot.value ='k1'
  }else{
    changeSlot.value ='k2'

  }
}

const {list} =toRefs(data)

setInterval(()=>{
  if(typeof changeChildren1.value === 'number'){
    changeChildren1.value++
  }
},1000)
</script>

<style scoped lang="'scss'">

</style>