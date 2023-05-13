import { State } from './State'
import { WorkspaceNode } from './WorkspaceNode'
import { workspaceNodeCompare } from './workspaceNodeCompare'

export function stateWorkspaceFilterNodes(
  state: State,
  nodes: Array<WorkspaceNode>,
): Array<WorkspaceNode> {
  return nodes
    .filter((node) => state.showDotFiles || !node.handle.name.startsWith('.'))
    .sort(workspaceNodeCompare)
}
