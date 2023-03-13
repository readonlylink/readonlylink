import { Nodes } from '@xieyuheng/postmark'
import { useExtensionStore } from '../../composables/extension-store'
import { Content } from '../project'

export class ProjectPaginator {
  path: string
  text: string
  contents: Array<Content>

  constructor(opts: { path: string; text: string; contents: Array<Content> }) {
    this.path = opts.path
    this.text = opts.text
    this.contents = opts.contents
  }

  get document(): Nodes.Document {
    return useExtensionStore().parser.parseDocument(this.text)
  }

  get title(): string {
    return this.path.endsWith('.md')
      ? this.document.attributes.title
      : this.path
  }

  get index(): number {
    return this.contents.findIndex((content) => content.link.path === this.path)
  }

  get prev(): Content | undefined {
    return this.index === -1 ? undefined : this.contents[this.index - 1]
  }

  get next(): Content | undefined {
    return this.index === -1 ? undefined : this.contents[this.index + 1]
  }
}
