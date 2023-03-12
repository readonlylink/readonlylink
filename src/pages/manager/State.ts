import { Cell } from './Cell'
import { PathEntry } from './PathEntry'
import { createTable, Table } from './Table'

export type StateOptions = {
  url: string
  token: string
  page: number
  pathEntries: Array<PathEntry>
  currentPathEntry?: PathEntry
  currentRowIndex?: number
  currentRowIsOpen?: boolean
  currentCellIndex?: number
  currentCellColumnName?: string
  currentCellIsOpen?: boolean
}

export type State = StateOptions & {
  size: number
  dataset: Array<any>
  datasetIsLoading?: boolean
  table: Table
  currentCell?: Cell
  message: string
  status: 'ok' | 'running' | 'error'
  isCurrentCell(cell: Cell): boolean
}

export function createState(options: StateOptions): State {
  const {
    url,
    token,
    pathEntries,
    currentPathEntry,
    page,
    currentRowIsOpen,
    currentRowIndex,
    currentCellIndex,
    currentCellColumnName,
    currentCellIsOpen,
  } = options

  return {
    url,
    token,
    pathEntries,
    currentPathEntry: currentPathEntry || pathEntries[0],
    page,
    size: 50,
    dataset: [],
    get table() {
      return createTable(this.dataset)
    },
    currentRowIndex,
    currentRowIsOpen,
    currentCellIndex,
    currentCellColumnName,
    currentCellIsOpen,
    isCurrentCell(cell: Cell): boolean {
      return (
        cell.index === this.currentCellIndex &&
        cell.columnName === this.currentCellColumnName
      )
    },
    message: '',
    status: 'ok',
  }
}
