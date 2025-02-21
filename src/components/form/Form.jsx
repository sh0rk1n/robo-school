import styles from './Form.module.scss';

export const Form = () => {
  return (
    <section className={styles.form}>
      <div className={`container ${styles.formContainer} grid`}>
        <div className={styles.text}>
          <h3 className={styles.title}>Запишитесь на курс со скидкой 10%</h3>
          <p className={styles.descr}>
            Акция действительна до 10 марта 2025 года
          </p>
        </div>
        <form
          className={`${styles.forms} flex`}
          action="https://jsonplaceholder.typicode.com/posts"
          method="POST"
          enctype="multipart/form-data"
          noValidate
        >
          <label className={`${styles.label} ${styles.formsLabelName}`}>
            <input
              name="name"
              type="text"
              className={styles.input}
              placeholder="Имя"
              data-validate-field="name"
            />
          </label>
          <label className={styles.label} id="tel">
            <input
              name="tel"
              type="tel"
              className={styles.input}
              placeholder="Телефон"
              data-validate-field="tel"
              inputMode="text"
            />
          </label>
          <label className={styles.label}>
            <input
              name="email"
              type="email"
              className={styles.input}
              placeholder="E-mail"
              data-validate-field="email"
            />
          </label>
          <button type="submit" className={`${styles.btn}`}>
            Оформить заявку
          </button>
        </form>
      </div>
    </section>
  );
};
