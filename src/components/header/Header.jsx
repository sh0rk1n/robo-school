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
            <a href="#about" className={styles.link}>
              О школе
            </a>
          </li>
          <li className={styles.item}>
            <a href="#coach" className={styles.link}>
              Тренеры
            </a>
          </li>
          <li className={styles.item}>
            <a href="#package" className={styles.link}>
              Стоимость
            </a>
          </li>
        </nav>
        <a className={styles.number} href="7 800 000 11 22">
          +7 800 000 11 22
        </a>

        <div className={styles.mobile}>
          <a className={styles.btn} href="/">
            <svg
              class="mobile__svg"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.1668 12.3797C15.4951 12.2352 14.9637 12.5471 14.4932 12.8194C14.0114 13.1001 13.0951 13.8434 12.57 13.6531C9.88108 12.546 7.35213 10.1925 6.25739 7.49286C6.06444 6.95647 6.80424 6.0344 7.08283 5.54686C7.35316 5.07492 7.65858 4.53852 7.51928 3.86178C7.3934 3.25366 5.76522 1.18188 5.18947 0.615332C4.80977 0.241101 4.42078 0.0352739 4.02147 0.00200893C2.5202 -0.0624419 0.843516 1.94073 0.549452 2.41996C-0.187255 3.44181 -0.183128 4.80152 0.561834 6.45021C2.35717 10.8786 9.14747 17.5618 13.5925 19.4246C14.4128 19.8082 15.1629 20.0005 15.8366 20.0005C16.496 20.0005 17.0831 19.8165 17.5876 19.4516C17.9684 19.2323 20.0536 17.4724 19.9989 15.9307C19.9659 15.5378 19.7606 15.1448 19.3912 14.7644C18.8289 14.1833 16.7704 12.5065 16.1668 12.3797Z"
                fill="white"
              ></path>
            </svg>
          </a>
          <button className={styles.burger}>
            <span class={styles.burger_border}></span>
            <span class={styles.burger_line}></span>
          </button>
        </div>
      </div>
    </header>
  );
};
