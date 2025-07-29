"use client";

import styles from "./Hero.module.css";
import HeroCarousel from "./HeroCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };

const SLIDES = [
  "/images/slide4.png",
  "/images/slide5.png",
  "/images/slide3.jpg",
];

const Hero = () => {
  return (
    <section className={`${styles["hero"]} hero`}>
      <HeroCarousel slides={SLIDES} options={OPTIONS} />
      <div className={styles["hero-content"]}>
        <h4 data-aos="zoom-in">Bienvenue dans ma vitrine en ligne</h4>
        <h1 data-aos="zoom-in" className={styles["hero-title"]}>
          Entremets pour vos Évènements
        </h1>
        <div data-aos="zoom-in" className={styles["hero-buttons"]}>
          <Link href="/gateaux" className="btn btn-primary">
            Découvrez tous mes entremets
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Besoin d&apos;un renseignement ?
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
