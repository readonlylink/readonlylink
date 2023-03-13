import qs from 'qs'

export type State = {
  url: string
  path: string
  frontMatter: string
}

export type StateOptions = {
  url: string
  path: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { url, path } = options

  const query = qs.parse(new URL(window.location.href).search, {
    ignoreQueryPrefix: true,
  })

  const frontMatter = query['front-matter'] ? String(query['front-matter']) : ''

  return {
    url,
    path,
    frontMatter,
  }
}
