import { Logo } from 'components/Logo';
import styles from 'styles/footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.flexContainer}>
        <Logo />
        [ソーシャル]
      </div>
    </footer>
  );
}
