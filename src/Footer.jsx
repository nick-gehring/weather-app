import styles from './footer.module.css';

function Footer() {
  return (
    <footer>
      <p className={styles.footer}>
        Created by <a href="https://nickgehring.dev">Nick Gehring</a>
      </p>
    </footer>
  );
}

export default Footer;
