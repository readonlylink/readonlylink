import { formatDate } from "../../../../ut/format-date"

type Attributes = {
  translators: Array<{ name: string; username?: string }>
  authors: Array<{ name: string; username?: string }>
  keywords: Array<string>
  venue?: string
  date?: string
}

export function normalizeAttributes(attributes: any): Attributes {
  const translators = []
  if (attributes.translator)
    translators.push(normalizeUser(attributes.translator))
  if (attributes.translators)
    translators.push(...attributes.translators.map(normalizeUser))

  const authors = []
  if (attributes.author) authors.push(normalizeUser(attributes.author))
  if (attributes.authors) authors.push(...attributes.authors.map(normalizeUser))

  const keywords = []
  if (attributes.keywords) keywords.push(...attributes.keywords)
  if (attributes.tags) keywords.push(...attributes.tags)

  let venue = attributes.venue

  let date = undefined
  if (attributes.year) date = attributes.year
  if (attributes.date) date = normalizeDate(attributes.date)

  return { translators, authors, keywords, venue, date }
}

export function normalizeUser(user: any): { name: string; username?: string } {
  if (typeof user["name"] === "string") {
    return user
  }

  return { name: user }
}

export function normalizeDate(date: any): string | undefined {
  if (typeof date === "number") {
    if (date < 10000) return date.toString()
    else return formatDate(date)
  } else if (date instanceof Date) {
    return formatDate(date)
  } else if (typeof date === "string") {
    const parsed = new Date(date)
    if (Number.isNaN(parsed.getTime())) return date
    else return formatDate(parsed)
  }
}
