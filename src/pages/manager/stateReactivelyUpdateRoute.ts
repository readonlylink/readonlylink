import qs from 'qs'
import { watch } from 'vue'
import { Router } from 'vue-router'
import { State } from './State'

function currentQuery() {
  const url = new URL(window.location.href)
  const query = qs.parse(url.search, { ignoreQueryPrefix: true })
  return query
}

function currentUrlPathname() {
  const url = new URL(window.location.href)
  const pathname = url.pathname
  return pathname
}

export function stateReactivelyUpdateRoute(state: State, router: Router): void {
  watch(
    () => state.currentPathEntry,
    (value) => {
      router.replace({
        path: currentUrlPathname(),
        query: {
          currentPath: value?.path,
          currentPathKind: value?.kind,
          currentPathIsOpen:
            value?.kind === 'Directory' && value?.isOpen ? 'true' : undefined,
        },
      })
    },
    {
      deep: true,
      immediate: true,
    },
  )

  watch(
    () => state.page,
    (value) => {
      router.replace({
        path: currentUrlPathname(),
        query: {
          ...currentQuery(),
          page: value,
        },
      })
    },
    {
      immediate: true,
    },
  )

  watch(
    () => state.currentRowIndex,
    (value) => {
      router.replace({
        path: currentUrlPathname(),
        query: {
          ...currentQuery(),
          currentRowIndex: value,
        },
      })
    },
    {
      immediate: true,
    },
  )

  watch(
    () => state.currentRowIsOpen,
    (value) => {
      router.replace({
        path: currentUrlPathname(),
        query: {
          ...currentQuery(),
          currentRowIsOpen: value ? 'true' : undefined,
        },
      })
    },
    {
      immediate: true,
    },
  )

  watch(
    () => state.currentCellIndex,
    (value) => {
      router.replace({
        path: currentUrlPathname(),
        query: {
          ...currentQuery(),
          currentCellIndex: value,
        },
      })
    },
    {
      immediate: true,
    },
  )

  watch(
    () => state.currentCellColumnName,
    (value) => {
      router.replace({
        path: currentUrlPathname(),
        query: {
          ...currentQuery(),
          currentCellColumnName: value,
        },
      })
    },
    {
      immediate: true,
    },
  )

  watch(
    () => state.currentCellIsOpen,
    (value) => {
      router.replace({
        path: currentUrlPathname(),
        query: {
          ...currentQuery(),
          currentCellIsOpen: value ? 'true' : undefined,
        },
      })
    },
    {
      immediate: true,
    },
  )
}
