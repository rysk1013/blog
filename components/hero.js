import styles from 'styles/hero.module.css'

export const Hero = (props) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.subtitle}>{props.subtitle}</p>
      </div>
      {props.imageOn && <figure> [画像] </figure>}
    </div>
  );
}
