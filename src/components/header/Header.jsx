import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p className={styles.name}>robo.school</p>
        <nav>
          <li>О школе</li>
          <li>Тренеры</li>
          <li>Стоимость</li>
        </nav>
        <p className={styles.number}>+7 800 000 11 22</p>
      </div>
    </header>
  );
};
