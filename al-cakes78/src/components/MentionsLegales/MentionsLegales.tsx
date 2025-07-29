import styles from "./MentionsLegales.module.css";

const MentionsLegales = () => {
  return (
    <section className={styles["mentions-legales-section"]}>
      <p className={styles["update-date"]}>
        Date de dernière mise à jour : 29/07/2025
      </p>

      <h2>Mentions légales</h2>
      <p>
        Ce site web est un projet expérimental réalisé à des fins
        d’apprentissage. Il ne s’agit pas d’une activité commerciale ou
        professionnelle.
        <br />
        <strong>
          Aucune commande n’est enregistrée ni traitée, aucune information
          personnelle n’est conservée et aucun paiement n’est requis
        </strong>
      </p>
      <h3>Éditeur du site</h3>
      <p>
        Benoit ALEXANDRE
        <br />
        Site web personnel :{" "}
        <a
          href="https://www.benoit-alexandre.com"
          target="_blank"
          rel="noopener noreferrer">
          www.benoit-alexandre.com
        </a>
      </p>
      <h3>Hébergement</h3>
      <p>
        Ce site est hébergé par Vercel.
        <br />
        Site web :{" "}
        <a href="https://vercel.com" target="_blank">
          www.vercel.com
        </a>
      </p>
      <h3>Protection des données personnelles</h3>
      <p>
        Aucune donnée personnelle n’est collectée ou stockée par ce site. Le
        formulaire de contact est opérationnel mais l&apos;envoie désactivé.
      </p>
      <h3>Propriété intellectuelle</h3>
      <p>
        Le contenu de ce site est protégé par le droit d’auteur. Toute
        reproduction partielle ou totale est interdite sans autorisation.
      </p>
      <h3>Contact</h3>
      <p>
        Le formulaire de contact est opérationnel mais l&apos;envoie est
        désactivé. Pour toute question, vous pouvez utiliser les coordonnées
        disponibles sur le site personnel.
      </p>

      <div className={styles["disclaimer-container"]}>
        <span
          role="img"
          aria-label="warning"
          className={styles["warning-icon"]}>
          ⚠️
        </span>
        <p className={styles["disclaimer"]}>
          Ce site est une démonstration technique réalisée dans le cadre d’un{" "}
          <strong>projet expérimental</strong> de développement web. Toutes les
          fonctionnalités sont opérationnelles y compris le formulaire dont
          l&apos;envoi est volontairement désactivé.{" "}
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
    </section>
  );
};
export default MentionsLegales;
