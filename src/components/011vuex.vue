<template>
  <div class="parent_1">
    <h3>我是父组件</h3>
    <h3>姓名:{{res.name}}</h3>
    <h3>年龄:{{res.age}}</h3>
  </div>
  <child_1></child_1>
</template>

<script>
//导入获取数据仓库方法
import {useStore} from "vuex";
import {computed, reactive, toRefs} from "vue";

import child_1 from "./011vuex_child_01.vue"
export default {
  setup(){
    const store = useStore()
    const res = computed(()=>{
      console.log("我是父组件获取vuex的数据")
      console.log(store.state.name)
      return store.state
    })
    return {
      res,
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