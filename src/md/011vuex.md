## vuex

### 1. vuex介绍
- 同vue2一致
- 使用需要安装,引入

### 2. vuex安装示例
```bash
# 安装
npm install vue@next --save
```

### 3. vuex 引入示例

```vue

<script>
  import {useStore} from "vuex";
</script>
```

### 4. 配置vuex
在项目的 src 目录下创建一个 store 文件夹，并在其中创建 index.js 文件：

```bash
mkdir src/store
touch src/store/index.js

```

### 5. 编辑src/store/index.js配置文件
```javascript
// 引入创建数据仓库函数
import {createStore} from 'vuex'

const dataStore = createStore({
    // 数据仓库存储的位置
    state: {
        name: "孙权",
        age: 50
    },
    // 调用方法

    // 同步调用方法
    mutations: {

    },

    // 异步调用方法
    actions: {

    },

    // 获取属性信息
    getters: {

    },
})

// 导出常量
export default dataStore
```

### 6. 在主文件中引入 Vuex Store

main.js
```javascript
import { createApp } from 'vue'
import App from './App.vue'
// 导入数据仓库,默认会导入./store/index.js下的export default dataStore
import store from './store'



// 应用vue控制台告警
// 定义特性标志
window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

// 使用vuex store
createApp(App)
    .use(store)
    .mount('#app')

```

### 7. 在组件中使用vuex获取数据
