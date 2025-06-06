"use client";

import CakesSection from "@/components/CakesSection/CakesSection";
import IntroSection from "@/components/IntroSection/IntroSection";
import Image from "next/image";
import ContactCTA from "@/components/ContactCTA/ContactCTA";

const page = () => {
  return (
    <>
      <IntroSection
        title="Titre de la page des gâteaux"
        description="Parcourez notre sélection complète de créations sucrées. Des recettes artisanales pour chaque occasion et chaque gourmandise."
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
    </>
  );
};
export default page;
