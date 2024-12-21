<template>
  <div class="child_1">
    <h3>我是子组件</h3>
    <h3>姓名:{{res.name}}</h3>
    <h3>年龄:{{res.age}}</h3>
    <div class="edit_data">
      姓名:<input type="text" v-model:="newObj.name" />
      年龄:<input type="text" v-model:="newObj.age" />
      <button @click="btn">修改vuex仓库数据</button>
    </div>
  </div>
</template>

<script>
//导入获取数据仓库方法
import {useStore} from "vuex";
import {computed, reactive, toRefs} from "vue";
export default {
  setup(){
    const store = useStore()
    const res = computed(()=>{
      console.log("我是子组件获取vuex的数据")
      console.log(store.state.name)
      return store.state
    })
    const newObj = reactive({
      name:"刘备",
      age:60,
    })
    const btn = ()=>{
      console.log("点击修改数据")
      // 触发异步修改数据
      store.dispatch('edit',newObj)
    }
    return {
      res,
      btn,
      newObj
    }
  }
}
</script>
<style scoped>
.child_1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: antiquewhite;
}
.edit_data{
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}
</style>