export class State {
  url: string
  text: string

  constructor(options: { url: string; text: string }) {
    this.url = options.url
    this.text = options.text
  }
}
