"use client";

import styles from "./FormContact.module.css";
import { CAKES } from "@/data/cakes";
import { useState } from "react";

const FormContact = () => {
  const [showForm, setShowForm] = useState(false);
  const [objetSelected, setObjetSelected] = useState("");
  const [gateaux, setGateaux] = useState([
    { gateau: "", taille: "", quantite: 1, prix: 0 },
  ]);
  const [showSummary, setShowSummary] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const updatePrix = (
    slug: string,
    taille: string,
    quantite: number,
    index: number
  ) => {
    const cake = CAKES.find((cake) => cake.slug === slug);
    if (!cake) return;

    const mold = cake.molds.find((mold) => mold.size === taille);
    if (!mold) return;

    const newPrice = mold.price * quantite;

    setGateaux((prev) =>
      prev.map((g, i) => (i === index ? { ...g, prix: newPrice } : g))
    );
  };

  const handleRemoveCake = (index: number) => {
    setGateaux((prev) => prev.filter((_, i) => i !== index));
  };

  const totalPrix = gateaux.reduce(
    (total, item) => total + (item.prix || 0),
    0
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const objet = (form.elements.namedItem("objet") as HTMLSelectElement).value;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const prenom = (form.elements.namedItem("prenom") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const telephone = (form.elements.namedItem("telephone") as HTMLInputElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    console.log("Données du formulaire :", {
      objet,
      name,
      prenom,
      email,
      telephone,
      message,
    });

    // 👇 Envoyer vers une API ou un mail
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        objet,
        name,
        prenom,
        email,
        telephone,
        message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Votre message a bien été envoyé !");
          setShowForm(!showForm);
        } else {
          alert("Une erreur est survenue.");
        }
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
              <div className={styles["form-section"]}>
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

            {objetSelected === "commande" && (
              <div className={styles["form-section"]}>
                {gateaux.map((item, index) => (
                  <div key={index} className={styles["form-row"]}>
                    {/* Choix du gateaux */}
                    <div
                      className={`${styles["form-col"]} ${styles["gateaux"]}`}>
                      <label htmlFor="" className={styles["form-label"]}>
                        <h3>Choix du gateaux</h3>
                      </label>
                      <select
                        name="gateaux"
                        id="gateaux"
                        className={styles["form-select"]}
                        value={item.gateau}
                        onChange={(e) => {
                          const value = e.target.value;
                          setGateaux((prev) =>
                            prev.map((g, i) =>
                              i === index ? { ...g, gateau: value } : g
                            )
                          );
                          updatePrix(value, item.taille, item.quantite, index);
                        }}>
                        <option value="">-- Selectionner --</option>
                        <option value="dahlia">Dahlia</option>
                        <option value="camélia">Camélia</option>
                        <option value="iris">Iris</option>
                        <option value="pivoine">Pivoine</option>
                        <option value="mimosa">Mimosa</option>
                      </select>
                    </div>

                    {/* Choix de la taille */}
                    <div
                      className={`${styles["form-col"]} ${styles["taille"]}`}>
                      <label htmlFor="" className={styles["form-label"]}>
                        <h3>Taille</h3>
                      </label>
                      <select
                        name="taille"
                        id="taille"
                        className={styles["form-select"]}
                        value={item.taille}
                        onChange={(e) => {
                          const value = e.target.value;
                          setGateaux((prev) =>
                            prev.map((g, i) =>
                              i === index ? { ...g, taille: value } : g
                            )
                          );
                          updatePrix(item.gateau, value, item.quantite, index);
                        }}>
                        <option value="">-- Selectionner --</option>
                        <option value="6-8 Parts">6-8 Parts</option>
                        <option value="8-10 Parts">8-10 Parts</option>
                        <option value="10-12 Parts">10-12 Parts</option>
                      </select>
                    </div>

                    {/* Choix de la quantité */}
                    <div
                      className={`${styles["form-col"]} ${styles["quantite"]}`}>
                      <label htmlFor="" className={styles["form-label"]}>
                        <h3>Quantité</h3>
                      </label>
                      <input
                        type="number"
                        name="quantite"
                        id="quantite"
                        className={styles["form-input"]}
                        min={1}
                        value={item.quantite}
                        onChange={(e) => {
                          const newQuantite = parseInt(e.target.value);
                          setGateaux((prev) =>
                            prev.map((g, i) =>
                              i === index ? { ...g, quantite: newQuantite } : g
                            )
                          );
                          updatePrix(
                            item.gateau,
                            item.taille,
                            newQuantite,
                            index
                          );
                        }}
                      />
                    </div>

                    {/* Prix */}
                    <div className={`${styles["form-col"]} ${styles["prix"]}`}>
                      <label htmlFor="" className={styles["form-label"]}>
                        <h3>Prix</h3>
                      </label>
                      <input
                        type="text"
                        name="prix"
                        id="prix"
                        className={styles["form-input"]}
                        placeholder="0 €"
                        value={item.prix ? `${item.prix.toFixed(2)} €` : ""}
                        disabled
                      />
                    </div>

                    {/* Bouton pour supprimer le gateaux */}
                    <div className={styles["btn-remove-container"]}>
                      <button
                        disabled={gateaux.length === 1}
                        type="button"
                        className={`btn btn-primary ${styles["btn-remove"]}`}
                        onClick={() => handleRemoveCake(index)}>
                        X
                      </button>
                    </div>
                  </div>
                ))}

                <div className={styles["sous-total-container"]}>
                  <label htmlFor="" className={styles["form-label"]}>
                    <h3>Sous-total&nbsp;: </h3>
                  </label>
                  <p className={styles["sous-total"]}>
                    <strong>{totalPrix.toFixed(2)} €</strong>
                  </p>
                </div>

                {/* Bouton pour ajouter un gateaux */}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                    setGateaux((prev) => [
                      ...prev,
                      { gateau: "", taille: "", quantite: 1, prix: 0 },
                    ])
                  }>
                  Ajouter un gâteau
                </button>

                {/* Champs textarea pour une information utiles a transmettre (facultatif) */}
                <div className={styles["form-col"]}>
                  <label htmlFor="message" className={styles["form-label"]}>
                    <h3>Informations utiles</h3>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles["form-input"]}
                    placeholder="Exemple : Allergies, etc."></textarea>
                </div>

                {/* Informations personnelles */}
                <h3>Informations personnelles</h3>
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

                {/* <h3>Adresse de livraison</h3> */}
                <div className={styles["form-row"]}>
                  <div className={`${styles["form-col"]} ${styles["adress"]}`}>
                    <label htmlFor="adress" className={styles["form-label"]}>
                      <h3>Adresse de livraison</h3>
                    </label>
                    <input
                      type="text"
                      id="adress"
                      name="adress"
                      className={styles["form-input"]}
                      placeholder="Ex : 123 Rue de Paris"
                      required
                    />
                  </div>

                  <div className={`${styles["form-col"]} ${styles["code"]}`}>
                    <label htmlFor="postal" className={styles["form-label"]}>
                      <h3>Code postal</h3>
                    </label>
                    <input
                      type="text"
                      id="postal"
                      name="postal"
                      className={styles["form-input"]}
                      placeholder="Ex : 75000"
                      required
                    />
                  </div>

                  <div className={`${styles["form-col"]} ${styles["city"]}`}>
                    <label htmlFor="city" className={styles["form-label"]}>
                      <h3>Ville</h3>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className={styles["form-input"]}
                      placeholder="Ex : Paris"
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

                {/* Choix de la livraison a l'adresse renseigné ou Click and Collect */}
                <h3>Choix de la livraison</h3>
                <div className={styles["form-row"]}>
                  <div className={styles["form-col"]}>
                    <select
                      name="livraison"
                      id="livraison"
                      className={styles["form-select"]}
                      required>
                      <option value="">-- Selectionner --</option>
                      <option value="livraison">
                        Livraison à l&apos;adresse renseignée
                      </option>
                      <option value="click-and-collect">
                        Click and Collect
                      </option>
                    </select>
                  </div>
                </div>

                {/* Si livraison à l'adresse renseignée, affiché le prix en fonction du département renseigné pour determiner la zone et le prix */}

                {/* Afficher le prix total avec ou sans livraison */}
                <div className={styles["sous-total-container"]}>
                  <label htmlFor="" className={styles["form-label"]}>
                    <h3>Total&nbsp;: </h3>
                  </label>
                  <p className={styles["sous-total"]}>
                    <strong>{totalPrix.toFixed(2)} €</strong>
                  </p>
                </div>

                {/* bouton pour afficher le detail de la commande avant de submit */}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowSummary(true)}>
                  Voir le résumé de la commande
                </button>
              </div>
            )}

            {showSummary && (
              <div className={styles["modal-overlay"]}>
                <div className={styles["modal-content"]}>
                  <h3>Détail de la commande</h3>
                  <ul>
                    {gateaux.map((g, i) => (
                      <li key={i}>
                        {g.quantite} × {g.gateau} ({g.taille}) –{" "}
                        {g.prix.toFixed(2)} €
                      </li>
                    ))}
                  </ul>
                  <p>
                    <strong>Total :</strong> {totalPrix.toFixed(2)} €
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setShowSummary(false)}>
                    Fermer
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </section>
  );
};
export default FormContact;
