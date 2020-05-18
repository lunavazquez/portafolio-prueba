import React from 'react';
import styles from './index.module.sass';

export default function CardProject(props) {
  const { demo, image, repo, name } = props;
  return (
    <div className={styles.projectCard}>
      <a href={demo}>
        <img src={image} alt="img" style={{ height: '160px' }} />
      </a>
      <a href={repo} className={styles.cardText}>
        {name}
      </a>
    </div>
  );
}
