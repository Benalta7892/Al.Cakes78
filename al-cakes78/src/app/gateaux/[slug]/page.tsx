// import BackBtn from "@/components/BackBtn/BackBtn";
import CakeDetails from "@/components/CakeDetails/CakeDetails";
import ContactCTA from "@/components/ContactCTA/ContactCTA";
import { CAKES } from "@/data/cakes";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

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

  const crumbs = [
    { label: "Accueil", href: "/" },
    { label: "Entremets", href: "/gateaux" },
    { label: cake.name },
  ];

  return (
    <>
      {/* <BackBtn content="Tous les entremets" link="/gateaux" /> */}

      <Breadcrumb crumbs={crumbs} />

      <Image
        src="/images/vector.svg"
        width={594}
        height={100}
        alt="Image de séparation"
        className="vector-image vector-after-hero"
        data-aos="zoom-in"
      />

      <CakeDetails cake={cake} />

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
}
