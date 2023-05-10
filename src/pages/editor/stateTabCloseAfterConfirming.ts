import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { State } from './State'
import { Tab } from './Tab'
import { stateTabClose } from './stateTabClose'

export async function stateTabCloseAfterConfirming(
  state: State,
  tab: Tab,
): Promise<void> {
  const lang = useGlobalLang()

  const message = lang.isZh()
    ? `确认要关闭这个标签吗？\n有未保存的修改哦！\n${tab.file.name}`
    : `Are you sure to close this tab?\nThere are unsaved changes!\n${tab.file.name}`

  if (window.confirm(message)) {
    await stateTabClose(state, tab)
  }
}
