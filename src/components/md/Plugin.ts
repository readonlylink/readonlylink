import { XElement } from '@xieyuheng/x-node'
import { Component } from 'vue'
import { State } from './State'

export type Plugin = ElementPlugin

export type PropsBuilder = (ctx: {
  state: State
  element: XElement
}) => Record<string, any>

export type ElementPlugin = {
  '@kind': 'ElementPlugin'
  tag: string
  component: Component
  propsBuilder: PropsBuilder
}

export function ElementPlugin(
  tag: string,
  component: Component,
  propsBuilder: PropsBuilder,
): ElementPlugin {
  return {
    '@kind': 'ElementPlugin',
    tag,
    component,
    propsBuilder,
  }
}
