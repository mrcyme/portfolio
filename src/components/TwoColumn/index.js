import React from 'react';
import styles from './styles.module.css';

const TwoColumn = ({ children }) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <div className={styles.twoColumnContainer}>
      <div className={styles.column}>{left}</div>
      <div className={styles.column}>{right}</div>
    </div>
  );
};

export default TwoColumn; 