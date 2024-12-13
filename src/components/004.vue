<template>
  <div>
    <h3>名称:{{ obj.name }}</h3>
    <h3>年龄:{{ obj.age }}</h3>

    <!--    此时修改的数据,不会显示在视图中-->
    <button @click="editName">修改toRef引用数据名称</button>
  </div>
</template>

<script>
import {ref, toRef} from "vue";

export default {
  setup() {
    const obj = {
      name: "孙权",
      age: 50,
    }
    // 获取引用数据
    const obj_name = toRef(obj, "name");
    const obj_copy_name= ref(obj, "name");
    const editName = () => {
      // 打印原始数据
      console.log("未修改数据时,打印数据")
      console.log("原始数据",obj.name)
      console.log("获取数据",obj_name.value)
      // 修改引用数据
      // 可以明确看到,原始数据 被修改了,从但是视图不会有变化
      console.log("修改引用数据打印数据")
      obj.name = "刘备"
      console.log("原始数据",obj.name)
      console.log("获取数据",obj_name.value)
      // 修改原始数据
      // 可以明确看到,原始数据 被修改了,从但是视图不会有变化
      console.log("修改引用数据打印数据")
      obj.name = "刘禅"
      console.log("原始数据",obj.name)
      console.log("获取数据",obj_name.value)

      console.log("修改复制数据打印数据")
      console.log("原始数据", obj_copy_name.value.name)
      obj_copy_name.value = "刘备"
      console.log("获取数据",obj_copy_name.value)

    }
    return {
      obj,
      editName
    }
  }
}
</script>

<style lang="scss" scoped>

</style>