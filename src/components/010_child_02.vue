<template>
  <div class="child_2">
    <h3>我是child_2子组件</h3>
    <h3 v-if="res">{{res.name}}</h3>
    <h3 v-if="res">{{res.age}}</h3>
  </div>
</template>

<script>
import {inject, reactive, ref, toRefs} from "vue";

export default {
  setup(){
    // 定义一个响应式变量
    const res = ref()
    // 定义方法,获取传递过来的值
    // values表示父组件传递过来的值
    const get_data = (values)=>{
      console.log("我是child_2子组件")
      console.log(values)
      // 将res的值传递
      res.value = values
    }
    return {
      get_data,
      res
    }
  }
}
</script>
<style scoped>
.child_2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: antiquewhite;
}
</style>