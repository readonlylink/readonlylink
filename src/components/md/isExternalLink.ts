export function isExternalLink(path: string) {
  return (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:')
  )
}
