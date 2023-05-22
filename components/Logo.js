import Link from 'next/link';
import styles from '../styles/logo.module.css';

export const Logo = (props) => {
  return (
    <Link href="/" legacyBehavior>
      <a className={props.boxOn ? styles.box : styles.basic}>CUBE</a>
    </Link>
  );
}
