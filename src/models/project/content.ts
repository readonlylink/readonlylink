import { Link } from '../../models/link'

export interface Content {
  link: Link
  attributes: Record<string, string>
}
