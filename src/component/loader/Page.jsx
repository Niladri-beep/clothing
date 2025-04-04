import React from 'react';
import styles from '../Loder.module.css';
const Loader = () => {
  return (
    <div className={styles.mainLoader}>
    <div className={styles.loaderContainer}>
      <div className={`${styles.ring} ${styles.ring1}`}></div>
      <div className={`${styles.ring} ${styles.ring2}`}></div>
      <div className={`${styles.ring} ${styles.ring3}`}></div>
      <span className={styles.text}>Loading...</span>
    </div>
    </div>
  );
};

export default Loader;
