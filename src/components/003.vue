<template>
  <div>
    <h3>名称:{{ obj.name }}</h3>
    <h3>年龄:{{ obj.age }}</h3>
  <h3>国家:{{ obj.country }}</h3>
    <h3>下代:{{ obj.pro.a.b[0] }}</h3>
    <hr>
    <button @click="btn">修改名称</button>
  </div>
</template>

<script>
import {reactive} from "vue";
export default {
  setup() {
    const name = "孙权"
    const age = 50
    const country = "东吴"
    const obj = reactive(
        {
          name,
          age,
          country,
          pro:{
            a:{
              b:[
                  '西晋'
              ]
            }
          }
        }
    )
    const btn = () => {
      // 修改对象的属性信息
      obj.name="刘备"
      // 打印reactive响应式对象数据
      // Proxy(Object) {name: '刘备', age: 50, country: '东吴'}
      // [[Handler]]:MutableReactiveHandler
      //     [[Target]]:Object
      // age:50
      // country:"东吴"
      // name:"刘备"
      //     [[Prototype]]:Object
      //     [[IsRevoked]]:false
      console.log(obj)
      // 修改深层次数据
      obj.pro.a.b[0] = "东晋"
    }
    return {
      obj,
      btn,
    }
  }
}

</script>

<style scoped>

</style>