import qs from 'qs'
import { watch } from 'vue'
import { Router } from 'vue-router'
import { State } from './State'

function currentQuery() {
  const url = new URL(window.location.href)
  const query = qs.parse(url.search, { ignoreQueryPrefix: true })
  return query
}

export function stateReactivelyUpdateRoute(state: State, router: Router): void {
  watch(
    () => state.path,
    (value) => {
      if (value === undefined) {
        router.replace({
          path: `/authors/${state.url}`,
          query: {
            ...(currentQuery() as any),
          },
        })
      } else {
        router.replace({
          path: `/authors/${state.url}/-/${value}`,
          query: {
            ...(currentQuery() as any),
          },
        })
      }
    },
    {
      immediate: true,
    },
  )
}
