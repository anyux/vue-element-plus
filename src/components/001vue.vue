<template>
  <!--打印返回的变量-->
  <div>
    {{ res }}
  </div>
  <!--打印返回的数组-->
  <div v-for="(item, index) in arr" :key="index" :index="index">
    <span>{{item}}</span>
  </div>
  <button @click="btn1">函数方式1控制台打印内容</button>
  <button @click="btn2">函数方式2控制台打印内容</button>
</template>

<script>
export default {
  // 启动页面时,setup会自动执行
  // setup内部会存放变量,常量,方法等
  setup(){
    // 自动执行打印数据
    console.log('Hello World');

    // 定义常量
    const res = '123'

    // 打印常量
    console.log(res)

    // 定义数组
    const arr = ["张三","李四","王五"]

    // 定义函数方式1,以常规方式定义函数
    function btn1() {
      console.log("函数方式1控制台打印内容")
    }

    // 定义函数方式2,以常量方式定义,使用箭头函数
    const btn2 = ()=>{
      console.log("函数方式2控制台打印内容")
    }

    // 定义变量，常量，方法，需要return返回，否则无法在视图层template里使用
    return {
      res,
      arr,
      btn1,
      btn2,
    }
  }
}
</script>

<style scoped>

</style>