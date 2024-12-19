## watchEffect

### 1. watchEffect
- watchEffect 如果存在的话,在组件初始化的时候就会执行一次用以收集依赖
- watch可以获取新值与旧值(更新前的值),而watchEffect是拿不到的
- watchEffect不需要指定监听的属性,他会自动的收集依赖,只要我们回调中引用到了响应式的属性
- 当这些属性变更时,回调会执行,watch只能监听指定的属性而做出变更
- 使用需要引入

### 2. 引入示例

```vue
<script>
  import {watchEffect} from "vue";
</script>
```

### 3. watchEffect使用示例

```vue
<template>
  <div>
    <h3>{{p1}}</h3>
    <h3>{{p2}}</h3>
    <h3>{{p3.age.size}}</h3>
    <button @click="p1++">点击修改p1数据</button>
    <button @click="p2*=3">点击修改p2数据</button>
    <button @click="p3.age.size++">点击修改p3数据</button>
  </div>
</template>

<script>
import {reactive, ref, watch, watchEffect} from "vue";

export default {
  setup() {
    const p1 = ref(0)
    const p2 = ref(2)
    const p3 = reactive({
      name: "孙权",
      age: {
        size: 50,
      }
    })
    // 初始时就会打印信息
    const res = watchEffect(()=>{
      console.log(p1.value)
      console.log(p2.value)
      console.log(p3)
    })
    // 调用res变量停止自动监听
    res()

    return {
      p1,
      p2,
      p3,
    }
  }
}
</script>

<style>

</style>
```