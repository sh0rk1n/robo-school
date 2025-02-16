import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.HeaderContainer} container`}>
        <a className={styles.name} href="/">
          robo.school
        </a>
        <nav>
          <li>О школе</li>
          <li>Тренеры</li>
          <li>Стоимость</li>
        </nav>
        <a className={styles.number} href="7 800 000 11 22">
          +7 800 000 11 22
        </a>
      </div>
    </header>
  );
};
