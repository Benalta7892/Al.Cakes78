"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./StepObjet.module.css";

const StepObjet = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");

  const handleNext = () => {
    if (selectedOption === "commande") {
      router.push("/contact/stepCommande");
    } else if (selectedOption === "infos") {
      router.push("/contact/stepInfos");
    }
  };

  return (
    <section className={styles["step-objet-section"]}>
      <div className={`${styles["step-objet-container"]} bordered`}>
        <div className={`${styles["step-objet-content"]} bordered`}>
          <h2>Quel est l&apos;objet de votre demande ?</h2>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className={styles["step-objet-select"]}>
            <option value="">-- Sélectionnez une option --</option>
            <option value="commande">Passer une commande</option>
            <option value="infos">Obtenir des renseignements</option>
          </select>

          <button
            onClick={handleNext}
            className="btn btn-primary"
            disabled={!selectedOption}>
            Suivant
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepObjet;
