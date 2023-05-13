import { arrayFromAsyncIterable } from '../../utils/arrayFromAsyncIterable'
import { WorkspaceNode, WorkspaceNodeDirectory } from './WorkspaceNode'
import { workspaceNodeCompare } from './workspaceNodeCompare'
import { workspaceNodeFromHandle } from './workspaceNodeFromHandle'

export async function loadWorkspaceNodes(
  root: WorkspaceNodeDirectory,
  parent: WorkspaceNodeDirectory,
): Promise<Array<WorkspaceNode>> {
  const handles = await arrayFromAsyncIterable(parent.handle.values())
  const nodes = handles.map(workspaceNodeFromHandle).sort(workspaceNodeCompare)

  await Promise.all(
    nodes.map(async (node) => {
      node.parent = parent

      const parts = await root.handle.resolve(node.handle)
      if (parts) {
        node.relativePath = parts.join('/')
      }
    }),
  )

  return nodes
}
