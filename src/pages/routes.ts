import { RouteRecordRaw } from 'vue-router'
import Docs from './docs/Docs.vue'
import PageNotFound from './errors/PageNotFound.vue'
import Home from './home/Home.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/docs', component: Docs },
  { path: '/:pathMatch(.*)', component: PageNotFound },
]
