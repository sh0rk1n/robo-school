import styles from './Hero.module.scss';
import png from '../../shared/assets/img/hero_girl.png';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container grid`}>
        <div className={styles.left}>
          <h1 className={styles.title}>robo school</h1>
          <p className={styles.descr}>
            Курсы повышения квалификации по робототехнике для педагогов
            начальной школы
          </p>
          <button className={styles.btn}>Записаться на курс</button>
        </div>
        <div className={styles.right}>
          <img src={png} alt="hero girl" />
        </div>
      </div>
    </section>
  );
};
