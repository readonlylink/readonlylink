import * as Kv from 'idb-keyval'
import { reactive, watch } from 'vue'
import { History, HistoryEntry } from '../models/history/History'

const globalHistory: History = reactive({
  record: {},
})

let initialized = false

export async function loadGlobalHistory(): Promise<History> {
  if (initialized) {
    return globalHistory
  }

  const record = await Kv.get('globalHistory.record')
  if (record) {
    globalHistory.record = record
  }
  //  globalHistory.record =  {}

  initialized = true

  return globalHistory
}

watch(
  () => globalHistory.record,
  async (value) => {
    const record: Record<string, HistoryEntry> = {}
    for (const [key, value] of Object.entries(globalHistory.record)) {
      record[key] = { ...value }
    }

    await Kv.set('globalHistory.record', record)
  },
  {
    deep: true,
  },
)

export function sortGlobalHistoryRecord(): void {
  const entries = Object.entries(globalHistory.record)

  entries.sort(([, x], [, y]) => (x.time > y.time ? -1 : 1))

  for (const [key, value] of entries) {
    delete globalHistory.record[key]
    globalHistory.record[key] = value
  }
}
