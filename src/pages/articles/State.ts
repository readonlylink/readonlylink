import { Nodes } from '@xieyuheng/postmark'
import { useExtensionStore } from '../../composables/extension-store'
import { History } from '../../models/history'
import { Link } from '../../models/link'

export class State {
  link: Link
  text: string

  constructor(opts: { link: Link; text: string }) {
    this.link = opts.link
    this.text = opts.text
  }

  get document(): Nodes.Document {
    return useExtensionStore().parser.parseDocument(this.text)
  }

  get title(): string {
    if (this.link.path.endsWith('.md')) {
      if (this.document.attributes.title) {
        return this.document.attributes.title
      }

      if (this.firstHeadline) {
        return this.firstHeadline.formatBody()
      }
    }

    return '/' + this.link.path
  }

  private get firstHeadline(): Nodes.Headline | undefined {
    return this.document.children.find(
      (node) => node instanceof Nodes.Headline,
    ) as Nodes.Headline | undefined
  }

  async saveHistory(): Promise<void> {
    const history = await History.load()
    await history.prepend({
      kind: 'Article',
      link: this.link,
      attributes: {
        ...this.document.attributes,
        title: this.title,
      },
    })
  }
}
