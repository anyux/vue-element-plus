## computed计算属性

### 1. computed介绍
- 与vue2一致,均是用来监听数据变化
- 使用需要引入

### 2. computed导入示例

```vue
<script>
  import {computed} from "vue";
</script>
```

### 3.computed使用示例
```vue
<template>
  <div>
    孙权年龄: <input type="number" v-model="sun">
    <br>
    刘备年龄: <input type="number" v-model="liu">
    <br>
    年龄总和: <input type="number" v-model="sum">
    <br>
    孙权国家: <input type="text" v-model="sun_contry">
    <br>
    刘备国家: <input type="text" v-model="liu_contry">
    <br>
    国家联合: <input type="text" v-model="contry">
    <br>
  </div>
</template>

<script>
import {computed, reactive, toRefs} from "vue";
export default {
  setup(){
    const sun=""
    const liu=""

    const sun_contry=""
    const liu_contry=""

    const res = reactive({sun,liu,sun_contry,liu_contry})
    // 年龄总和
    const sum = computed(()=>{
      return res.sun + res.liu
    })
    // 孙刘联合
    const contry = computed(()=>{
      return res.sun_contry + res.liu_contry
    })
    return {
      sum,
      contry,
      // 解构对象
      ...toRefs(res)
    }
  }
}
</script>

<style>

</style>
```