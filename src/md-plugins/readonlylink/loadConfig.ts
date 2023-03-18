import { parseMarkdown } from '../../components/md/parseMarkdown'
import { Config } from './Config'

export async function loadConfig(url: string): Promise<Config> {
  if (url.endsWith('.md')) {
    const response = await fetch(url)
    const text = await response.text()
    const document = parseMarkdown(text)

    return {
      kind: 'Article',
      title: '',
      attributes: document.attributes,
    }
  }

  const response = await fetch(url)
  const json = await response.json()
  return json
}
