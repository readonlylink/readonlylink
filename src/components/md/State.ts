import { Nodes } from '@xieyuheng/postmark'
import { CustomComponent } from './ExtensionStore'

export type State = {
  document: Nodes.Document
  customComponents: Array<CustomComponent>
}
