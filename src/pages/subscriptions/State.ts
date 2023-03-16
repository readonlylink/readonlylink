export type State = {
  list: Array<string>
}

export type StateOptions = {}

export async function loadState(options: {}): Promise<State> {
  const list = await loadList()

  return {
    list,
  }
}

async function loadList(): Promise<Array<string>> {
  const listText = window.localStorage.getItem(`SubscriptionList:list`)
  if (!listText) {
    return []
  }

  return listText.split('\n')
}
