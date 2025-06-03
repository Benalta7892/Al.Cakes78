"use client";

import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./EmblaCarousel.module.css";
import Image from "next/image";

type Cake = {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  price: number;
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
  // console.log("cakes reçus :", cakes);

  return (
    <section className={styles["embla"]}>
      <div className={styles["embla__viewport"]} ref={emblaRef}>
        <div className={styles["embla__container"]}>
          {cakes.map((cake, index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.card}>
                <h3 className={styles.title}>{cake.name}</h3>
                <div className={styles.imageWrapper}>
                  <Image
                    className={styles.image}
                    src={cake.image}
                    alt={cake.name}
                    fill
                  />
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.price}>{cake.price.toFixed(2)} €</p>
                  <button>Découvir</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles.embla__dot} ${
                index === selectedIndex ? styles["embla__dot--selected"] : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
