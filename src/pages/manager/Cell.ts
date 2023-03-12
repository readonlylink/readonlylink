export type CellKind =
  | 'String'
  | 'Number'
  | 'Null'
  | 'Boolean'
  | 'Array'
  | 'Object'

export type Cell = {
  index: number
  columnName: string
  kind: CellKind
  value: any
}

export function createCell(
  index: number,
  columnName: string,
  value: any,
): Cell {
  return {
    index,
    columnName,
    kind: valueKind(value),
    value,
  }
}

export function valueKind(value: any): CellKind {
  if (value === null) {
    return 'Null'
  }

  if (value === undefined) {
    return 'Null'
  }

  if (typeof value === 'boolean') {
    return 'Boolean'
  }

  if (typeof value === 'string') {
    return 'String'
  }

  if (typeof value === 'number') {
    return 'Number'
  }

  if (value instanceof Array) {
    return 'Array'
  }

  if (typeof value === 'object') {
    return 'Object'
  }

  console.error({
    message: `[valueKind] unknown value`,
    value,
  })

  throw new Error(`[valueKind] unknown value: ${JSON.stringify(value)}`)
}
