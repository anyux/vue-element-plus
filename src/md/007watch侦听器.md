## watch侦听器

### 1. watch侦听器介绍
- 与vue2一致,均是用来侦听数据变化的
- 使用需要引入

### 2. watch引入示例

```vue

<script>
  import {watch} from "vue"
</script>
```

### 3. watch 使用示例
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
import {reactive, ref, watch} from "vue";
export default {
  setup(){
    const p1 = ref(0)
    const p2 = ref(2)
    const p3 = reactive({
      name: "孙权",
      age:{
        size: 50,
      }
    })
    // 监听一个值
    /*
    watch(p1,(newValue,oldValue)=>{
      console.log("newValue:",newValue,"oldValue:",oldValue)
    })
     */
    // 监听两个值
    /*
    watch([p1,p2],(newValue,oldValue)=>{
      console.log("newValue:",newValue,"oldValue:",oldValue)
    })
     */
    // 监听reactive响应式对象数据
    // 此时监听的是整个响应式对象,打印数据变化前后的值,是最新的
    // watch(p3,(newValue,oldValue)=>{
    //   console.log("newValue:",newValue,"oldValue:",oldValue)
    // })
    // 监听reactive响应式对象数据的某个值
    watch(()=>p3.age.size,(newValue,oldValue)=>{
      console.log("newValue:",newValue,"oldValue:",oldValue)
    })
    // 进入页面立即监听,{immediate:true}
    watch(()=>p3.age.size,(newValue,oldValue)=>{
      console.log("newValue:",newValue,"oldValue:",oldValue)
    },{immediate:true})3.age.size++

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