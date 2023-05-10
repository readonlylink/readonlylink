export function arrayFromRange(options: {
  start: number
  length: number
  step?: number
}): Array<number> {
  const array: Array<number> = []
  let count = options.start
  while (array.length < options.length) {
    array.push(count)
    count += options.step || 1
  }

  return array
}
