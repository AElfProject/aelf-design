import { useEffect } from 'react'

function isNodeOrWeb() {
  const freeGlobal =
    (typeof global === 'undefined' ? 'undefined' : typeof global) == 'object' &&
    global &&
    global.Object === Object &&
    global
  const freeSelf =
    typeof self == 'object' && self && self.Object === Object && self
  return freeGlobal || freeSelf
}

function useDatePolyfill() {
  useEffect(() => {
    if (isNodeOrWeb()) {
      return
    }
    global.Date = Date
  }, [])
}

export default useDatePolyfill
