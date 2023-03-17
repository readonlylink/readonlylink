import { reactive, watch } from 'vue'

const globalAuthorList: Array<string> = reactive([])

let initialized = false

export function useGlobalAuthorList(): Array<string> {
  if (initialized) {
    return globalAuthorList
  }

  globalAuthorList.push(...loadList())

  initialized = true

  return globalAuthorList
}

function loadList(): Array<string> {
  const listText = window.localStorage.getItem(`globalAuthorList`)
  if (!listText) {
    return []
  }

  return listText.split('\n')
}

watch(
  () => globalAuthorList,
  (value) => {
    const listText = value.join('\n')
    window.localStorage.setItem('globalAuthorList', listText)
  },
  {
    immediate: true,
    deep: true,
  },
)
