import Image from "next/image";
import ContactCTA from "@/components/ContactCTA/ContactCTA";
import StepObjet from "@/components/Contact/StepObjet/StepObjet";

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

      <StepObjet />

      <Image
        src="/images/vector.svg"
        width={594}
        height={100}
        alt="Image de séparation"
        className="vector-image"
      />

      <ContactCTA />

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
