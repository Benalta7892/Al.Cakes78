import styles from "./IntroSection.module.css";

type IntroSectionProps = {
  title: string;
  description: React.ReactNode;
};

const IntroSection = ({ title, description }: IntroSectionProps) => {
  return (
    <section className={styles["intro-section"]}>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};
export default IntroSection;
