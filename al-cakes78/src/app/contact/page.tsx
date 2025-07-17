import Image from "next/image";
import FormContact from "@/components/Contact/FormContact/FormContact";

const page = () => {
  return (
    <>
      <Image
        src="/images/vector.svg"
        width={594}
        height={100}
        alt="Image de séparation"
        className="vector-image"
        data-aos="zoom-in"
      />

      <FormContact />

      <Image
        src="/images/vector.svg"
        width={594}
        height={100}
        alt="Image de séparation"
        className="vector-image"
        data-aos="zoom-in"
      />
    </>
  );
};
export default page;
