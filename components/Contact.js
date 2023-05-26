import { Social } from 'components/Social';
import styles from 'Styles/contact.module.css';

export const Contact = () => {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize="30xp" />
      <address>cube@web.mail.address</address>
    </div>
  );
};
