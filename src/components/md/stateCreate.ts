import { Document } from '@xieyuheng/x-markdown'
import { plugins } from '../../md-plugins'
import { State } from './State'

export type StateOptions = {
  url?: URL
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
