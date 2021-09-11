import { useCallback, useLayoutEffect, useRef, useState } from 'react'
// eslint-disable-next-line no-unused-vars
type Dispatch<A> = (value: A) => void
// eslint-disable-next-line no-unused-vars
type SetStateAction<S> = S | ((prevState: S) => S)

function useSafeState<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>] {
  const mountedRef: any = useRef(false)
  const [state, setState] = useState(initialState)

  useLayoutEffect((): any => {
    mountedRef.current = true
    return (): void => {
      mountedRef.current = false
    }
  }, [])

  const safeSetState: any = useCallback(
    (updater: any): void => {
      if (mountedRef.current) {
        setState(updater)
      }
    },
    [mountedRef]
  )

  return [state, safeSetState]
}

export default useSafeState
