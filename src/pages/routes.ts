import { RouteRecordRaw } from 'vue-router'
import About from './about/About.vue'
import Article from './articles/Article.vue'
import Docs from './docs/Docs.vue'
import PageNotFound from './errors/PageNotFound.vue'
import Home from './home/Home.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/docs', component: Docs },
  { path: '/articles', component: Article },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)', component: PageNotFound },
]
