"use client";

import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./EmblaCarousel.module.css";
import CakeCardXs from "../CakeCardXs/CakeCardXs";

type Cake = {
  id: number;
  name: string;
  slug: string;
  images: string[];
  // description: string;
  // price: number;
  isFeatured: boolean;
};

type PropType = {
  cakes: Cake[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ cakes, options }) => {
  const isDev = true;
  const plugins = isDev
    ? []
    : [Autoplay({ stopOnInteraction: false, delay: 10000 })];
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <div className={styles["embla"]}>
      <div className={styles["embla__viewport"]} ref={emblaRef}>
        <div className={styles["embla__container"]}>
          {cakes.map((cake) => (
            <div className={styles["embla__slide"]} key={cake.id}>
              <article>
                <CakeCardXs
                  id={cake.id}
                  name={cake.name}
                  slug={cake.slug}
                  images={cake.images}
                />
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className={styles["embla__controls"]}>
        <div className={styles["embla__dots"]}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles["embla__dot"]} ${
                index === selectedIndex ? styles["embla__dot--selected"] : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
