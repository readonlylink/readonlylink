export type HistoryEntry = {
  time: number
  url: string
}

export type History = {
  record: Record<string, HistoryEntry>
}
