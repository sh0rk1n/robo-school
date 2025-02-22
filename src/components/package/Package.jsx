import styles from './Package.module.scss';

const packages = [
  {
    title: 'PRO',
    price: '20.000 ₽',
    description: 'УМК по робототехнике и программированию',
  },
  { title: 'ROBO', price: '15.000 ₽', description: 'УМК по робототехнике' },
  { title: 'PROG', price: '10.000 ₽', description: 'УМК по программированию' },
];

export const Package = () => {
  return (
    <section className={styles.service}>
      <div className={`${styles.serviceDiv} container`}>
        <h2 className={styles.heading}>Выберите нужный пакет</h2>
        <ul className={`${styles.list} grid`}>
          {packages.map((pkg, index) => (
            <li key={index} className={styles.item}>
              <article className={styles.card}>
                <div className={styles.content}>
                  <h3 className={styles.title}>– {pkg.title} –</h3>
                  <div className={styles.text}>
                    <span className={styles.price}>{pkg.price}</span>
                    <p className={styles.descr}>{pkg.description}</p>
                  </div>
                  <button className={styles.btn}>Оставить заявку</button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
