import { State } from './State'
import { stateCreateRow } from './stateCreateRow'
import { stateStatusError } from './stateStatus'

export async function stateCreateRowFromTexts(
  state: State,
  texts: Record<string, string>,
): Promise<void> {
  const who = 'stateCreateRowFromTexts'

  try {
    const data: Record<string, any> = {}
    for (const [key, text] of Object.entries(texts)) {
      const json = text.trim() === '' ? null : JSON.parse(text)
      data[key] = json
    }

    await stateCreateRow(state, data)
  } catch (error) {
    stateStatusError(state, {
      who,
      message: error instanceof Error ? error.message : 'Unknown Error',
    })
  }
}
