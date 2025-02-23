import styles from './About.module.scss';

export const About = () => {
  return (
    <section className={styles.about} id = "about">
      <div className={`${styles.AboutDiv} grid container`}>
        <h2 className={styles.heading}>
          <span>Robo School&nbsp;</span>– учреждение для формирования кадрового
          педагогического резерва в сфере робототехники и программирования
        </h2>
        <dl className={`${styles.statsList} grid`}>
          <div>
            <dt className={styles.title}>10</dt>
            <dd className={styles.descr}>
              УМК по различным направлениям по робототехнике
            </dd>
          </div>

          <div>
            <dt className={styles.title}>20</dt>
            <dd className={styles.descr}>
              Школ, в которых запущена робототехника
            </dd>
          </div>

          <div>
            <dt className={styles.title}>100</dt>
            <dd className={styles.descr}>
              Педагогов прошедших курсы повышения квалификации
            </dd>
          </div>

          <div>
            <dt className={styles.title}>10 000</dt>
            <dd className={styles.descr}>
              Обученных детей на базе собственных центров
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
