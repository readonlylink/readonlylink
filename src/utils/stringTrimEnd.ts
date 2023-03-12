export function stringTrimEnd(input: string, pattern: string): string {
  if (input.endsWith(pattern)) {
    const prefix = input.slice(0, input.length - pattern.length)
    return stringTrimEnd(prefix, pattern)
  }

  return input
}
