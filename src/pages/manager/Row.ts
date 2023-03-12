import { Cell, createCell } from './Cell'

export type Row = {
  index: number
  cells: Array<Cell>
}

export function createRow(
  index: number,
  columnNames: Array<string>,
  data: any,
): Row {
  return {
    index,
    cells: columnNames.map((columnName) =>
      createCell(index, columnName, data[columnName]),
    ),
  }
}
