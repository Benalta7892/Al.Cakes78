import Hero from "@/components/Hero/Hero";
import CardInfos from "@/components/CardInfos/CardInfos";
import FeaturedCakes from "@/components/FeaturedCakes/FeaturedCakes";
import Image from "next/image";
import Testimonials from "@/components/Testimonials/Testimonials";
import ContactCTA from "@/components/ContactCTA/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />

      <Image
        src="/images/vector.svg"
        width={594}
        height={100}
        alt="Image de séparation"
        className="vector-image vector-after-hero"
      />
      <CardInfos />

      <Image
        src="/images/vector.svg"
        width={594}
        height={100}
        alt="Image de séparation"
        className="vector-image"
      />

      <FeaturedCakes />

      <Image
        src="/images/vector.svg"
        width={594}
        height={100}
        alt="Image de séparation"
        className="vector-image"
      />

      <Testimonials />

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
}
