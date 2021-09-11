import { useEffect, useState } from 'react'
import { isBrowser } from 'helper/window'

function on(obj: Window, ...args: [string, () => void]): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...args)
  }
}

function off(obj: Window, ...args: [string, () => void]): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...args)
  }
}

export interface IUserGetWindowSize {
  width: number
  height: number
}
export const useWindowSize: any = (
  initialWidth: number = 0,
  initialHeight: number = 0
): IUserGetWindowSize => {
  const [state, setState] = useState<IUserGetWindowSize>({
    width: isBrowser ? window.outerWidth : initialWidth,
    height: isBrowser ? window.outerHeight : initialHeight
  })

  useEffect((): any => {
    if (isBrowser) {
      const handler: any = (): void => {
        setState({
          width: window.outerWidth,
          height: window.outerHeight
        })
      }

      on(window, 'resize', handler)

      return (): void => {
        off(window, 'resize', handler)
      }
    }
  }, [])

  return state
}
