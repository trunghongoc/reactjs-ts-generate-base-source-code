import React, { useEffect } from 'react'

function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: () => void
): void {
  useEffect((): any => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (typeof callback === 'function') {
          callback()
        }
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return (): void => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])
}

export default useOutsideClick
