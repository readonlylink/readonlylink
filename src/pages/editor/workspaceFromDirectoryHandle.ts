import { arrayFromAsyncIterable } from '../../utils/arrayFromAsyncIterable'
import { Workspace } from './Workspace'
import { WorkspaceNodeDirectory, WorkspaceNodeFile } from './WorkspaceNode'

export async function workspaceFromDirectoryHandle(
  directoryHandle: FileSystemDirectoryHandle,
): Promise<Workspace> {
  const handles = await arrayFromAsyncIterable(directoryHandle.values())
  const nodes = handles.map((handle) => {
    switch (handle.kind) {
      case 'file': {
        return WorkspaceNodeFile(handle)
      }

      case 'directory': {
        return WorkspaceNodeDirectory(handle)
      }
    }
  })

  return {
    directoryHandle,
    nodes,
  }
}
