import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.info}>
          <a className={styles.name} href="/">
            <h4>ROBO.SCHOOL</h4>
          </a>
          <a className={styles.number} href="/">
            +7 800 000 11 22
          </a>
        </div>
        <p className={styles.descr}>© ROBO.SCHOOL by sh0rk1n</p>
      </div>
    </footer>
  );
};
