<template>
  <div>
    <h3>名称:{{name}}</h3>
    <h3>年龄:{{age}}</h3>
    <h3>位置:{{base}}</h3>
    <h3>国家:{{obj.country}}</h3>
    <div v-for="(item,index) in arr" :key="index">
      <p>都督: {{item.dudu}}</p>
    </div>
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
    const obj = ref({
      country: "吴国",
      name: "孙大帝"
    })
    // 数组类型
    const arr = ref(
        [
          {
            dudu:"周瑜"
          }
        ]
    )
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
      // 打印 通过ref 管理的对象数据,数据的value是一个proxy
      // 此时通过修改obj.country是无法修改的
      // 需要通过obj.value.country修改
      // console.log(obj)
      obj.value.country = "江东六郡"
      console.log(obj.value.country)

      // 修改数组对象信息
      arr.value[0].dudu="陆逊"
    }
    return {
      name,
      age,
      base,
      obj,
      arr,
      editName,
    }
  }
}
</script>

<style scoped>

</style>