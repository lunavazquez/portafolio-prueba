import React from 'react';
import styles from './index.module.sass';

export default function ProgressBar({ progress = 0 }) {
  return (
    <div className={styles.progressbar}>
      <div className={styles.progress} style={{ width: `${progress}%` }} />
    </div>
  );
}
