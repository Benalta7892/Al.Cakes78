// import { Metadata } from "next";
import BackBtn from "@/components/BackBtn/BackBtn";
import CakeDetails from "@/components/CakeDetails/CakeDetails";
import { CAKES } from "@/data/cakes";
import Image from "next/image";

// type PageParams = {
//   params: Promise<{ slug: string }>; // ← ici la magie
// };

// export async function generateMetadata({
//   params,
// }: PageParams): Promise<Metadata> {
//   const { slug } = await params;
//   const cake = CAKES.find((cake) => cake.slug === decodeURIComponent(slug));
//   return {
//     title: cake ? cake.name : "Gâteau non trouvé",
//   };
// }

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const decodedSlug = decodeURIComponent(params.slug);
  const cake = CAKES.find((cake) => cake.slug === decodedSlug);

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
