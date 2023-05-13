import { WorkspaceNodeFile } from './WorkspaceNode'

export function workspaceNodeFileRemoveIsSupported(
  node: WorkspaceNodeFile,
): boolean {
  return 'remove' in node.handle && typeof node.handle.remove === 'function'
}
