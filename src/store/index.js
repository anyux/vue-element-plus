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
        setUser(state, user) {
            console.log("我是被异步调用的同步方法")
            state.name = user.name
            state.age = user.age
        }
    },

    // 异步调用方法
    actions: {
        // store是用于调用同步方法的
        edit(store, payload) {
            console.log("异步数据")
            // 调用同步方法,修改数据
            store.commit("setUser", payload)
        }
    },

    // 获取属性信息
    getters: {

    },
})

// 导出常量
export default dataStore