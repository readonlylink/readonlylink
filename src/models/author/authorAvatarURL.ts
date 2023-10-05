import { join } from 'path-browserify'
import { useGlobalTheme } from '../theme'
import { Author } from './Author'

export function authorAvatarURL(author: Author): URL {
  const theme = useGlobalTheme()

  if (typeof author.config.avatar === 'string') {
    return new URL(
      join(author.config.src || '', author.config.avatar),
      author.url,
    )
  }

  if (theme.name === 'dark') {
    return new URL(
      join(author.config.src || '', author.config.avatar.dark),
      author.url,
    )
  } else {
    return new URL(
      join(author.config.src || '', author.config.avatar.light),
      author.url,
    )
  }
}
