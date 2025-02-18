import styles from './Service.module.scss';

export const Service = () => {
  return (
    <section className={styles.service}>
      <div className={`${styles.serviceDiv} container`}>
        <h2 className={styles.heading}>Выберите нужный пакет</h2>
      </div>
    </section>
  );
};
