import styles from "./FormStart.module.css";
import Link from "next/link";

const FormStart = () => {
  return (
    <section className={styles["form-start-section"]}>
      <div className={`${styles["form-start-container"]} bordered`}>
        <div className={`${styles["form-start-content"]} bordered`}>
          <h2>Formulaire de contact</h2>
          <Link href="/contact/stepObjet" className="btn btn-primary">
            Commencer
          </Link>
        </div>
      </div>
    </section>
  );
};
export default FormStart;
