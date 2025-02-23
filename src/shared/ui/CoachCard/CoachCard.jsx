import styles from './CoachCard.module.scss';

export const CoachCard = ({ img, name, descr, onClick }) => (
  <div>
    <img src={img} className={styles.Img} alt={`coach ${name.toLowerCase()}`} />
    <div className={styles.card}>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.descr}>{descr}</p>
      <button type="button" onClick={onClick} className={styles.details}>
        Подробнее
      </button>
    </div>
  </div>
);
