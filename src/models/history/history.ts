import { get, set } from 'idb-keyval'
import { Link } from '../link'
import { RenderKind } from '../render-kind'
import { HistoryEntry, HistoryEntryJson } from './history-entry'

export interface HistoryJson {
  entries: Array<HistoryEntryJson>
}

export class History {
  entries: Array<HistoryEntry>

  constructor(opts: { entries: Array<HistoryEntry> }) {
    this.entries = opts.entries
  }

  static init(): History {
    return new History({ entries: [] })
  }

  private static create({ entries }: HistoryJson): History {
    return new History({ entries: entries.map(HistoryEntry.create) })
  }

  static async load(): Promise<History> {
    // TODO use user data
    const historyJson =
      typeof window === 'undefined'
        ? { entries: [] }
        : await get<HistoryJson>('history')

    const history = historyJson ? History.create(historyJson) : History.init()
    history.sortByTime()
    history.dedupByLink()
    return history
  }

  private sortByTime(): void {
    this.entries.sort((x, y) => (x.time > y.time ? -1 : 1))
  }

  private dedupByLink(): void {
    const entries: Array<HistoryEntry> = []
    const paths: Set<string> = new Set()
    for (const entry of this.entries) {
      if (!paths.has(entry.path)) {
        paths.add(entry.path)
        entries.push(entry)
      }
    }

    this.entries = entries
  }

  async deleteAll(): Promise<void> {
    this.entries = []
    await this.save()
  }

  async deleteEntry(entry: HistoryEntry): Promise<void> {
    const index = this.entries.indexOf(entry)
    if (index > -1) {
      this.entries.splice(index, 1)
    }

    await this.save()
  }

  async save(): Promise<void> {
    this.sortByTime()
    this.dedupByLink()

    // TODO use user data
    if (typeof window === 'undefined') {
      return
    }

    await set('history', this.json())
  }

  async prepend(opts: {
    kind: RenderKind
    link: Link
    attributes?: any
  }): Promise<void> {
    const { kind, link, attributes } = opts
    const entry = new HistoryEntry({
      kind,
      link,
      time: Date.now(),
      // NOTE The following makes using indexeddb safe.
      //   For example, it can convert vue nested proxy object to plain object.
      attributes: JSON.parse(JSON.stringify({ ...attributes })),
    })
    this.entries.unshift(entry)
    await this.save()
  }

  json(): HistoryJson {
    return {
      entries: this.entries.map((entry) => entry.json()),
    }
  }
}
