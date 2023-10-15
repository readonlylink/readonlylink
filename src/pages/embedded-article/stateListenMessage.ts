import { parseDocument } from '@xieyuheng/x-markdown'
import { State } from './State'

export function stateListenMessage(state: State): void {
  window.addEventListener('message', (event) => {
    console.log({
      who: 'EmbeddedArticle',
      message: 'receive message',
      data: event.data,
    })

    if (event.data.document) {
      state.document = event.data.document
    } else if (typeof event.data.text === 'string') {
      state.document = parseDocument(event.data.text)
    }
  })
}
