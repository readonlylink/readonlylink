import { RouteRecordRaw } from 'vue-router'
import About from './about/About.vue'
import Article from './articles/Article.vue'
import Book from './books/Book.vue'
import Docs from './docs/Docs.vue'
import PageNotFound from './errors/PageNotFound.vue'
import Home from './home/Home.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/docs', component: Docs },
  { path: '/articles', redirect: '/' },
  { path: '/articles/:url(.*)', component: Article },
  { path: '/books', redirect: '/' },
  { path: '/books/:url(.*)', component: Book },
  { path: '/books/:url(.*)/-/:path(.*)', component: Book },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)', component: PageNotFound },
]
