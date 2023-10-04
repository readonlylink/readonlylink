export function initialThemeName(): string {
  if (
    window.localStorage.getItem('theme') === 'dark' ||
    (!window.localStorage.getItem('theme') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
    return 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    return 'system'
  }
}
