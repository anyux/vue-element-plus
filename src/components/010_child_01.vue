<template>
  <div class="child_1">
    <h3>我是child_1子组件</h3>
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>
  </div>
</template>

<script>
import {inject, toRefs} from "vue";

export default {
  setup(){
    const res = inject("person");
    console.log(res)
    return {
      ...toRefs(res)
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
</style>