import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        Design & Built  by Aneeka <br/>
        Made with &hearts;
      </p>
    </section>
  );
}

export default Footer;