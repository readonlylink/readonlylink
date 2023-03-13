import Path from 'path-browserify'

export class Link {
  host?: string
  username: string
  project: string
  version?: string
  path: string

  constructor(opts: {
    host?: string
    username: string
    project: string
    version?: string
    path?: string
  }) {
    this.host = opts.host
    this.username = opts.username
    this.project = opts.project
    this.version = opts.version
    this.path = opts.path || ''
  }

  get name(): string {
    return `${this.username}/${this.project}`
  }

  format(): string {
    let s = ''

    // NOTE It matters that we do not append a "/" when there is no `host`.
    if (this.host) s += `${this.host}/`
    if (this.name) s += `${this.name}`
    if (this.version) s += `@${this.version}`
    if (this.path) s += `/-/${this.path}`

    return s
  }

  private static checkHost(host: string): string {
    if (
      !['github.com', 'github.com', 'gitlab.com', 'gitee.com'].includes(host)
    ) {
      throw new Error(`Unknown host: ${host}`)
    }

    return host
  }

  static parse(str: string): Link {
    const [head, path] = str.split('/-/')
    const parts = head.split('/')

    if (parts.length === 2) {
      const [username, project_and_version] = parts
      const [project, version] = project_and_version.split('@')
      return new Link({ username, project, version, path })
    } else {
      const [host, username, project_and_version] = parts
      const [project, version] = project_and_version.split('@')
      return new Link({
        host: this.checkHost(host),
        username,
        project,
        version,
        path,
      })
    }
  }

  root(): Link {
    const { host, username, project } = this
    return new Link({ host, username, project, path: '' })
  }

  upward(): Link {
    const { host, username, project, path } = this
    const dirname = Path.dirname(path)
    const dir = dirname === '.' ? '' : dirname
    return new Link({ host, username, project, path: dir })
  }

  resolve(path: string): Link {
    const prefix = 'placeholder:/'

    return new Link({
      host: this.host,
      username: this.username,
      project: this.project,
      path: new URL(path, `${prefix}${this.path}`).href.slice(prefix.length),
    })
  }
}
