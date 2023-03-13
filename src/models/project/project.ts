import { Link } from '../../models/link'
import { Content } from '../project'

export class Project {
  link: Link
  config: Record<string, any>
  contents: Array<Content>

  constructor(opts: {
    link: Link
    config: Record<string, any>
    contents: Array<Content>
  }) {
    this.link = opts.link
    this.config = opts.config
    this.contents = opts.contents
  }

  get title(): string {
    return this.config.title
  }
}
