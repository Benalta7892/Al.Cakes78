"use client";

import { useState } from "react";
import { CAKES } from "@/data/cakes";
import { DELIVERY_ZONES } from "@/data/deliveryZones";
import styles from "./StepObjet.module.css";

type CakeSelection = {
  id: number;
  slug: string;
  moldIndex: number;
  quantity: number;
};

const getDeliveryZone = (postalCode: string): 1 | 2 | 3 => {
  if (DELIVERY_ZONES.zone1.includes(postalCode)) return 1;
  if (DELIVERY_ZONES.zone2.includes(postalCode)) return 2;
  return 3;
};

const getDeliveryFee = (zone: 1 | 2 | 3, total: number): number => {
  if (total >= 85) return 0;
  switch (zone) {
    case 1:
      return 10;
    case 2:
      return 15;
    case 3:
    default:
      return 20;
  }
};

const StepObjet = () => {
  const [objet, setObjet] = useState<"commande" | "renseignement" | "">("");
  const [cakesSelected, setCakesSelected] = useState<CakeSelection[]>([
    { id: 1, slug: "", moldIndex: 0, quantity: 1 },
  ]);

  const [livraisonMode, setLivraisonMode] = useState<
    "click" | "livraison" | ""
  >("");
  const [adresseDiff, setAdresseDiff] = useState(false);

  const [infosPerso, setInfosPerso] = useState({
    name: "",
    firstname: "",
    address: "",
    postal: "",
    city: "",
    email: "",
    phone: "",
  });

  const handleChangeCake = (
    index: number,
    field: keyof CakeSelection,
    value: string | number
  ) => {
    const updated = [...cakesSelected];
    updated[index] = {
      ...updated[index],
      [field]:
        field === "quantity" || field === "moldIndex"
          ? parseInt(value as string)
          : (value as string),
    };
    setCakesSelected(updated);
  };

  const handleAddCake = () => {
    setCakesSelected((prev) => [
      ...prev,
      { id: prev.length + 1, slug: "", moldIndex: 0, quantity: 1 },
    ]);
  };

  const getPrice = (slug: string, moldIndex: number, quantity: number) => {
    const cake = CAKES.find((c) => c.slug === slug);
    const mold = cake?.molds[moldIndex];
    return mold ? mold.price * quantity : 0;
  };

  const total = cakesSelected.reduce(
    (sum, c) => sum + getPrice(c.slug, c.moldIndex, c.quantity),
    0
  );

  const isFormComplete = cakesSelected.every((c) => c.slug !== "");

  const livraisonPostalCode = adresseDiff
    ? document.querySelector<HTMLInputElement>('input[name="livraison_postal"]')
        ?.value || ""
    : infosPerso.postal;

  const deliveryZone = getDeliveryZone(livraisonPostalCode);
  const deliveryFee =
    livraisonMode === "livraison" ? getDeliveryFee(deliveryZone, total) : 0;
  const totalWithDelivery = total + deliveryFee;

  return (
    <section className={styles["step-objet-section"]}>
      <div className={`${styles["step-objet-container"]} bordered`}>
        <div className={`${styles["step-objet-content"]} bordered`}>
          <form className={styles["form"]}>
            <h2>Quel est l&apos;objet de votre demande ?</h2>

            <div>
              <label style={{ display: "none" }}>
                <input
                  type="radio"
                  name="objet"
                  value="commande"
                  checked={objet === "commande"}
                  onChange={() => setObjet("commande")}
                  className={styles["radio-input"]}
                />
                Je veux passer une commande
              </label>
              <br />
              <label style={{ display: "none" }}>
                <input
                  type="radio"
                  name="objet"
                  value="renseignement"
                  checked={objet === "renseignement"}
                  onChange={() => setObjet("renseignement")}
                  className={styles["radio-input"]}
                />
                Je veux un renseignement
              </label>

              <select
                id="objet"
                name="objet"
                value={objet}
                onChange={(e) =>
                  setObjet(e.target.value as "commande" | "renseignement" | "")
                }
                className={styles["select-input"]}>
                <option value="">-- Sélectionnez un objet --</option>
                <option value="commande">Je veux passer une commande</option>
                <option value="renseignement">Je veux un renseignement</option>
              </select>
            </div>

            {objet === "renseignement" && (
              <>
                <h2>Formulaire de contact</h2>
                <label>Nom</label>
                <input type="text" name="name" required />
                <label>Prénom</label>
                <input type="text" name="firstname" required />
                <label>Email</label>
                <input type="email" name="email" required />
                <label>Téléphone</label>
                <input type="tel" name="phone" required />
                <label>Message</label>
                <textarea name="message" required />
                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </>
            )}

            {objet === "commande" && (
              <>
                <h2>Formulaire de commande</h2>

                {cakesSelected.map((cake, index) => (
                  <div key={index} className={styles["cake-selection"]}>
                    <label>Entremets #{index + 1}</label>
                    <select
                      value={cake.slug}
                      onChange={(e) =>
                        handleChangeCake(index, "slug", e.target.value)
                      }>
                      <option value="">-- Choisissez --</option>
                      {CAKES.map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.name}
                        </option>
                      ))}
                    </select>

                    {cake.slug && (
                      <>
                        <label>Taille</label>
                        <select
                          value={cake.moldIndex}
                          onChange={(e) =>
                            handleChangeCake(index, "moldIndex", e.target.value)
                          }>
                          {CAKES.find((c) => c.slug === cake.slug)?.molds.map(
                            (mold, i) => (
                              <option key={i} value={i}>
                                {mold.size} - {mold.price}€
                              </option>
                            )
                          )}
                        </select>

                        <label>Quantité</label>
                        <input
                          type="number"
                          min="1"
                          value={cake.quantity}
                          onChange={(e) =>
                            handleChangeCake(index, "quantity", e.target.value)
                          }
                        />

                        <label>Prix</label>
                        <input
                          type="text"
                          disabled
                          value={`${getPrice(
                            cake.slug,
                            cake.moldIndex,
                            cake.quantity
                          )}€`}
                        />
                      </>
                    )}
                  </div>
                ))}

                <div style={{ marginTop: "1rem" }}>
                  <label>Sous-total</label>
                  <input type="text" disabled value={`${total}€`} />
                </div>

                <button
                  type="button"
                  onClick={handleAddCake}
                  className="btn btn-primary">
                  Ajouter un entremets
                </button>

                {isFormComplete && (
                  <>
                    <label style={{ marginTop: "1rem" }}>
                      Informations utiles à me transmettre (facultatif)
                    </label>
                    <textarea name="infos" rows={4} />

                    <h3 style={{ marginTop: "2rem" }}>
                      Informations personnelles
                    </h3>
                    <label>Nom</label>
                    <input
                      type="text"
                      name="name"
                      required
                      onChange={(e) =>
                        setInfosPerso({ ...infosPerso, name: e.target.value })
                      }
                    />
                    <label>Prénom</label>
                    <input
                      type="text"
                      name="firstname"
                      required
                      onChange={(e) =>
                        setInfosPerso({
                          ...infosPerso,
                          firstname: e.target.value,
                        })
                      }
                    />
                    <label>Adresse</label>
                    <input
                      type="text"
                      name="address"
                      required
                      onChange={(e) =>
                        setInfosPerso({
                          ...infosPerso,
                          address: e.target.value,
                        })
                      }
                    />
                    <label>Code Postal</label>
                    <input
                      type="text"
                      name="postal"
                      required
                      onChange={(e) =>
                        setInfosPerso({ ...infosPerso, postal: e.target.value })
                      }
                    />
                    <label>Ville</label>
                    <input
                      type="text"
                      name="city"
                      required
                      onChange={(e) =>
                        setInfosPerso({ ...infosPerso, city: e.target.value })
                      }
                    />
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      onChange={(e) =>
                        setInfosPerso({ ...infosPerso, email: e.target.value })
                      }
                    />
                    <label>Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      onChange={(e) =>
                        setInfosPerso({ ...infosPerso, phone: e.target.value })
                      }
                    />

                    <h3 style={{ marginTop: "2rem" }}>Livraison</h3>
                    <label>Date souhaitée</label>
                    <input type="date" name="date" required />

                    <label>Mode de livraison</label>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="mode"
                          value="click"
                          checked={livraisonMode === "click"}
                          onChange={() => setLivraisonMode("click")}
                        />
                        Click & Collect à la cuisine de la chef
                      </label>
                      <br />
                      <label>
                        <input
                          type="radio"
                          name="mode"
                          value="livraison"
                          checked={livraisonMode === "livraison"}
                          onChange={() => setLivraisonMode("livraison")}
                        />
                        Livraison à l&apos;adresse souhaitée
                      </label>
                    </div>

                    {livraisonMode === "livraison" && (
                      <>
                        <label>
                          <input
                            type="checkbox"
                            checked={!adresseDiff}
                            onChange={() => setAdresseDiff((prev) => !prev)}
                          />
                          L&apos;adresse est identique à celle renseignée plus
                          haut
                        </label>

                        {adresseDiff && (
                          <>
                            <label>Adresse de livraison</label>
                            <input
                              type="text"
                              name="livraison_address"
                              required
                            />
                            <label>Code postal</label>
                            <input
                              type="text"
                              name="livraison_postal"
                              required
                            />
                            <label>Ville</label>
                            <input type="text" name="livraison_city" required />
                          </>
                        )}

                        {!adresseDiff && (
                          <>
                            <input
                              type="hidden"
                              name="livraison_address"
                              value={infosPerso.address}
                            />
                            <input
                              type="hidden"
                              name="livraison_postal"
                              value={infosPerso.postal}
                            />
                            <input
                              type="hidden"
                              name="livraison_city"
                              value={infosPerso.city}
                            />
                          </>
                        )}

                        <div>
                          <label>Frais de livraison</label>
                          <input
                            type="text"
                            disabled
                            value={`${deliveryFee}€`}
                          />
                        </div>
                      </>
                    )}

                    <div>
                      <label>Total à payer</label>
                      <input
                        type="text"
                        disabled
                        value={`${totalWithDelivery}€`}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Envoyer la commande
                    </button>
                  </>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default StepObjet;
