"use client";

import styles from "./FormContact.module.css";
import { useState } from "react";

const FormContact = () => {
  const [showForm, setShowForm] = useState(false);
  const [objetSelected, setObjetSelected] = useState("");

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const objet = objetSelected;
    const name = (form.querySelector("#name") as HTMLInputElement).value;
    const prenom = (form.querySelector("#prenom") as HTMLInputElement).value;
    const email = (form.querySelector("#email") as HTMLInputElement).value;
    const telephone = (form.querySelector("#telephone") as HTMLInputElement)
      .value;
    const message = (form.querySelector("#message") as HTMLTextAreaElement)
      .value;

    console.log({
      objet,
      name,
      prenom,
      email,
      telephone,
      message,
    });
  };

  return (
    <section className={`${styles["form-contact-section"]} bordered`}>
      <div className={`${styles["form-contact-container"]} bordered`}>
        <h2>Formulaire de contact</h2>

        {!showForm ? (
          <button className="btn btn-primary" onClick={handleClick}>
            Commencer
          </button>
        ) : (
          <form className={styles["form-contact"]} onSubmit={handleSubmit}>
            <label htmlFor="objet">
              <h3>Quel est l&apos;objet de votre demande ?</h3>
            </label>
            <select
              name="objet"
              id="objet"
              value={objetSelected}
              onChange={(e) => setObjetSelected(e.target.value)}
              className={styles["form-select"]}>
              <option value="">-- Selectionner --</option>
              <option value="commande">Je veux passer une commande</option>
              <option value="renseignement">Je veux un renseignement</option>
            </select>

            {objetSelected === "renseignement" && (
              <div className={styles["form-renseignement"]}>
                <div className={styles["form-row"]}>
                  <div className={styles["form-col"]}>
                    <label htmlFor="name" className={styles["form-label"]}>
                      <h3>Nom</h3>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={styles["form-input"]}
                      required
                    />
                  </div>

                  <div className={styles["form-col"]}>
                    <label htmlFor="prenom" className={styles["form-label"]}>
                      <h3>Prénom</h3>
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      className={styles["form-input"]}
                      required
                    />
                  </div>
                </div>

                <div className={styles["form-row"]}>
                  <div className={styles["form-col"]}>
                    <label htmlFor="email" className={styles["form-label"]}>
                      <h3>Email</h3>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={styles["form-input"]}
                      required
                    />
                  </div>

                  <div className={styles["form-col"]}>
                    <label htmlFor="telephone" className={styles["form-label"]}>
                      <h3>Télephone</h3>
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      className={styles["form-input"]}
                      required
                    />
                  </div>
                </div>

                <div className={styles["form-col"]}>
                  <label htmlFor="message" className={styles["form-label"]}>
                    <h3>votre message</h3>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles["form-input"]}
                    required></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </div>
            )}
          </form>
        )}
      </div>
    </section>
  );
};
export default FormContact;
