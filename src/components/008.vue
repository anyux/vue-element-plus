<template>
  <div>
    <h3>{{p1}}</h3>
    <h3>{{p2}}</h3>
    <h3>{{p3.age.size}}</h3>
    <button @click="p1++">点击修改p1数据</button>
    <button @click="p2*=3">点击修改p2数据</button>
    <button @click="p3.age.size++">点击修改p3数据</button>
  </div>
</template>

<script>
import {reactive, ref, watch, watchEffect} from "vue";

export default {
  setup() {
    const p1 = ref(0)
    const p2 = ref(2)
    const p3 = reactive({
      name: "孙权",
      age: {
        size: 50,
      }
    })
    // 初始时就会打印信息
    const res = watchEffect(()=>{
      console.log(p1.value)
      console.log(p2.value)
      console.log(p3)
    })
    // 调用res变量停止自动监听
    res()

    return {
      p1,
      p2,
      p3,
    }
  }
}
</script>

<style>

</style>