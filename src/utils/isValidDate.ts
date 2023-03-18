export function isValidDate(date: any): boolean {
  return !Number.isNaN(new Date(date).getTime())
}
