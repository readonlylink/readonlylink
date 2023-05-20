import { AuthorConfig } from '../../models/author/AuthorConfig'
import { BookConfig } from '../../models/book/BookConfig'
import { ManualConfig } from '../../models/manual/ManualConfig'

export type Config = BookConfig | ManualConfig | AuthorConfig | ArticleConfig

export type ArticleConfig = {
  kind: 'Article'
  title: string
  attributes: Record<string, any>
}
