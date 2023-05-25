import styles from 'styles/two-column.module.css';

export const TwoColumn = (props) => {
  return (
    <div className={styles.flexContainer}>
      {props.children}
    </div>
  );
}

export const TwoColumnMain = (props) => {
  return (
    <div className={styles.main}>
      {props.children}
    </div>
  );
}

export const TwoColumnSidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      {props.children}
    </div>
  );
}
