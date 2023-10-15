import { Document } from '@xieyuheng/x-markdown'
import { Plugin } from './Plugin'

export type State = {
  url?: URL
  document: Document
  plugins: Array<Plugin>
}
