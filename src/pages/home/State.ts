import { State as SubscriptionState } from '../subscription/State'

export type State = {
  list: Array<string>
  isLoadingActivities: boolean
  subscriptionState: SubscriptionState
}
