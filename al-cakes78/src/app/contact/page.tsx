import Image from "next/image";
import FormStart from "./FormStart/FormStart";

const page = () => {
  return (
    <>
      <Image
        src="/images/vector.svg"
        width={594}
        height={100}
        alt="Image de séparation"
        className="vector-image"
      />

      <FormStart />

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
