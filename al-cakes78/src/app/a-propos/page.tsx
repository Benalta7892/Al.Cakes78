import AboutSection from "@/components/AboutSection/AboutSection";
import ContactCTA from "@/components/ContactCTA/ContactCTA";
import Image from "next/image";

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

      <AboutSection />

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
