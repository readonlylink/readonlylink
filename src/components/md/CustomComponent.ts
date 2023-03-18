import { Nodes } from '@xieyuheng/postmark'
import { Component } from 'vue'

export type CustomComponent =
  | {
      kind: 'CustomBlock'
      customKind: string
      component: Component
      props: (node: Nodes.CustomBlock<any>) => any
    }
  | {
      kind: 'CustomItem'
      customKind: string
      component: Component
      props: (node: Nodes.CustomItem<any>) => any
    }
