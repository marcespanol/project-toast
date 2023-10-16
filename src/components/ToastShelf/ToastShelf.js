import React, { Children } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastArr, handleRemoveItem }) {

  return (
    <ol className={styles.wrapper}>
      {toastArr.map((toast) => {
        return(
          <li className={styles.toastWrapper} key={toast.id} >
            <Toast
              id={toast.id}
              variant={toast.variant}
              handleRemoveItem={handleRemoveItem}
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
