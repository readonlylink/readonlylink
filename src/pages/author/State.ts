import { Document } from '@xieyuheng/x-markdown'
import { AuthorConfig } from '../../models/author/AuthorConfig'
import { State as SubscriptionState } from '../subscription/State'

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
