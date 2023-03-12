import { RouteRecordRaw } from 'vue-router'
import Docs from './docs/Docs.vue'
import About from './about/About.vue'
import PageNotFound from './errors/PageNotFound.vue'
import Home from './home/Home.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/docs', component: Docs },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)', component: PageNotFound },
]
