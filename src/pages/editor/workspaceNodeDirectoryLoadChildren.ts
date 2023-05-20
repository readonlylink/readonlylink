import { arrayFromAsyncIterable } from '../../utils/arrayFromAsyncIterable'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { WorkspaceNode, WorkspaceNodeDirectory } from './WorkspaceNode'
import { workspaceNodeCreate } from './workspaceNodeCreate'

export async function workspaceNodeDirectoryLoadChildren(
  root: WorkspaceNodeDirectory,
  parent: WorkspaceNodeDirectory,
): Promise<Array<WorkspaceNode>> {
  const handles = await arrayFromAsyncIterable(parent.handle.values())
  return await promiseAllFulfilled(
    handles.map((handle) => workspaceNodeCreate(root, parent, handle)),
  )
}
