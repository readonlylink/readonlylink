import { Nodes } from '@xieyuheng/postmark'
import { useExtensionStore } from '../../composables/extension-store'

export class State {
  url: string
  text: string

  constructor(options: { url: string; text: string }) {
    this.url = options.url
    this.text = options.text
  }

  get document(): Nodes.Document {
    return useExtensionStore().parser.parseDocument(this.text)
  }

  get title(): string {
    if (this.document.attributes.title) {
      return this.document.attributes.title
    }

    if (this.firstHeadline) {
      return this.firstHeadline.formatBody()
    }

    return this.url
  }

  get firstHeadline(): Nodes.Headline | undefined {
    return this.document.children.find(
      (node) => node instanceof Nodes.Headline,
    ) as Nodes.Headline | undefined
  }
}
