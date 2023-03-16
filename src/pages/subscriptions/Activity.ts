import { AuthorConfig } from '../authors/AuthorConfig'
import { Nodes } from '@xieyuheng/postmark'

export type Activity = {
  authorURL: string
  author: AuthorConfig
  path: string
  text: string
  document: Nodes.Document
}

// export type ActivityOptions = {
//   authorURL: string
//   author: AuthorConfig
//   path: string
// }

// export async function loadActivity(
//   options: ActivityOptions,
// ): Promise<Activity> {
//   const { authorURL, author, path } = options

//   const response = await fetch(new URL(path, authorURL))
//   const text = await response.text()
//   const extensions = new ExtensionStore()
//   const document = extensions.parser.parseDocument(text)

//   return { authorURL, author, path, text, document }
// }
