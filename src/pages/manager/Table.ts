import { Column, createColumn } from './Column'
import { createRow, Row } from './Row'

export type Table = {
  columns: Array<Column>
  columnNames: Array<string>
  rows: Array<Row>
}

function arrayDedup<A>(array: Array<A>): Array<A> {
  return Array.from(new Set(array))
}

export function tableColumnNames(dataset: Array<any>): Array<string> {
  let columnNames = dataset.flatMap(Object.keys)

  columnNames = arrayDedup(columnNames)

  startColumnName(columnNames, '@path')
  endColumnName(columnNames, '@createdAt')
  endColumnName(columnNames, '@updatedAt')
  endColumnName(columnNames, '@revision')

  return columnNames
}

function startColumnName(columnNames: Array<string>, name: string): void {
  if (columnNames.includes(name)) {
    columnNames.splice(columnNames.indexOf(name), 1)
    columnNames.unshift(name)
  }
}

function endColumnName(columnNames: Array<string>, name: string): void {
  if (columnNames.includes(name)) {
    columnNames.splice(columnNames.indexOf(name), 1)
    columnNames.push(name)
  }
}

export function createTable(dataset: Array<any>): Table {
  const columnNames = tableColumnNames(dataset)
  const columns = columnNames.map((name) => createColumn(dataset, name))
  const rows = dataset.map((data, index) => createRow(index, columnNames, data))

  return {
    columns,
    get columnNames() {
      return columns.map(({ name }) => name)
    },
    rows,
  }
}
