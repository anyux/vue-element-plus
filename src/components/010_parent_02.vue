<template>
  <div class="parent_2">
    <h3>我是parent_2父组件</h3>
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>
    <button @click="btn">向子组件传递值</button>
  </div>
  <!--  在父组件中使用子组件-->
  <child_2 ref="val"></child_2>
</template>

<script>
// 将子组件完整导入到父组件
import child_2 from './010_child_02'
import { reactive, ref, toRefs} from "vue";

export default {
  setup() {
    // 定义传递的数据
    const p2 = reactive({
      name: "孙权",
      age: 50,
    })
    // 定义基本数据类型,用于传递数据,绑定到子组件
    const val = ref()
    // 定义函数触发传递动作
    const btn = ()=>{
      console.log("调用父组件按钮")
      // val.value表示子组件,再调用子组件的get_data方法,实现数据传递
      val.value.get_data(p2)
    }
    return {
      ...toRefs(p2),
      btn,
      val

    }
  },
  // 将子组件在父组件中注册
  components: {
    child_2
  }
}
</script>
<style scoped>
.parent_2 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: burlywood;
  padding: 25px;

}
</style>