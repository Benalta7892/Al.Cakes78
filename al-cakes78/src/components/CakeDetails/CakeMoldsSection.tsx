import styles from "./CakeMoldsSection.module.css";

const CakeMolds = () => {
  return (
    <section className={styles["molds-section"]}>
      <h3>Moules Disponibles</h3>
      <table className={styles["molds-table"]}>
        {/* <thead>
              <tr>
                <th>Taille</th>
                <th>Prix</th>
              </tr>
            </thead> */}
        <tbody>
          <tr>
            <td>6-8 Parts</td>
            <td>25 €</td>
          </tr>
          <tr>
            <td>8-10 Parts</td>
            <td>30 €</td>
          </tr>
          <tr>
            <td>10-12 Parts</td>
            <td>35 €</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default CakeMolds;
