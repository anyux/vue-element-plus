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