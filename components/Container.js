import styles from 'styles/container.module.css';

export const Container = (props) => {
  return (
    <div className={props.large ? styles.large : styles.default}>
      {props.children}
    </div>
  );
}
