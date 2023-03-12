export function isSubclassOf(x: any, y: any): boolean {
  return x.prototype instanceof y
}
