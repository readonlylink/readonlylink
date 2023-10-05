import { theme } from './Highlight.vue'

onMounted(async () => {
  if (theme.name === dark) {
    await import('highlight.js/styles/github-dark.css')
  } else {
    await import('highlight.js/styles/github.css')
  }
})
