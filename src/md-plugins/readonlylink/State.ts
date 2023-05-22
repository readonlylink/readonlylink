import { Config } from './Config'

export type State = {
  url: string
  config: Config
  isRefreshed?: boolean
}
