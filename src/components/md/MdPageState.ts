import { Nodes } from '@xieyuheng/postmark'
import { CustomComponent } from './ExtensionStore'

export class MdPageState {
  document: Nodes.Document
  customComponents: Array<CustomComponent>

  constructor(opts: {
    document: Nodes.Document
    customComponents: Array<CustomComponent>
  }) {
    this.document = opts.document
    this.customComponents = opts.customComponents
  }
}
