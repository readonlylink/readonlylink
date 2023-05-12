import { arrayFromAsyncIterable } from '../../utils/arrayFromAsyncIterable'
import { Workspace } from './Workspace'
import { workspaceNodeCompare } from './workspaceNodeCompare'
import { workspaceNodeFromHandle } from './workspaceNodeFromHandle'

export async function loadWorkspace(
  directoryHandle: FileSystemDirectoryHandle,
): Promise<Workspace> {
  const handles = await arrayFromAsyncIterable(directoryHandle.values())
  const nodes = handles.map(workspaceNodeFromHandle).sort(workspaceNodeCompare)

  return {
    directoryHandle,
    nodes,
  }
}
