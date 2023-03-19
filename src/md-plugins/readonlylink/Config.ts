import { Attributes } from '../../components/md/normalizeAttributes'
import { AuthorConfig } from '../../pages/author/AuthorConfig'
import { BookConfig } from '../../pages/book/BookConfig'
import { ManualConfig } from '../../pages/manual/ManualConfig'

export type Config = BookConfig | ManualConfig | AuthorConfig | ArticleConfig

export type ArticleConfig = {
  kind: 'Article'
  title: string
  attributes: Attributes
}
