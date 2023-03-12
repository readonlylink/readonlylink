import Postmark, {
  BlockPlugin,
  ItemPlugin,
  Nodes,
  Parser,
} from "@xieyuheng/postmark"
import { Component } from "vue"

export type CustomComponent =
  | {
      kind: "CustomBlock"
      customKind: string
      component: Component
      props: (node: Nodes.CustomBlock<any>) => any
    }
  | {
      kind: "CustomItem"
      customKind: string
      component: Component
      props: (node: Nodes.CustomItem<any>) => any
    }

export type Extension<T> =
  | (BlockPlugin<T> & {
      component: Component
      props: (node: Nodes.CustomBlock<T>) => any
    })
  | (ItemPlugin<T> & {
      component: Component
      props: (node: Nodes.CustomItem<T>) => any
    })

export class ExtensionStore {
  extensions: Array<Extension<any>> = []

  get parser(): Parser {
    const parser = Postmark.createParser()
    for (const extension of this.extensions) {
      parser.use(extension)
    }

    return parser
  }

  get components(): Array<CustomComponent> {
    return this.extensions
  }

  register<T>(extension: Extension<T>): void {
    this.extensions.push(extension)
  }
}
