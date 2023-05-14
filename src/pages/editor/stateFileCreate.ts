import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { formatDate } from '../../utils/formatDate'
import { State } from './State'
import { tabFromFileHandle } from './tabFromFileHandle'

export async function stateFileCreate(state: State): Promise<void> {
  const now = Date.now()
  const lang = useGlobalLang()

  const fileHandle = await window.showSaveFilePicker({
    suggestedName: `${formatDate(now)}-${now}.md`,
    types: [
      {
        description: lang.isZh() ? '创建文件' : 'Create File',
        accept: {
          'text/*': ['.md', '.txt'],
        },
      },
    ],
  })

  const tab = await tabFromFileHandle(fileHandle)
  state.tabs.push(tab)
  state.currentTab = tab
  state.recentlyOpened.fileHandles[fileHandle.name] = fileHandle
}
