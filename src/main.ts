/*
 * @Author: 
 * @Date: 2022-02-09 16:40:57
 * @LastEditors: 
 * @LastEditTime: 2022-02-09 16:53:20
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { start } from 'qiankun'
start()
createApp(App).use(router).mount('#app')
