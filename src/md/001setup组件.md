## setup组件

### 1. 初始化项目
src/App.vue初始化
```vue
<template>
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
```

src/components/HelloWorld.vue初始化
```vue
<template>
  <div>
    111
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
```

### 2. vue2 和 vue3 开发优点缺点
- vue2 代码冗余杂乱
- vue3 可以把相关的代码抽离分割在一起,方便开发者快速阅读

### 3. setup使用
- setup函数是Composition API(组合API)的入口
- setup是启动页面后会自动执行的一个函数
- 项目中定义的所有变量,方法等都需要在setup中
- 在setup函数中定义的变量和方法最后都需要return出去,否则无法在视图层中使用

### 4. vue2格式
```vue
<template>
  <div>
    111
  </div>
</template>

<script>
export default {
  // vue2 方式
  // 定义数据
  data(){
    return {
      
    }
  },
  // 定义方法
  methods:{
    
  },
  // 定义创建时调用
  created:{
    
  },
  // 自动计算
  computed:{
    
  },
  // 定义组件
  components:{
    
  }
}
</script>

<style scoped>

</style>
```

### 5. vue3格式
```vue
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
```

### 6. 应对vue3控制台告警
```text
Feature flag __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ is not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.
For more details, see https://link.vuejs.org/feature-flags.
```
在main.js文件里加入以下代码即可
src/main.js
```js
import { createApp } from 'vue'
import App from './App.vue'


// 应用vue控制台告警
// 定义特性标志
window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

createApp(App).mount('#app')
```

### 7. webstorm解决注释顶行书写的问题
```text
File-->Settings-->Editor-->Code Style -->HTML-->Code Generation
取消勾选以下即可
行注释在第一列
注释块在第一列
```

