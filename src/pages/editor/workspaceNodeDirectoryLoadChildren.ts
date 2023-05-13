import { arrayFromAsyncIterable } from '../../utils/arrayFromAsyncIterable'
import { WorkspaceNode, WorkspaceNodeDirectory } from './WorkspaceNode'
import { workspaceNodeCompare } from './workspaceNodeCompare'
import { workspaceNodeCreate } from './workspaceNodeCreate'

export async function workspaceNodeDirectoryLoadChildren(
  root: WorkspaceNodeDirectory,
  parent: WorkspaceNodeDirectory,
): Promise<Array<WorkspaceNode>> {
  const handles = await arrayFromAsyncIterable(parent.handle.values())
  const nodes = await Promise.all(
    handles.map((handle) => workspaceNodeCreate(root, parent, handle)),
  )

  return nodes.sort(workspaceNodeCompare)
}
