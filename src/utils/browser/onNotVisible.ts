// https://stackoverflow.com/a/66394121

export function onNotVisible(
  element: HTMLElement,
  callback: (element: HTMLElement) => void,
) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio === 0) {
        callback(element)
      }
    })
  })

  observer.observe(element)
}
