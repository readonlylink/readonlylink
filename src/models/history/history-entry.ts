import { Link } from '../link'
import { formatRenderPath, RenderKind } from '../render-kind'

export interface HistoryEntryJson {
  kind: RenderKind
  time: number
  link: string
  attributes: any
}

export class HistoryEntry {
  kind: RenderKind
  time: number
  link: Link
  attributes: any

  constructor(opts: {
    kind: RenderKind
    time: number
    link: Link
    attributes: any
  }) {
    this.kind = opts.kind
    this.time = opts.time
    this.link = opts.link
    this.attributes = opts.attributes
  }

  static create({
    kind,
    time,
    link,
    attributes,
  }: HistoryEntryJson): HistoryEntry {
    return new HistoryEntry({
      kind,
      time,
      link: Link.parse(link),
      attributes,
    })
  }

  get path(): string {
    return formatRenderPath(this.kind, this.link)
  }

  json(): HistoryEntryJson {
    return {
      kind: this.kind,
      time: this.time,
      link: this.link.format(),
      attributes: this.attributes,
    }
  }
}
