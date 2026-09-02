"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import styles from "@/components/fortune-florence/banner/FlorenceBanner.module.css";

const AboutProject = ( {heading, title, paragraph1, paragraph2, paragraph3, paragraph4, aboutProjectImage, aboutProjectImage1, Location, Configuration} ) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const swiper = new Swiper(sliderRef.current, {
      modules: [Autoplay, EffectFade],

      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1000,
      effect: "fade",
      loop: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      // navigation: {
      //   nextEl: ".projNext",
      //   prevEl: ".projPrev",
      // },
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <section className="projOverview position-relative">
      <div className="sitePadding py-5">
        <div className="container-fluid pt-5">
          <div
            className="w-100 mx-auto text-center"
            style={{ maxWidth: "900px" }}
          >
            <h2 className="sectTitle textGold mb-3 revealText fontJakarta">
              {heading}
            </h2>

            <h3 className="mb-4 sectBigTitle titleFont textPrimary revealText">
              {title}
            </h3>

            <div className="animateThis slideTop">
              <p className="lh-lg opacity-75 fontJakarta">{paragraph1}</p>
              <p className="lh-lg opacity-75 fontJakarta">{paragraph2}</p>
              <p className="lh-lg opacity-75 fontJakarta">{paragraph3}</p>
              <p className="lh-lg opacity-75 fontJakarta">{paragraph4}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.inProjMain} sitePadding position-relative`}
      >
        <div className="container-fluid">
          <div
            className={`${styles.inProjectSliderWrap} mx-auto rounded-4`}
          >
            <div
              ref={sliderRef}
              className={`${styles.inProjectSlider} swiper rounded-4 animateThis curtain`}
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <Image
                    src={aboutProjectImage}
                    alt=""
                    className={styles.ipsImg}
                  />
                </div>

                <div className="swiper-slide">
                  <Image
                    src={aboutProjectImage1}
                    alt=""
                    className={styles.ipsImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.inProjDetailSection} sitePadding text-white`}>
        <div className="container-fluid d-flex justify-content-center">
          <div
            className={`${styles.inProjDetail} row g-2 mb-4 fw-semibold fontJakarta`}
          >
            <div className="col-md-6">
              <small className="d-block textGold">Location</small>
              {Location}
            </div>

            <div className="col-md-6">
              <small className="d-block textGold">Configuration</small>
              {Configuration}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;