import { Nodes } from '@xieyuheng/postmark'
import { stateDocument } from './stateDocument'

export class State {
  url: string
  text: string

  constructor(options: { url: string; text: string }) {
    this.url = options.url
    this.text = options.text
  }

  get title(): string {
    const document = stateDocument(this)

    if (document.attributes.title) {
      return document.attributes.title
    }

    if (this.firstHeadline) {
      return this.firstHeadline.formatBody()
    }

    return this.url
  }

  get firstHeadline(): Nodes.Headline | undefined {
    const document = stateDocument(this)

    return document.children.find((node) => node instanceof Nodes.Headline) as
      | Nodes.Headline
      | undefined
  }
}
