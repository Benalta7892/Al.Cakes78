"use client";

import CakeCardXs from "@/components/CakeCardXs/CakeCardXs";
import { CAKES } from "@/data/cakes";

const { id, name, slug, image } = CAKES[0];

const page = () => {
  return (
    <>
      <CakeCardXs id={id} name={name} slug={slug} image={image} />
    </>
  );
};
export default page;
