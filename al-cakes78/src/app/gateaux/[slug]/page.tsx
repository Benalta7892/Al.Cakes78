import BackBtn from "@/components/BackBtn/BackBtn";
import CakeDetails from "@/components/CakeDetails/CakeDetails";
import { CAKES } from "@/data/cakes";
import Image from "next/image";

// Depuis Next.js 15.3, le paramètre `params` est devenu une PROMESSE (async).
// Si on ne fait pas "await", ça plante au build !
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page(props: Props) {
  // Faut faire `await props.params`
  // Sinon, Vercel plante au build avec une erreur
  const params = await props.params;
  const cake = CAKES.find(
    (cake) => cake.slug === decodeURIComponent(params.slug)
  );

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

      <CakeDetails cake={cake} />

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
