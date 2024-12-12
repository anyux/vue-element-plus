<template>
  <div>
    <h3>名称:{{name}}</h3>
    <h3>年龄:{{age}}</h3>
    <h3>位置:{{base}}</h3>
    <h3>国家:{{obj.contunry}}</h3>
    <hr>
    <button @click="editName">修改名称</button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    // const name = "孙权"
    // 通过ref定义为响应式数据
    const name = ref("孙权")
    const age = 50
    const base="江东"
    const obj = {
      contunry: "吴国",
      name: "孙大帝"
    }
    // 定义修改名称函数
    const editName = () => {
      // 控制台打印函数
      console.log("显示调用函数editName")
      // 修改常量数据,常量数据不可修改,因此报错
      // 警告内容如下: Unhandled error during execution of native event handler
      // 报错如下: Uncaught TypeError: Assignment to constant variable.
      // name = "刘备"

      // 使用vue2的方式修改数据
      // 告警如下: Unhandled error during execution of native event handler
      // 报错如下: Uncaught TypeError: Cannot set properties of undefined (setting 'name')
      // this.name = "刘备"

      // 打印注册为响应式数据的name常量
      console.log(name)
      // 打印数据格式如下
      /*
      RefImpl {dep: Dep, __v_isRef: true, __v_isShallow: false, _rawValue: '孙权', _value: '孙权'}
      dep:Dep {computed: undefined, version: 1, activeLink: undefined, subs: Link, map: undefined, …}
      __v_isRef:true
      __v_isShallow:false
      _rawValue:"刘备"
      _value:"刘备"
      value:"刘备"  #这代表响应式数据真实的值
          */
      // 通过对value的调用,修改其值
      name.value = "刘备"
      console.log(name)
    }
    return {
      name,
      age,
      base,
      obj,
      editName,
    }
  }
}
</script>

<style scoped>

</style>