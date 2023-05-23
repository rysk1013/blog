import { Logo } from 'components/Logo';
import { Nav } from 'components/Nav';
import styles from 'styles/header.module.css';

export const Header = () => {
  return (
    <header>
      <div className={styles.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </header>
  );
}
