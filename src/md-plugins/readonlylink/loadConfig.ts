import { parseDocument } from '@xieyuheng/x-markdown'
import { documentTitle } from '../../components/md/documentTitle'
import { Config } from './Config'

export async function loadConfig(url: string): Promise<Config> {
  if (url.endsWith('.md')) {
    const response = await fetch(url)
    const text = await response.text()
    const document = parseDocument(text)

    return {
      kind: 'Article',
      title: documentTitle(document) || url,
      attributes: document.attributes,
    }
  }

  const response = await fetch(url)
  const json = await response.json()
  return json
}
