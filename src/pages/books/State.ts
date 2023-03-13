import qs from 'qs'
import { ExtensionStore } from '../../components/md/extension-store'
import { useExtensionStore } from '../../composables/extension-store'

export type State = {
  url: string
  path: string
  frontMatter: string
  extensions: ExtensionStore
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

  const extensions = useExtensionStore()

  return {
    url,
    path,
    frontMatter,
    extensions,
  }
}
