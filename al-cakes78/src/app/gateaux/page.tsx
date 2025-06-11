"use client";

import CakesSection from "@/components/CakesSection/CakesSection";
import IntroSection from "@/components/IntroSection/IntroSection";
import Image from "next/image";
import ContactCTA from "@/components/ContactCTA/ContactCTA";
// import BackBtn from "@/components/BackBtn/BackBtn";

const page = () => {
  return (
    <>
      {/* <BackBtn content="Accueil" link="/" /> */}

      <IntroSection
        title="Mes Entremets Faits Maison"
        description={
          <>
            Mes <em>entremets faits maison</em> sont conçus pour vous offrir des
            instants gourmands uniques. Des créations artisanales, soignées et
            généreuses, pour sublimer toutes vos occasions – anniversaires,
            fêtes, ou simples envies sucrées.
          </>
        }
      />

      <Image
        src="/images/vector.svg"
        width={594}
        height={100}
        alt="Image de séparation"
        className="vector-image vector-after-hero"
      />

      <CakesSection />

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
