<template>
  <div>
    <h3>{{p1}}</h3>
    <button @click="p1++">点击修改数据</button>
  </div>
</template>

<script>
import {ref,watch} from "vue";
export default {
  setup(){
    const p1 = ref(0)
    watch(p1,(newValue,oldValue)=>{
      console.log("newValue:",newValue,"oldValue:",oldValue)
    })
    return {
      p1
    }
  }
}
</script>

<style>

</style>