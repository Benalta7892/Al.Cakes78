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
            <tr key={index}>
              <td>{mold.size}</td>
              <td>{mold.price} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default CakeMolds;
