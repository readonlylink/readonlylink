import { WorkspaceNode } from './WorkspaceNode'

export function workspaceNodeCompare(
  x: WorkspaceNode,
  y: WorkspaceNode,
): 1 | 0 | -1 {
  if (x.kind === 'WorkspaceNodeDirectory' && y.kind === 'WorkspaceNodeFile') {
    return -1
  }

  if (x.kind === 'WorkspaceNodeFile' && y.kind === 'WorkspaceNodeDirectory') {
    return 1
  }

  if (x.kind === 'WorkspaceNodeFile' && y.kind === 'WorkspaceNodeFile') {
    return x.fileHandle.name > y.fileHandle.name ? 1 : -1
  }

  if (
    x.kind === 'WorkspaceNodeDirectory' &&
    y.kind === 'WorkspaceNodeDirectory'
  ) {
    return x.directoryHandle.name > y.directoryHandle.name ? 1 : -1
  }

  return 0
}
