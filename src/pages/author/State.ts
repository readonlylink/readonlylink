import { Document } from '@xieyuheng/x-markdown'
import { Activity } from '../../models/activity/Activity'
import { Author } from '../../models/author/Author'
import { AuthorConfig } from '../../models/author/AuthorConfig'

export type State = {
  url: string
  path?: string
  config: AuthorConfig
  documents: Record<string, Document>
  author: Author
  activities: Array<Activity>
  isLoadedFromCache?: boolean
}
