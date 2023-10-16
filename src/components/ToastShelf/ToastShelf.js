import React, { Children } from 'react';

import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ handleRemoveItem }) {
  const { toastArr } = React.useContext(ToastContext)
  
  return (
    <ol className={styles.wrapper}>
      {toastArr.map((toast) => {
        return(
          <li className={styles.toastWrapper} key={toast.id} >
            <Toast
              id={toast.id}
              variant={toast.variant}
            >
              {toast.message}
            </Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
