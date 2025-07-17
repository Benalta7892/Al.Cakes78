import ContactCTA from "@/components/ContactCTA/ContactCTA";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
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
        data-aos="zoom-in"
      />

      <ServicesSection />

      <Image
        src="/images/vector.svg"
        width={594}
        height={100}
        alt="Image de séparation"
        className="vector-image"
        data-aos="zoom-in"
      />

      <ContactCTA />

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
