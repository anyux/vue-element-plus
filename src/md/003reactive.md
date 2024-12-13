## reactive

### 1. reactive介绍
- reactive同样是创建响应式引用
- 定义基本数据类型不能使用reactive,要使用ref
- reactive定义复杂数据类型,数组,对象
- reactive可响应深层次的数据,比如多维数组
- reactive返回一个响应式的proxy对象
- 使用需要引入

### 2. 引入reactive
```vue
<script >
  import {reactive} from "vue";
  const obj = reactive(
      {
        name:"孙权"
      }
  )
</script>

<template>

</template>

<style scoped>

</style>
```

### 2. reactive示例
```vue

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
```