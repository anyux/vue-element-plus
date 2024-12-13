

<template>
  <div>
    <h3>名称:{{ obj.name }}</h3>
    <h3>年龄:{{ obj.age }}</h3>
    <h3>名称:{{ name }}</h3>
    <h3>年龄:{{ age }}</h3>

    <!--    此时修改的数据,不会显示在视图中-->
    <button @click="btn">修改toRef引用数据名称</button>
  </div>
</template>
<script>
import {reactive, toRefs} from "vue";
export default {
  setup(){
    const obj = {
      name: '孙权',
      age: 50
    }
    const news = reactive(obj)

    const res = toRefs(news)

    const btn = ()=>{
      console.log(res)
    }
    return {
      obj,
      // ....toRefs(obj)解构对象
      ...toRefs(news),
      res,
      btn,
    }
  }
}
</script>
<style>

</style>