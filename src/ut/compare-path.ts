export function comparePath(left: string, right: string): -1 | 0 | 1 {
  if (
    Number.isNaN(Number.parseFloat(left)) &&
    Number.isNaN(Number.parseFloat(right))
  ) {
    return left > right ? 1 : -1
  } else {
    return Number.parseFloat(left) > Number.parseFloat(right) ? 1 : -1
  }
}
