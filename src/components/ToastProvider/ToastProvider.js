import React, { Children } from 'react';

import { createContext } from 'react';

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toastArr, setToastArr] = React.useState([
    // {
    //   id: crypto.randomUUID(),
    //   message: 'It works!',
    //   variant: 'success',
    // },
    // {
    //   id: crypto.randomUUID(),
    //   message: 'Logged in',
    //   variant: 'success',
    // },
  ]);

  function createToast(message, variant) {
    setToastArr(
      [...toastArr, {id: crypto.randomUUID(), message, variant}]
    )
  }

  function removeToast(id) {
    const newArr = toastArr.filter(t => t.id !== id)
    setToastArr(newArr)
  }

  React.useEffect(() => {
    function handleKeydown(event) {
      if(event.code === 'Escape') {
        setToastArr([])
      }
    }

    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [])

  return (
    <ToastContext.Provider
      value={{ toastArr, createToast, removeToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
