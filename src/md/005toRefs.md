## toRefs

### 1.toRefs介绍
- 用于批量设置多个数据为响应式数据
- toRefs与原始数据有交互,修改响应式数据会影响到原始数据,但是不会更新视图层
- toRefs还可以与其他响应式函数交互,更加方便处理视图层数据
- 使用需要引入

### 2.toRefs引入

```vue

<script>
  import {toRefs} from "vue";
  toRefs(obj)
</script>
```

### 3.toRefs示例
```vue


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
```