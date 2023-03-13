import { Content, Nodes, TaggedItem } from '@xieyuheng/postmark'

export interface Utterance {
  content: Content
  notes: Array<Content>
}

export interface Frame {
  index: number
  left: Utterance
  right: Utterance
}

export class Dialog {
  frames: Array<Frame>

  constructor(frames: Array<Frame>) {
    this.frames = frames
  }

  static build(
    item: TaggedItem,
    opts: {
      previousCustomItems: Array<Nodes.CustomItem<Dialog>>
    },
  ): Dialog {
    const offset = opts.previousCustomItems.flatMap(
      (customItem) => customItem.value.frames,
    ).length

    const frames: Array<Frame> = []
    for (let i = 0; i < item.children.length; i += 2) {
      const leftItem = item.children[i]
      const rightItem = item.children[i + 1]
      if (rightItem === undefined) break
      frames.push({
        index: offset + Math.floor(i / 2),
        left: {
          content: leftItem.content,
          notes: leftItem.children.map((child) => child.content),
        },
        right: {
          content: rightItem.content,
          notes: rightItem.children.map((child) => child.content),
        },
      })
    }

    return new Dialog(frames)
  }
}
