import { Component } from 'vue'

export type Plugin = ElementPlugin

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
