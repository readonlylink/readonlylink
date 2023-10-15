import { Document } from '@xieyuheng/x-markdown'

export type State = {
  url: string
  text: string
  contentType: string
  document: Document
  isLoadedFromCache?: boolean
}
