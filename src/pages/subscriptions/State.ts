import { ExtensionStore } from '../../components/md/extension-store'
import { Author } from '../authors/Author'
import { Activity } from './Activity'

export type State = {
  kind?: string
  list: Array<string>
  authors: Array<Author>
  activities: Array<Activity>
  extensions: ExtensionStore
}
