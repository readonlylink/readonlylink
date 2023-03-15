import { createHead } from '@vueuse/head'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import * as Directives from './directives'
import router from './router'
import './styles/fonts.css'
import './styles/index.css'

const app = createApp(App)

app.use(router)
app.use(createHead())
app.use(FloatingVue)

app.directive('focus', Directives.focus)
app.directive('blur', Directives.blur)
app.directive('on-click-outside', Directives.onClickOutside)

app.mount('#app')
