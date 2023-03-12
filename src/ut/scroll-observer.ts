export interface ScrollInfo {
  scrollTop: number
  lastScrollTop: number
  scrollTopDelta: number
}

export class ScrollObserver {
  lastScrollTop = 0
  lock = false

  delay: number
  handler: (info: ScrollInfo) => void

  constructor(opts: { delay: number; handler: (info: ScrollInfo) => void }) {
    this.delay = opts.delay
    this.handler = opts.handler
  }

  apply(element: HTMLElement): void {
    if (this.lock) return

    this.lock = true

    this.handler({
      scrollTop: element.scrollTop,
      lastScrollTop: this.lastScrollTop,
      scrollTopDelta: element.scrollTop - this.lastScrollTop,
    })

    this.lastScrollTop = element.scrollTop

    setTimeout(() => {
      this.lock = false
    }, this.delay)
  }
}
