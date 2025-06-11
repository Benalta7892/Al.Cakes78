import { Metadata } from "next";
import BackBtn from "@/components/BackBtn/BackBtn";
import CakeDetails from "@/components/CakeDetails/CakeDetails";
import { CAKES } from "@/data/cakes";
import Image from "next/image";

interface PageParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const cake = CAKES.find(
    (cake) => cake.slug === decodeURIComponent(params.slug)
  );
  return {
    title: cake ? cake.name : "Gâteau non trouvé",
  };
}

export default async function page({ params }: PageParams) {
  const slug = decodeURIComponent(params.slug);
  const cake = CAKES.find((cake) => cake.slug === slug);

  if (!cake) {
    return <p>Gâteau non trouvé</p>;
  }

  return (
    <>
      <BackBtn content="Tous les entremets" link="/gateaux" />

      <Image
        src="/images/vector.svg"
        width={594}
        height={100}
        alt="Image de séparation"
        className="vector-image"
      />

      <CakeDetails name={cake.name} images={cake.images} />

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
