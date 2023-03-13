import { Project, ProjectPaginator } from '../../models/project'

export class State {
  project: Project
  text?: string
  paginator?: ProjectPaginator

  constructor(opts: { project: Project; paginator?: ProjectPaginator }) {
    this.project = opts.project
    this.paginator = opts.paginator
    this.text = opts.paginator?.text
  }
}
