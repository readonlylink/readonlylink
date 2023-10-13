import { Document } from '@xieyuheng/x-markdown'
import { plugins } from '../../md-plugins'
import { Plugin } from './Plugin'

export type State = {
  url: URL
  document: Document
  plugins: Array<Plugin>
}

export type StateOptions = {
  url: URL
  document: Document
}

export function stateCreate(options: StateOptions): State {
  const { url, document } = options

  return {
    url,
    document,
    plugins,
  }
}
