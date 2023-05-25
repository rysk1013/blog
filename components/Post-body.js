import styles from 'styles/post-body.module.css';

export const PostBody = (props) => {
  return (
    <div className={styles.stack}>
      {props.children}
    </div>
  );
};
