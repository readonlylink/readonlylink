import { arrayFromAsyncIterable } from '../../utils/arrayFromAsyncIterable'
import { WorkspaceNode } from './WorkspaceNode'
import { workspaceNodeCompare } from './workspaceNodeCompare'
import { workspaceNodeFromHandle } from './workspaceNodeFromHandle'

export async function loadWorkspaceNodes(
  rootDirectoryHandle: FileSystemDirectoryHandle,
  directoryHandle: FileSystemDirectoryHandle,
): Promise<Array<WorkspaceNode>> {
  const handles = await arrayFromAsyncIterable(directoryHandle.values())
  const nodes = handles.map(workspaceNodeFromHandle).sort(workspaceNodeCompare)

  await Promise.all(
    nodes.map(async (node) => {
      const parts = await rootDirectoryHandle.resolve(node.handle)
      if (parts) {
        node.relativePath = parts.join('/')
      }
    }),
  )

  return nodes
}
