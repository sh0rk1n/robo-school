import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.HeaderContainer} container`}>
        <a className={styles.name} href="/">
          robo.school
        </a>
        <nav>
          <li className={styles.item}>
            <a href="/" className={styles.link}>
              О школе
            </a>
          </li>
          <li className={styles.item}>
            <a href="/" className={styles.link}>
              Тренеры
            </a>
          </li>
          <li className={styles.item}>
            <a href="/" className={styles.link}>
              Стоимость
            </a>
          </li>
        </nav>
        <a className={styles.number} href="7 800 000 11 22">
          +7 800 000 11 22
        </a>
      </div>
    </header>
  );
};
