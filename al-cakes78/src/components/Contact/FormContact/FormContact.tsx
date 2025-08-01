"use client";

import styles from "./FormContact.module.css";
import { CAKES } from "@/data/cakes";
import { useState, useRef, useEffect } from "react";
import { getDeliveryZone } from "@/utils/livraison";
import Image from "next/image";
import { useIsMobile } from "@/utils/hooks";
import toast from "react-hot-toast";

const FormContact = () => {
  const [showForm, setShowForm] = useState(false);
  const [objetSelected, setObjetSelected] = useState("");
  const [gateaux, setGateaux] = useState([
    { gateau: "", taille: "", quantite: 1, prix: 0 },
  ]);

  const [livraisonMode, setLivraisonMode] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const totalPrice = gateaux.reduce(
    (total, item) => total + (item.prix || 0),
    0
  );
  const {
    zone: zoneLivraison,
    price: fraisLivraison,
    description: zoneDescription,
  } = codePostal
    ? getDeliveryZone(codePostal, totalPrice)
    : { zone: "", price: 0, description: "" };

  const totalFinal =
    livraisonMode === "livraison" ? totalPrice + fraisLivraison : totalPrice;

  const [showSummary, setShowSummary] = useState(false);
  const [formValues, setFormValues] = useState({
    objet: "",
    name: "",
    prenom: "",
    email: "",
    telephone: "",
    adress: "",
    codePostal: "",
    city: "",
    message: "",
    date: "",
    paiement: "",
  });

  const isMobile = useIsMobile();
  const formRef = useRef<HTMLFormElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showSummary && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showSummary]);

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

  const simulateSubmit = true;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (simulateSubmit) {
      toast.success("Formulaire soumis avec succès (simulation) !");
      setShowForm(false);
      return;
    }

    const form = e.target as HTMLFormElement;
    const formType = (form.elements.namedItem("formType") as HTMLInputElement)
      ?.value;
    const prenom = (form.elements.namedItem("prenom") as HTMLInputElement)
      .value;

    if (formType === "commande") {
      const data = {
        ...formValues,
        objet: "commande",
        gateaux,
        date: formValues.date,
        livraisonMode,
        totalPrix,
        fraisLivraison,
        totalFinal,
      };

      console.log("Commande à envoyer :", data);

      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success(
              <span>
                Commande envoyée ! Merci <strong>{prenom}</strong>, une réponse
                sera apportée rapidement.
              </span>
            );
            setShowForm(false);
          } else {
            toast.error("Une erreur est survenue lors de l'envoi.");
          }
        });
    } else if (formType === "renseignement") {
      const data = {
        objet: "renseignement",
        name: (form.elements.namedItem("name") as HTMLInputElement).value,
        prenom: (form.elements.namedItem("prenom") as HTMLInputElement).value,
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
        telephone: (form.elements.namedItem("telephone") as HTMLInputElement)
          .value,
        message: (form.elements.namedItem("message") as HTMLTextAreaElement)
          .value,
      };

      console.log("Renseignement à envoyer :", data);

      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success(
              <span>
                Message reçu ! Merci <strong>{prenom}</strong>, une réponse sera
                apportée rapidement.
              </span>
            );
            setShowForm(false);
          } else {
            toast.error("Une erreur est survenue lors de l'envoi.");
          }
        });
    }
  };

  return (
    <section
      className={`${styles["form-contact-section"]} bordered`}
      data-aos="fade-up">
      <div className={`${styles["form-contact-container"]} bordered`}>
        <h2>Formulaire de contact</h2>
        <div className={styles["disclaimer-container"]}>
          <span
            role="img"
            aria-label="warning"
            className={styles["warning-icon"]}>
            ⚠️
          </span>
          <p className={styles["disclaimer"]}>
            Ce site est une démonstration technique réalisée dans le cadre d’un{" "}
            <strong>projet expérimental</strong> de développement web. Toutes
            les fonctionnalités sont opérationnelles y compris le formulaire
            dont l&apos;envoi est volontairement désactivé.{" "}
            <strong>
              Aucune commande n’est enregistrée ni traitée, aucune information
              personnelle n’est conservée et aucun paiement n’est requis
            </strong>
            .
          </p>
          <span
            role="img"
            aria-label="warning"
            className={styles["warning-icon"]}>
            ⚠️
          </span>
        </div>
        {!showForm ? (
          <button className="btn btn-primary" onClick={handleClick}>
            Commencer
          </button>
        ) : (
          <form
            ref={formRef}
            className={styles["form-contact"]}
            onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="formType"
              value={
                objetSelected === "commande" ? "commande" : "renseignement"
              }
            />
            <label htmlFor="objet">
              <h3>Quel est l&apos;objet de votre demande ?</h3>
            </label>
            <select
              name="objet"
              id="objet"
              value={objetSelected}
              onChange={(e) => setObjetSelected(e.target.value)}
              className={styles["form-select"]}
              required>
              <option value="">-- Selectionner --</option>
              <option value="commande">Je veux passer une commande</option>
              <option value="renseignement">Je veux un renseignement</option>
            </select>

            {objetSelected === "renseignement" && (
              <div className={styles["form-section"]}>
                <br />
                <h3>Formulaire de renseignement</h3>
                <p>
                  Merci de remplir ce formulaire pour toute demande de
                  renseignement.
                </p>

                {/* Informations personnelles */}
                {/* <h3>Informations personnelles</h3> */}
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
                    className={`${styles["form-input"]} ${styles["message"]}`}
                    required></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </div>
            )}

            {objetSelected === "commande" && (
              <div className={styles["form-section"]}>
                <br />
                <h3>Formulaire de commande</h3>
                <p>
                  Merci de remplir ce formulaire pour toute demande de commande.
                </p>

                {gateaux.map((item, index) => {
                  const alwaysShowLabels = isMobile;

                  return (
                    <div
                      key={index}
                      className={`${styles["form-row"]} ${styles["gateaux-row"]}`}>
                      {/* Choix du gateaux */}
                      <div
                        className={`${styles["form-col"]} ${styles["gateaux"]}`}>
                        {(alwaysShowLabels || index === 0) && (
                          <label htmlFor="" className={styles["form-label"]}>
                            <h3>Gateaux</h3>
                          </label>
                        )}
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
                            updatePrix(
                              value,
                              item.taille,
                              item.quantite,
                              index
                            );
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
                        {(alwaysShowLabels || index === 0) && (
                          <label htmlFor="" className={styles["form-label"]}>
                            <h3>Taille</h3>
                          </label>
                        )}
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
                            updatePrix(
                              item.gateau,
                              value,
                              item.quantite,
                              index
                            );
                          }}>
                          <option value="">-- Selectionner --</option>
                          <option value="6-8p">6-8 Parts</option>
                          <option value="8-10p">8-10 Parts</option>
                          <option value="10-12p">10-12 Parts</option>
                        </select>
                      </div>

                      {/* Choix de la quantité */}
                      <div
                        className={`${styles["form-col"]} ${styles["quantite"]}`}>
                        {(alwaysShowLabels || index === 0) && (
                          <label htmlFor="" className={styles["form-label"]}>
                            <h3>Quantité</h3>
                          </label>
                        )}
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
                                i === index
                                  ? { ...g, quantite: newQuantite }
                                  : g
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
                      <div
                        className={`${styles["form-col"]} ${styles["prix"]}`}>
                        {(alwaysShowLabels || index === 0) && (
                          <label htmlFor="" className={styles["form-label"]}>
                            <h3>Prix</h3>
                          </label>
                        )}
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
                  );
                })}

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

                <div className={styles["sous-total-container"]}>
                  <label htmlFor="" className={styles["form-label"]}>
                    <h3>Sous-total&nbsp;: </h3>
                  </label>
                  <p className={styles["sous-total"]}>
                    <strong>{totalPrix.toFixed(2)} €</strong>
                  </p>
                </div>

                {/* Champs textarea pour une information utiles a transmettre (facultatif) */}
                <div className={styles["form-col"]}>
                  <label htmlFor="message" className={styles["form-label"]}>
                    <h3>Message (facultatif)</h3>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={`${styles["form-input"]} ${styles["message"]}`}
                    placeholder="Exemple : Allergies, etc."
                    value={formValues.message}
                    onChange={(e) =>
                      setFormValues((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }></textarea>
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
                      value={formValues.name}
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
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
                      value={formValues.prenom}
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          prenom: e.target.value,
                        }))
                      }
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
                      value={formValues.adress}
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          adress: e.target.value,
                        }))
                      }
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
                      // value={codePostal}
                      // onChange={(e) => setCodePostal(e.target.value)}
                      required
                      value={formValues.codePostal}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormValues((prev) => ({
                          ...prev,
                          codePostal: value,
                        }));
                        setCodePostal(value);
                      }}
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
                      value={formValues.city}
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          city: e.target.value,
                        }))
                      }
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
                      value={formValues.email}
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
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
                      value={formValues.telephone}
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          telephone: e.target.value,
                        }))
                      }
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
                      value={livraisonMode}
                      onChange={(e) => setLivraisonMode(e.target.value)}
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
                {livraisonMode === "livraison" && codePostal && (
                  <div className={styles["sous-total-container"]}>
                    <label className={styles["form-label"]}>
                      <div className={styles["livraison-info"]}>
                        <h3>Livraison&nbsp;: </h3>
                        {zoneLivraison && (
                          <span className={styles["zone-info"]}>
                            {" "}
                            ({zoneLivraison} {zoneDescription})
                          </span>
                        )}
                      </div>
                    </label>
                    <p className={styles["sous-total"]}>
                      <strong>
                        {fraisLivraison === 0
                          ? "Gratuite"
                          : `${fraisLivraison.toFixed(2)} €`}
                      </strong>
                    </p>
                  </div>
                )}

                {/* Afficher le prix total avec ou sans livraison */}
                <div className={styles["sous-total-container"]}>
                  <label htmlFor="" className={styles["form-label"]}>
                    <h3>Total&nbsp;: </h3>
                  </label>
                  <p className={styles["sous-total"]}>
                    <strong>{totalFinal.toFixed(2)} €</strong>
                  </p>
                </div>

                {/* Choix de la date souhaitée pour la livraison/reception de la commande */}
                <h3>Date souhaitée :</h3>
                <div className={styles["form-row"]}>
                  <div className={styles["form-col"]}>
                    <label htmlFor="date">(jj/mm/aaaa)</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className={`${styles["form-input"]} ${styles["date"]}`}
                      placeholder="jj/mm/aaaa 📆"
                      required
                      value={formValues.date}
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          date: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                {/* Mode de paiement préféré */}
                <h3>Mode de paiement préféré</h3>

                <div className={styles["form-row"]}>
                  <div className={styles["form-col"]}>
                    <label
                      htmlFor="paiement"
                      className={styles["form-label"]}></label>
                    <select
                      name="paiement"
                      id="paiement"
                      className={styles["form-select"]}
                      required
                      value={formValues.paiement}
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          paiement: e.target.value,
                        }))
                      }>
                      <option value="">-- Selectionner --</option>
                      <option value="espèces">💶 Espèces</option>
                      <option value="virement-bancaire">
                        🔁 Virement bancaire
                      </option>
                      <option value="appli-paiement">
                        📲 Paiement via appli (PayPal / Lydia )
                      </option>
                    </select>
                  </div>
                </div>
                <div className={styles["disclaimer-container"]}>
                  <span
                    role="img"
                    aria-label="warning"
                    className={styles["warning-icon"]}>
                    ⚠️
                  </span>
                  <p className={styles["disclaimer"]}>
                    Ce site est une démonstration technique réalisée dans le
                    cadre d’un <strong>projet expérimental</strong> de
                    développement web. Toutes les fonctionnalités sont
                    opérationnelles y compris le formulaire dont l&apos;envoi
                    est volontairement désactivé.{" "}
                    <strong>
                      Aucune commande n’est enregistrée ni traitée, aucune
                      information personnelle n’est conservée et aucun paiement
                      n’est requis
                    </strong>
                    .
                  </p>
                  <span
                    role="img"
                    aria-label="warning"
                    className={styles["warning-icon"]}>
                    ⚠️
                  </span>
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
              <div className={`${styles["modal-overlay"]}`}>
                <div
                  ref={modalRef}
                  className={`${styles["modal-content"]} bordered`}>
                  <div className={`${styles["modal-header"]} bordered`}>
                    <h2>Détails de la commande</h2>

                    <div className={styles["modal-header-content"]}>
                      <div className={styles["modal-header-text"]}>
                        <h3>Vos coordonnées :</h3>

                        <div className={styles["contact-info"]}>
                          <Image
                            src="/images/name-logo.png"
                            width={20}
                            height={20}
                            alt="Logo"
                            className={styles["img"]}
                          />
                          <p>
                            {formValues.name} {formValues.prenom}
                          </p>
                        </div>

                        <div className={styles["contact-info"]}>
                          <Image
                            src="/images/name-logo.png"
                            width={20}
                            height={20}
                            alt="Logo"
                            className={styles["img"]}
                          />
                          <p>
                            {formValues.adress} <br />
                            {formValues.codePostal} {formValues.city}
                          </p>
                        </div>

                        <div className={styles["contact-info"]}>
                          <Image
                            src="/images/name-logo.png"
                            width={20}
                            height={20}
                            alt="Logo"
                            className={styles["img"]}
                          />
                          <p>{formValues.email}</p>
                        </div>

                        <div className={styles["contact-info"]}>
                          <Image
                            src="/images/name-logo.png"
                            width={20}
                            height={20}
                            alt="Logo"
                            className={styles["img"]}
                          />
                          <p>{formValues.telephone}</p>
                        </div>
                      </div>

                      <div className={styles["modal-header-logo"]}>
                        <Image
                          src="/images/Logo.svg"
                          width={264}
                          height={237}
                          alt="Logo"
                          className={styles["img"]}
                        />
                      </div>
                    </div>

                    {/* Tableau Gâteaux */}
                    <h3>Gâteaux choisis :</h3>
                    <table className={styles["order-table"]}>
                      <thead>
                        <tr>
                          <th>Gâteau(x)</th>
                          <th>Taille</th>
                          <th>Qté</th>
                          <th>€</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gateaux.map((g, i) => (
                          <tr key={i}>
                            <td>{g.gateau}</td>
                            <td>{g.taille}</td>
                            <td>{g.quantite}</td>
                            <td>{g.prix.toFixed(2)} €</td>
                          </tr>
                        ))}
                        <tr>
                          <td colSpan={3}>
                            <strong>Sous-total</strong>
                          </td>
                          <td>
                            <strong>{totalPrix.toFixed(2)} €</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className={styles["align-baseline"]}>
                      <h3>Mode de livraison :</h3>
                      <p>
                        {livraisonMode === "livraison"
                          ? "Livraison à l'adresse"
                          : "Click and Collect"}
                      </p>
                    </div>

                    {/* Tableau Livraison */}
                    {livraisonMode === "livraison" && (
                      <table className={styles["order-table"]}>
                        <thead>
                          <tr>
                            <th>Dépt</th>
                            <th>Rayon</th>
                            <th>Zone</th>
                            <th>€</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{formValues.codePostal}</td>
                            <td>{zoneDescription}</td>
                            <td>{zoneLivraison}</td>
                            <td>
                              {fraisLivraison === 0
                                ? "Gratuite"
                                : `${fraisLivraison.toFixed(2)} €`}
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={3}>
                              <strong>Total</strong>
                            </td>
                            <td>
                              <strong>{totalFinal.toFixed(2)} €</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}

                    {livraisonMode === "click-and-collect" && (
                      <table className={styles["order-table"]}>
                        <tbody>
                          <tr>
                            <td colSpan={3}>
                              <strong>Total</strong>
                            </td>
                            <td>
                              <strong>{totalFinal.toFixed(2)} €</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}

                    {livraisonMode === "click-and-collect" && (
                      <p>
                        <strong>Total :</strong> {totalFinal.toFixed(2)} €
                      </p>
                    )}

                    <div className={styles["align-baseline"]}>
                      <h3>Date souhaitée :</h3>
                      <p>
                        {formValues.date
                          ? new Intl.DateTimeFormat("fr-FR", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            }).format(new Date(formValues.date))
                          : ""}
                      </p>
                    </div>

                    <div className={styles["align-baseline"]}>
                      <h3>Mode de paiement choisi :</h3>
                      <p>{formValues.paiement}</p>
                    </div>

                    {formValues.message && (
                      <div className={styles["align-baseline"]}>
                        <h3>Votre message :</h3>
                        <p>{formValues.message}</p>
                      </div>
                    )}

                    <div className={styles["modal-footer"]}>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setShowSummary(false);
                          formRef.current?.requestSubmit();
                        }}>
                        Envoyer ma demande
                      </button>

                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => setShowSummary(false)}>
                        Fermer
                      </button>
                    </div>
                  </div>
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
