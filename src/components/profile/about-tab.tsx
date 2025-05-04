import styles from "./profile.module.css";
const AboutTab = () => {
  return (
    <section className={styles.tab_sections}>
      <div className={styles.header}>
        <p className={styles.text_content}>
          Name: <span>John Doe</span>
        </p>
        <p className={styles.text_content}>
          Date Joined: <span>01/01/2023</span>
        </p>
        <p className={styles.text_content}>
          Date of Birth: <span>01/01/2023</span>
        </p>
        <div>
          <p className={styles.text_content}>Bio:</p>
          <p className={styles.text_content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            quasi iusto beatae nesciunt soluta doloremque! Reiciendis voluptatem
            mollitia praesentium? Quaerat!
          </p>
          <p className={styles.text_content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            quasi iusto beatae nesciunt soluta doloremque! Reiciendis voluptatem
            mollitia praesentium? Quaerat!
          </p>
          <p className={styles.text_content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            quasi iusto beatae nesciunt soluta doloremque! Reiciendis voluptatem
            mollitia praesentium? Quaerat!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutTab;
