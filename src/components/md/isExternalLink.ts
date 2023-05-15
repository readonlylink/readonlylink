export function isExternalLink(link: string) {
  return (
    link.startsWith('http://') ||
    link.startsWith('https://') ||
    link.startsWith('data:') ||
    link.startsWith('mailto:')
  )
}
