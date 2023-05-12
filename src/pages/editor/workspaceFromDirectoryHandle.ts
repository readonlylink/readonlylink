import { arrayFromAsyncIterable } from '../../utils/arrayFromAsyncIterable'
import { Workspace } from './Workspace'
import { workspaceNodeFromHandle } from './workspaceNodeFromHandle'

export async function workspaceFromDirectoryHandle(
  directoryHandle: FileSystemDirectoryHandle,
): Promise<Workspace> {
  const handles = await arrayFromAsyncIterable(directoryHandle.values())
  const nodes = handles.map(workspaceNodeFromHandle)

  return {
    directoryHandle,
    nodes,
  }
}
