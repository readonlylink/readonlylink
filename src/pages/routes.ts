import { RouteRecordRaw } from 'vue-router'
import About from './about/About.vue'
import Article from './articles/Article.vue'
import ArticleEntrance from './articles/ArticleEntrance.vue'
import Author from './authors/Author.vue'
import AuthorList from './authors/AuthorList.vue'
import Book from './books/Book.vue'
import BookEntrance from './books/BookEntrance.vue'
import PageNotFound from './errors/PageNotFound.vue'
import History from './history/History.vue'
import Home from './home/Home.vue'
import Manual from './manuals/Manual.vue'
import ManualEntrance from './manuals/ManualEntrance.vue'
import Subscription from './subscriptions/Subscription.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/about', component: About },

  { path: '/authors', component: AuthorList },
  { path: '/authors/', component: AuthorList },
  { path: '/authors/:url(.*)', component: Author },

  { path: '/articles', component: ArticleEntrance },
  { path: '/articles/', component: ArticleEntrance },
  { path: '/articles/:url(.*)', component: Article },

  { path: '/books', component: BookEntrance },
  { path: '/books/', component: BookEntrance },
  { path: '/books/:url(.*)', component: Book },
  { path: '/books/:url(.*)/-/:path(.*)', component: Book },

  { path: '/manuals', component: ManualEntrance },
  { path: '/manuals/', component: ManualEntrance },
  { path: '/manuals/:url(.*)', component: Manual },
  { path: '/manuals/:url(.*)/-/:path(.*)', component: Manual },

  { path: '/history', component: History },

  { path: '/subscriptions', component: Subscription },

  { path: '/:pathMatch(.*)', component: PageNotFound },
]
