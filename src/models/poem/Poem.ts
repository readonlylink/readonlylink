import { Content, TaggedItem } from '@xieyuheng/postmark'

export class Poem {
  title: Content
  sections: Array<Content>

  constructor(title: Content, sections: Array<Content>) {
    this.title = title
    this.sections = sections
  }

  static build(item: TaggedItem): Poem {
    return new Poem(
      item.content,
      item.children.map((child) => child.content),
    )
  }
}
