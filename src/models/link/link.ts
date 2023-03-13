import Path from 'path-browserify'

export class Link {
  path: string

  constructor(opts: { path?: string }) {
    this.path = opts.path || ''
  }

  root(): Link {
    return new Link({ path: '' })
  }

  upward(): Link {
    const { path } = this
    const dirname = Path.dirname(path)
    const dir = dirname === '.' ? '' : dirname
    return new Link({ path: dir })
  }

  resolve(path: string): Link {
    const prefix = 'placeholder:/'

    return new Link({
      path: new URL(path, `${prefix}${this.path}`).href.slice(prefix.length),
    })
  }
}
