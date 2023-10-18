import React from 'react';

import useKeydown from '../../hooks/useKeydown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastArr, setToastArr] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'It works!',
      variant: 'success',
    },
    {
      id: crypto.randomUUID(),
      message: 'Logged in',
      variant: 'success',
    },
  ]);

  const handleEscape = React.useCallback(() => {
    setToastArr([]);
  }, [])

  useKeydown('Escape', handleEscape)

  function createToast(message, variant) {
    const nextToasts = [
      ...toastArr,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToastArr(nextToasts);
  }

  function removeToast(id) {
    const newArr = toastArr.filter(t => t.id !== id)
    setToastArr(newArr)
  }

  return (
    <ToastContext.Provider
      value={{
        toastArr, 
        removeToast,
        createToast
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;