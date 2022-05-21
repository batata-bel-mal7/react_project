function nextChar(c: string) {
  if (c.length !== 1) {
    throw Error('illegal argument')
  }
  return String.fromCharCode(c.charCodeAt(0) + 1)
}

export { nextChar }
