import { reactive, watch } from 'vue'

type Lang = {
  knownTags: Array<string>
  tag: string
  isZh(): boolean
  isEn(): boolean
}

const globalLang: Lang = reactive({
  knownTags: ['zh', 'en'],
  tag: 'en',

  isZh() {
    return this.tag.startsWith('zh')
  },

  isEn() {
    return !this.isZh()
  },
})

let initialized = false

export function useGlobalLang(): Lang {
  if (initialized) {
    return globalLang
  }

  globalLang.tag = initialTag()

  initialized = true

  return globalLang
}

function initialTag(): string {
  const tag = window.localStorage.getItem('lang')
  if (tag) {
    return tag
  }

  if (window.navigator.language.startsWith('zh')) {
    return 'zh'
  }

  return 'en'
}

watch(
  () => globalLang.tag,
  (value) => {
    window.localStorage.setItem('lang', value)
  },
)

export function langTagName(tag: string): string {
  switch (tag) {
    case 'zh':
      return '中文'
    case 'en':
      return 'English'
    default:
      return 'English'
  }
}
