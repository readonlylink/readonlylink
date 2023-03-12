import { RouteRecordRaw } from 'vue-router'
import Docs from './docs/Docs.vue'
import PageNotFound from './errors/PageNotFound.vue'
import Home from './home/Home.vue'
import Manager from './manager/Manager.vue'
import ManagerLogin from './manager/ManagerLogin.vue'
import Talks from './talks/Talks.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/talks', component: Talks },
  { path: '/docs', component: Docs },
  { path: '/manager', component: ManagerLogin },
  { path: '/manager/', component: ManagerLogin },
  { path: '/manager/:url(.*)', component: Manager },
  { path: '/:pathMatch(.*)', component: PageNotFound },
]
