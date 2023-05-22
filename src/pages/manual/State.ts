import { Document } from '@xieyuheng/x-markdown'
import { ManualConfig } from '../../models/manual/ManualConfig'

export type State = {
  url: string
  path?: string
  config: ManualConfig
  texts: Record<string, string>
  documents: Record<string, Document>
  isLoadedFromCache?: boolean
}
