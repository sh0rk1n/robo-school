import styles from './Hero.module.scss';
import png from '../../shared/assets/img/hero_girl.png';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.HeroFlex} container`}>
        <div className={styles.left}>
          <h1>robo school</h1>
          <p>
            Курсы повышения квалификации по робототехнике для педагогов
            начальной школы
          </p>
          <button>Записаться на курс</button>
        </div>
        <div className={styles.right}>
          <img src={png} alt="hero girl" />
        </div>
      </div>
    </section>
  );
};
