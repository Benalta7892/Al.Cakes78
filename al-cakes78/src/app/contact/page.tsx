import Image from "next/image";
import FormContact from "@/components/Contact/FormContact/FormContact";
import ContactCTA from "@/components/ContactCTA/ContactCTA";

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

      <FormContact />

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
