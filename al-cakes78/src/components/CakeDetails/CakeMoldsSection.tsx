import { Mold } from "@/types/cake";
import styles from "./CakeMoldsSection.module.css";

type Props = {
  molds: Mold[];
};

const CakeMolds = ({ molds }: Props) => {
  return (
    <section className={styles["molds-section"]}>
      <h3>Moules Disponibles</h3>
      <table className={styles["molds-table"]}>
        <tbody>
          {molds.map((mold, index) => (
            <tr key={index} className={styles["mold-row"]}>
              <td className={styles["mold-size"]}>{mold.size}</td>
              <td className={styles["mold-price"]}>{mold.price} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default CakeMolds;
