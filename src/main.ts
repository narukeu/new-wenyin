import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.scss'

// 引入 Element UI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
// entries 默认貌似是旧版的，所以在 tsconfig 里面更新，否则会报错。
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(ElementPlus)

app.mount('#app')
