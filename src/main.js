import { createApp } from 'vue'
import App from './App.vue'


// 应用vue控制台告警
// 定义特性标志
window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

createApp(App).mount('#app')
