import colors from 'tailwindcss/colors'
import { reactive } from 'vue'

let globalLang = reactive({
  name: 'stone',
  get color(): string {
    return (colors as any)[this.name][50]
  },
})

export function useGlobalTheme() {
  return globalLang
}
