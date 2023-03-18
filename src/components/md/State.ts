import { Nodes } from '@xieyuheng/postmark'
import { CustomComponent } from './CustomComponent'

export type State = {
  document: Nodes.Document
  customComponents: Array<CustomComponent>
}
