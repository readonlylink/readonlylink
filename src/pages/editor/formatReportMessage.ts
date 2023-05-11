import { JsonObject } from '../../utils/Json'
import { formatDateTime } from '../../utils/formatDate'

type Options = {
  who: string
  message?: string
  data?: JsonObject
}

export function formatReportMessage(options: Options): string {
  const { who, message, data } = options

  const now = formatDateTime(Date.now())

  let result = ''
  result += `[${who}] `
  result += `<${now}> `
  if (message) result += `${message} `
  if (data) result += `${JSON.stringify(data)}`
  return result
}
