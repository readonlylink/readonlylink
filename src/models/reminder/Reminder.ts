import { Content, TaggedItem } from '@xieyuheng/postmark'

export class Reminder {
  title: Content
  sections: Array<Content>

  constructor(title: Content, sections: Array<Content>) {
    this.title = title
    this.sections = sections
  }

  static build(item: TaggedItem): Reminder {
    return new Reminder(
      item.content,
      item.children.map((child) => child.content),
    )
  }
}
