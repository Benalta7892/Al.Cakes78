"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import styles from "./CakeImageDisplay.module.css";

type Props = {
  images: string[];
  name: string;
};

const CakeImageDisplay = ({ images, name }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={`${styles["display-container"]} bordered`}>
      {/* <div className={`${styles["display-wrapper"]} bordered`}> */}
      {/* Swiper Principal */}
      <Swiper
        modules={[Pagination, Thumbs]}
        pagination={{ clickable: true }}
        loop
        spaceBetween={20}
        thumbs={{ swiper: thumbsSwiper }}
        className={`${styles["cake-image-swiper"]} bordered`}>
        {images.map((src, index) => (
          <SwiperSlide key={index} className={styles["swiper-slide"]}>
            {/* <div className={styles["image-container"]}> */}
            <Image
              src={src}
              alt={`Photo ${index + 1} du gâteau ${name}`}
              width={500}
              height={500}
              className={styles["cake-image-slide"]}
            />
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Miniatures */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[Thumbs]}
        className={styles["cake-thumb-swiper"]}>
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className={`${styles["thumb-slide"]} bordered`}>
            <Image
              src={src}
              alt={`Miniature ${index + 1}`}
              width={100}
              height={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    // </div>
  );
};

export default CakeImageDisplay;
