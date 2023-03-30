import { Nodes } from '@readonlylink/x-markdown'
import { plugins } from '../../md-plugins'
import { Plugin } from './Plugin'

export type State = {
  url: URL
  document: Nodes.Document
  plugins: Array<Plugin>
}

export type StateOptions = {
  url: URL
  document: Nodes.Document
}

export function createState(options: StateOptions): State {
  const { url, document } = options

  return {
    url,
    document,
    plugins,
  }
}
