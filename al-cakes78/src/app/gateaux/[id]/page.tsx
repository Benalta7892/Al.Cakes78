import BackBtn from "@/components/BackBtn/BackBtn";
import CakeDetails from "@/components/CakeDetails/CakeDetails";
import Image from "next/image";

const page = () => {
  return (
    <>
      <BackBtn content="Tous les entremets" link="/gateaux" />

      <Image
        src="/images/vector.svg"
        width={594}
        height={100}
        alt="Image de séparation"
        className="vector-image"
      />

      <CakeDetails />

      <Image
        src="/images/vector.svg"
        width={594}
        height={100}
        alt="Image de séparation"
        className="vector-image"
      />
    </>
  );
};
export default page;
