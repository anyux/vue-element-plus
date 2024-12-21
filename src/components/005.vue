<template>
  <div>

  </div>
</template>

<script>
import {reactive, toRefs} from "vue";

export default {
  setup(){
    // 定义对象
    const obj ={
      name: "孙权",
      age: 50,
    }
    // 定义响应式对象
    const obj2 = reactive(obj)
    // 定义
    const obj3 = toRefs(obj2)
  }
}
</script>

<style lang="scss" scoped>

</style>