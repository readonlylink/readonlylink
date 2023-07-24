import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import App from './App.vue'
import { happyHacking } from './console/happyHacking'
import * as Directives from './directives'
import router from './router'
import './styles/index.css'

const app = createApp(App)

app.use(router)
app.use(createHead())

app.directive('focus', Directives.focus)
app.directive('blur', Directives.blur)
app.directive('on-click-outside', Directives.onClickOutside)

app.mount('#app')

happyHacking()
