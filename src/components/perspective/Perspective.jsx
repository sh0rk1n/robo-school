import info from '../../shared/assets/img/button_info.svg';
import styles from './Perspective.module.scss';

export const Perspective = () => {
  return (
    <section className={styles.perspective}>
      <div className={`${styles.PersDiv} container`}>
        <h2 className={styles.heading}>Что вы получите после курса</h2>
        <dl className={`${styles.persList} grid`}>
          <div>
            <dt className={styles.title}>Удостоверение</dt>
            <dd className={styles.descr}>
              Дающее право преподавать робототехнику для детей 6-12 лет в
              образовательных учреждениях
            </dd>
          </div>

          <div>
            <dt className={styles.title}>Знания</dt>
            <dd className={styles.descr}>
              По основам разработки учебно-методических комплексов по
              робототехнике и программированию
            </dd>
          </div>

          <div>
            <dt className={styles.title}>
              Практику
              <span className={styles.tooltip}>
                <button>
                  <img src={info} className={styles.info} alt="info button" />
                </button>
                <span role="tooltip">При наличии свободных мест</span>
              </span>
            </dt>
            <dd className={styles.descr}>
              Возможность пройти практику по преподаванию робототехники на базе
              R:ED LAB (в оффлайн или онлайн формате)
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
