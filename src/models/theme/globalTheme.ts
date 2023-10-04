import { reactive, watch } from 'vue'
import { Theme } from './Theme'

export const globalTheme: Theme = reactive({
  name: 'system',
  knownThemeNames: ['system', 'light', 'dark'],
})

watch(
  () => globalTheme.name,
  (value, oldValue) => {
    if (oldValue) {
      document.documentElement.classList.remove(oldValue)
    }

    if (value === 'system') {
      window.localStorage.removeItem('theme')
    } else {
      window.localStorage.setItem('theme', value)
      document.documentElement.classList.add(value)
    }
  },
)
