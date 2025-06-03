import Hero from "@/components/Hero/Hero";
import CardInfos from "@/components/CardInfos/CardInfos";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <CardInfos />
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
