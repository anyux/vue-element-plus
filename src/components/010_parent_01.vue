<template>
  <div class="parent_1">
    <h3>我是parent_1父组件</h3>
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>
  </div>
  <!--  在父组件中使用子组件-->
  <child_1></child_1>
</template>

<script>
// 将子组件完整导入到父组件
import child_1 from './010_child_01'
import {provide, reactive, toRefs} from "vue";

export default {
  setup() {
    const p1 = reactive({
      name: "孙权",
      age: 50,
    })
    // 向子组件传递名称为person的值
    provide("person", p1)
    return {
      ...toRefs(p1)
    }
  },
  // 将子组件在父组件中注册
  components: {
    child_1
  }
}
</script>
<style scoped>
.parent_1 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: burlywood;
  padding: 15px;

}
</style>