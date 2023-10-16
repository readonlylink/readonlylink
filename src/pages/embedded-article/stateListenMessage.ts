import { parseDocument } from '@xieyuheng/x-markdown'
import { useGlobalTheme } from '../../models/theme'
import { State } from './State'

export function stateListenMessage(state: State): void {
  const theme = useGlobalTheme()

  window.addEventListener('message', (event) => {
    console.log({
      who: 'EmbeddedArticle',
      message: 'receive message',
      data: event.data,
    })

    if (typeof event.data.theme === 'string') {
      theme.name = event.data.theme
    }

    if (event.data.document) {
      state.document = event.data.document
    } else if (typeof event.data.text === 'string') {
      state.document = parseDocument(event.data.text)
    }
  })
}
