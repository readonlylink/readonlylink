import { Document } from '@readonlylink/x-markdown'
import { ManualConfig } from './ManualConfig'

export type State = {
  url: string
  path?: string
  config: ManualConfig
  texts: Record<string, string>
  documents: Record<string, Document>
}
