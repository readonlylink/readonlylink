// NOTE code taken from:
//   https://gist.github.com/valentinkostadinov/5875467

export function hexEncode(s: string): string {
  // utf8 to latin1
  s = unescape(encodeURIComponent(s))
  let h = ''
  for (let i = 0; i < s.length; i++) {
    h += s.charCodeAt(i).toString(16)
  }
  return h
}

export function hexDecode(h: string): string {
  let s = ''
  for (let i = 0; i < h.length; i += 2) {
    s += String.fromCharCode(parseInt(h.substr(i, 2), 16))
  }
  return decodeURIComponent(escape(s))
}
