import ty, { Schema } from '@xieyuheng/ty'
import { useGlobalLang } from '../../reactives/useGlobalLang'

export type RenderKind = 'Article' | 'Book' | 'Manual' | 'Author'

export const RenderKindSchema: Schema<RenderKind> = ty.union(
  ty.const('Article'),
  ty.union(ty.const('Book'), ty.union(ty.const('Manual'), ty.const('Author'))),
)

export function translateRenderKind(kind: RenderKind): string {
  const lang = useGlobalLang()

  if (lang.isZh()) {
    switch (kind) {
      case 'Article':
        return '文章'
      case 'Book':
        return '书籍'
      case 'Manual':
        return '手册'
      case 'Author':
        return '作者'
    }
  }

  return kind
}

export function renderKindFromPrefix(prefix: string): RenderKind {
  switch (prefix) {
    case 'articles':
      return 'Article'
    case 'books':
      return 'Book'
    case 'manuals':
      return 'Manual'
    case 'authors':
      return 'Author'
    default:
      throw new Error(`Unknown prefix: ${prefix}`)
  }
}

export function formatRenderPath(
  kind: RenderKind,
  opts: {
    host?: string
    username: string
    project?: string
    path?: string
  },
): string {
  switch (kind) {
    case 'Article':
      return `/articles/${format(opts)}`
    case 'Book':
      return `/books/${format(opts)}`
    case 'Manual':
      return `/manuals/${format(opts)}`
    case 'Author':
      return `/authors/${opts.username}`
  }
}

function format(opts: {
  host?: string
  username: string
  project?: string
  path?: string
}): string {
  let s = ''

  // NOTE It matters that we do not append a "/" when there is no `host`.
  if (opts.host) s += `${opts.host}/`
  if (opts.username) s += `${opts.username}`
  if (opts.project) s += `/${opts.project}`
  if (opts.path) s += `/-/${opts.path}`

  return s
}
