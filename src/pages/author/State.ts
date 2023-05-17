import { Document } from '@xieyuheng/x-markdown'
import { State as SubscriptionState } from '../subscription/State'
import { AuthorConfig } from './AuthorConfig'

export type State = {
  url: string
  path?: string
  config: AuthorConfig
  text: string
  homepageDocument: Document
  documents: Record<string, Document>
  subscriptionState: SubscriptionState
  isLoadingActivities?: boolean
}
