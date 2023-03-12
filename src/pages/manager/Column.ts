import { CellKind, valueKind } from './Cell'

export type Column = {
  name: string
  kind?: CellKind
}

export function createColumn(dataset: Array<any>, name: string): Column {
  const data = dataset.find((data) => data[name] !== undefined)
  if (data !== undefined && data[name] !== undefined) {
    return { name, kind: valueKind(data[name]) }
  }

  return { name }
}
