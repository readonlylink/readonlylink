import { leftPad } from './leftPad'

export function formatDate(t: Date | number | string): string {
  if (typeof t === 'string') t = new Date(t)
  if (typeof t === 'number') t = new Date(t)

  const YYYY = t.getFullYear()
  const MM = leftPad((t.getMonth() + 1).toString(), 2, '0')
  const DD = leftPad(t.getDate().toString(), 2, '0')

  return `${YYYY}-${MM}-${DD}`
}

export function formatTime(
  t: Date | number | string,
  opts?: { withMilliseconds?: boolean },
): string {
  if (typeof t === 'string') t = new Date(t)
  if (typeof t === 'number') t = new Date(t)

  const hh = leftPad(t.getHours().toString(), 2, '0')
  const mm = leftPad(t.getMinutes().toString(), 2, '0')
  const ss = leftPad(t.getSeconds().toString(), 2, '0')

  const mi = leftPad((t.getTime() % 1000).toString(), 3, '0')

  if (opts?.withMilliseconds) {
    return `${hh}:${mm}:${ss}.${mi}`
  } else {
    return `${hh}:${mm}:${ss}`
  }
}

export function formatDateTime(
  t: Date | number,
  opts?: { withMilliseconds?: boolean },
): string {
  if (typeof t === 'number') t = new Date(t)

  const date = formatDate(t)
  const time = formatTime(t, opts)

  return `${date} ${time}`
}

export function formatAgo(
  t: Date | number | string,
  options: { lang: string },
): string {
  if (typeof t === 'string') t = new Date(t)
  if (typeof t === 'number') t = new Date(t)

  const detla = Date.now() - t.getTime()

  const A_MONTH = 30 * 24 * 60 * 60 * 1000

  if (detla > A_MONTH) {
    return formatDate(t)
  }

  return formatDetla(detla, options)
}

export function formatDetla(t: number, options: { lang: string }): string {
  const { lang } = options

  const s = Math.floor(t / 1000)
  const m = Math.floor(s / 60)
  const h = Math.floor(m / 60)
  const d = Math.floor(h / 24)

  if (d) return lang.startsWith('zh') ? `${d} 天前` : `${d} days ago`
  if (h) return lang.startsWith('zh') ? `${h} 小时前` : `${h} hours ago`
  if (m) return lang.startsWith('zh') ? `${m} 分钟前` : `${m} minutes ago`
  else return lang.startsWith('zh') ? `刚才` : `just now`
}
