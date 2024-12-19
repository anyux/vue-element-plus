<template>
  <h3>{{name}}</h3>
  <h3>{{age.size}}</h3>
  <button @click="name+='东吴'">修改名称</button>
  <button @click="age.size++">修改年龄</button>
  <br>
  <h3>{{p2}}</h3>
  <button @click="p2++">p2++</button>
</template>

<script>
import {shallowRef, shallowReactive, toRefs} from "vue";
export default {
  setup(){
    // shallowReactive 对于复杂数据类型,只会修改第一次的数据
    // 只会修改name,不会修改age.size的值
    const p1 = shallowReactive({
      name: "孙权",
      age:{
        size: 50,
      }
    })
    // shallowRef只对基本数据类型操作
    const p2 = shallowRef(0)
    return {
      ...toRefs(p1),
      p2
    }
  }
}
</script>

<style scoped>

</style>