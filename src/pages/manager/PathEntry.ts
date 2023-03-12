import { basename } from 'path-browserify'

export type PathEntryKind = 'File' | 'Directory'

export type PathEntryOptions = {
  kind: PathEntryKind
  path: string
  isOpen?: boolean
}

export type PathEntry = PathEntryFile | PathEntryDirectory

export type PathEntryFile = {
  kind: 'File'
  path: string
}

export type PathEntryDirectory = {
  kind: 'Directory'
  path: string
  children: Array<PathEntry>
  isChildrenLoading: boolean
  isOpen: boolean
  page: number
  size: number
}

export function createPathEntry(options: PathEntryOptions): PathEntry {
  const { kind, path, isOpen } = options

  switch (kind) {
    case 'File': {
      return {
        kind,
        path,
      }
    }

    case 'Directory': {
      return {
        kind,
        path,
        children: [],
        isChildrenLoading: false,
        isOpen: isOpen || false,
        page: 1,
        size: 15,
      }
    }
  }
}

export function pathEntryBasename(pathEntry: PathEntry): string {
  return basename(pathEntry.path)
}

export function pathEntryPartialSummation(
  pathEntry: PathEntry,
): Array<PathEntry> {
  if (pathEntry === undefined) {
    return []
  }

  const basenames = pathEntry.path.split('/')

  const prefix: Array<string> = []

  return basenames.map((basename, index) => {
    const path = [...prefix, basename].join('/')

    prefix.push(basename)

    const kind = index === basenames.length - 1 ? pathEntry.kind : 'Directory'

    return createPathEntry({
      kind,
      path,
    })
  })
}
