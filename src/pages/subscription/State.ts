import { ExtensionStore } from '../../components/md/extension-store'
import { Author } from '../author/Author'
import { Activity } from './Activity'

export type State = {
  kind?: string
  authors: Array<Author>
  activities: Array<Activity>
  extensions: ExtensionStore
}
