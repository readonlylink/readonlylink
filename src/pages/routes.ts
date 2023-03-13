import { RouteRecordRaw } from 'vue-router'
import About from './about/About.vue'
import Article from './articles/Article.vue'
import Docs from './docs/Docs.vue'
import PageNotFound from './errors/PageNotFound.vue'
import Home from './home/Home.vue'
import Project from './projects/Project.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/docs', component: Docs },
  { path: '/articles', redirect: '/' },
  { path: '/articles/:url(.*)', component: Article },
  { path: '/projects', component: Project },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)', component: PageNotFound },
]
