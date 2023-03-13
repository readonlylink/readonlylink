export class State {
  url: string
  path: string
  frontMatter: string

  constructor(options: { url: string; path: string; frontMatter: string }) {
    this.url = options.url
    this.path = options.path
    this.frontMatter = options.frontMatter
  }
}
