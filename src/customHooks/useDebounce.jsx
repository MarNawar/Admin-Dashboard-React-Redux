import React from 'react'

  function useDebounce(callback, delay) {
      const timerRef = React.useRef(null);
      return React.useCallback((...args) => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          callback(...args);
        }, delay);
      }, [callback, delay]);
  }
  


export default useDebounce