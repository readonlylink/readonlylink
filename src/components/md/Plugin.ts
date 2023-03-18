import { Nodes } from '@xieyuheng/postmark'
import { Component } from 'vue'

export type Plugin = BlockPlugin | ItemPlugin | ElementPlugin

export type BlockPlugin = {
  '@kind': 'BlockPlugin'
  customKind: string
  component: Component
  propsFromNode: (node: Nodes.CustomBlock<any>) => any
}

export function BlockPlugin(
  customKind: string,
  component: Component,
  propsFromNode: (node: Nodes.CustomBlock<any>) => any,
): BlockPlugin {
  return {
    '@kind': 'BlockPlugin',
    customKind,
    component,
    propsFromNode,
  }
}

export type ItemPlugin = {
  '@kind': 'ItemPlugin'
  customKind: string
  component: Component
  propsFromNode: (node: Nodes.CustomItem<any>) => any
}

export function ItemPlugin(
  customKind: string,
  component: Component,
  propsFromNode: (node: Nodes.CustomItem<any>) => any,
): ItemPlugin {
  return {
    '@kind': 'ItemPlugin',
    customKind,
    component,
    propsFromNode,
  }
}

export type ElementPlugin = {
  '@kind': 'ElementPlugin'
  tag: string
  component: Component
}

export function ElementPlugin(
  tag: string,
  component: Component,
): ElementPlugin {
  return {
    '@kind': 'ElementPlugin',
    tag,
    component,
  }
}
