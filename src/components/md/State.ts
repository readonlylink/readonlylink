import { Nodes } from '@xieyuheng/postmark'
import { plugins } from '../../md-plugins'
import { Plugin } from './Plugin'

export type State = {
  document: Nodes.Document
  plugins: Array<Plugin>
}

export function createState(document: Nodes.Document): State {
  return {
    document,
    plugins,
  }
}
