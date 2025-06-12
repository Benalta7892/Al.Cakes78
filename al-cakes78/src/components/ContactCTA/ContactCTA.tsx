import Link from "next/link";
import styles from "./ContactCTA.module.css";

const ContactCTA = () => {
  return (
    <section className={`${styles["contact-cta-section"]} bordered`}>
      <div className={`${styles["contact-cta-content"]} bordered`}>
        <h2 className={styles["contact-cta-title"]}>
          Une envie, une commande, une question ?
        </h2>
        <Link href="/contact" className="btn btn-primary">
          Contact
        </Link>
      </div>
    </section>
  );
};
export default ContactCTA;
