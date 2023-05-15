import * as Kv from 'idb-keyval'
import { reactive, watch } from 'vue'
import { History } from '../models/history/History'

const globalHistory: History = reactive({
  record: {},
})

let initialized = false

export async function loadGlobalHistory(): Promise<History> {
  if (initialized) {
    return globalHistory
  }

  globalHistory.record = (await Kv.get('globalHistory.record')) || {}

  initialized = true

  return globalHistory
}

watch(
  () => globalHistory.record,
  async (value) => {
    await Kv.set('globalHistory.record', { ...globalHistory.record })
  },
  {
    deep: true,
  },
)
