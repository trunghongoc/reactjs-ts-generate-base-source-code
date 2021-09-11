import { useEffect, useRef } from 'react'

export const useDidMountEffect: any = (func: () => void, deps: any[]): void => {
  const didMount: any = useRef(false)

  useEffect((): void => {
    if (didMount.current) {
      return func()
    } else {
      didMount.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
