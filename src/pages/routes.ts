import { RouteRecordRaw } from 'vue-router'
import About from './about/About.vue'
import ArticleEntrance from './article-entrance/ArticleEntrance.vue'
import Article from './article/Article.vue'
import AuthorList from './author-list/AuthorList.vue'
import Author from './author/Author.vue'
import BookEntrance from './book-entrance/BookEntrance.vue'
import Book from './book/Book.vue'
import Editor from './editor/Editor.vue'
import PageNotFound from './errors/PageNotFound.vue'
import Following from './following/Following.vue'
import History from './history/History.vue'
import Home from './home/Home.vue'
import ManualEntrance from './manual-entrance/ManualEntrance.vue'
import Manual from './manual/Manual.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/about', component: About },

  { path: '/authors', component: AuthorList },
  { path: '/authors/', component: AuthorList },
  { path: '/authors/:url(.*)', component: Author },
  { path: '/authors/:url(.*)/-/:path(.*)', component: Author },

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

  { path: '/editor', component: Editor },

  { path: '/following', component: Following },

  { path: '/:pathMatch(.*)', component: PageNotFound },
]
