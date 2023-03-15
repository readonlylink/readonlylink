import { RouteRecordRaw } from 'vue-router'
import About from './about/About.vue'
import Article from './articles/Article.vue'
import ArticleEntrance from './articles/ArticleEntrance.vue'
import Book from './books/Book.vue'
import Docs from './docs/Docs.vue'
import PageNotFound from './errors/PageNotFound.vue'
import Home from './home/Home.vue'
import Manual from './manuals/Manual.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/docs', component: Docs },

  { path: '/articles', component: ArticleEntrance },
  { path: '/articles/', component: ArticleEntrance },
  { path: '/articles/:url(.*)', component: Article },

  { path: '/books', redirect: '/' },
  { path: '/books/', redirect: '/' },
  { path: '/books/:url(.*)', component: Book },
  { path: '/books/:url(.*)/-/:path(.*)', component: Book },

  { path: '/manuals', redirect: '/' },
  { path: '/manuals/', redirect: '/' },
  { path: '/manuals/:url(.*)', component: Manual },
  { path: '/manuals/:url(.*)/-/:path(.*)', component: Manual },

  { path: '/about', component: About },
  { path: '/:pathMatch(.*)', component: PageNotFound },
]
