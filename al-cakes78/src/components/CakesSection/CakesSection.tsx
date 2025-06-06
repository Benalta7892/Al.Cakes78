"use client";

import { CAKES } from "@/data/cakes";
import CakeCardXs from "@/components/CakeCardXs/CakeCardXs";

const CakesSection = () => {
  return (
    <div>
      {CAKES.map(({ id, name, slug, image }) => (
        <CakeCardXs key={id} id={id} name={name} slug={slug} image={image} />
      ))}
    </div>
  );
};
export default CakesSection;
