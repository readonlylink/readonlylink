import { Link } from '../../models/link'
import { Content } from '../project'

export class Project {
  link: Link
  config: Record<string, any>
  contents: Array<Content>

  constructor(options: {
    link: Link
    config: Record<string, any>
    contents: Array<Content>
  }) {
    this.link = options.link
    this.config = options.config
    this.contents = options.contents
  }

  get title(): string {
    return this.config.title
  }
}
