import { formatDate } from '../../utils/formatDate'

export type Attributes = {
  title?: string
  subtitle?: string
  translators: Array<string>
  authors: Array<string>
  keywords: Array<string>
  venue?: string
  date?: string
}

export function normalizeAttributes(attributes: any): Attributes {
  let title = undefined
  if (typeof attributes.title === 'string') title = attributes.title

  let subtitle = undefined
  if (typeof attributes.subtitle === 'string') title = attributes.subtitle

  const translators = []
  if (attributes.translator) translators.push(attributes.translator)
  if (attributes.translators) translators.push(...attributes.translators)

  const authors = []
  if (attributes.author) authors.push(attributes.author)
  if (attributes.authors) authors.push(...attributes.authors)

  const keywords = []
  if (attributes.keywords) keywords.push(...attributes.keywords)
  if (attributes.tags) keywords.push(...attributes.tags)

  let venue = attributes.venue

  let date = undefined
  if (attributes.year) date = attributes.year
  if (attributes.date) date = normalizeDate(attributes.date)

  return {
    title,
    subtitle,
    translators,
    authors,
    keywords,
    venue,
    date,
  }
}

export function normalizeDate(date: any): string | undefined {
  if (typeof date === 'number') {
    if (date < 10000) return date.toString()
    else return formatDate(date)
  } else if (date instanceof Date) {
    return formatDate(date)
  } else if (typeof date === 'string') {
    const parsed = new Date(date)
    if (Number.isNaN(parsed.getTime())) return date
    else return formatDate(parsed)
  }
}
