import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "@/components/fortune-florence/banner/FlorenceBanner.module.css";
import Swiper from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const FlorenceBanner = ({
  bannerImage,
  bannerImage1,
  bannerImage2,
  bannerImage3,
  logo,
  title,
  description,
}) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return undefined;

    let swiper;
    let cancelled = false;
    let frameId = 0;
    const loadedImages = [];

    const updateSwiper = () => {
      if (!swiper || swiper.destroyed) return;
      swiper.update();
      swiper.updateSize();
    };

    const initSwiper = () => {
      if (cancelled || !sliderRef.current) return;

      swiper = new Swiper(sliderRef.current, {
        modules: [Autoplay, EffectFade],
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        effect: "fade",
        fadeEffect: { crossFade: true },
        loop: true,
        observer: true,
        observeParents: true,
        watchOverflow: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
      });

      sliderRef.current.querySelectorAll("img").forEach((img) => {
        loadedImages.push(img);
        if (!img.complete) {
          img.addEventListener("load", updateSwiper);
        }
      });

      updateSwiper();
    };

    // Wait for the CSS module + layout to apply. router.push does not
    // prefetch styles the way <Link> does, so Swiper can otherwise
    // measure an unstyled banner and lock in a wrong inline height.
    frameId = requestAnimationFrame(() => {
      frameId = requestAnimationFrame(initSwiper);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
      loadedImages.forEach((img) => {
        img.removeEventListener("load", updateSwiper);
      });
      if (swiper && !swiper.destroyed) {
        swiper.destroy(true, true);
      }
    };
  }, []);
  return (
    <>
      {/* <section
        className={`${styles.projectBanner} sitePadding d-flex align-items-end`}
      >
        <video
         autoPlay
         muted
         loop
         playsInline
         className={`${styles.projBanVid}`}
         poster="/video/florence.jpg"
       >
         <source src={florenceVideo} type="video/mp4" />
         Your browser does not support the video tag.
       </video>

        <div
          className={`${styles.projNameMain} container-fluid text-center position-relative z-1 mb-4 animateThis fadeIn`}
        >
          <Image
            src={logo}
            alt=""
            className={`${styles.projectPgLogo} rounded mb-4 w-100 h-100`}
          />
          <h2 className="titleFont textPrimary mb-4">
            Experience One In A Million Living
          </h2>
          <p className="fs-20 fontJakarta">
            Where timeless architecture meets refined luxury and every moment
            feels extraordinary.
          </p>
        </div>
      </section> */}
      <section
        className={`${styles.projectBanner} projectHeroBanner sitePadding d-flex align-items-end`}
      >
        <div className={`${styles.projHeroSwiper} swiper`} ref={sliderRef}>
          <div className="swiper-wrapper">
            <div className={`swiper-slide ${styles.projHeroSlide}`}>
              <Image
                src={bannerImage}
                alt=""
                fill
                priority
                sizes="100vw"
                className={styles.projBanImg}
              />
            </div>
            <div className={`swiper-slide ${styles.projHeroSlide}`}>
              <Image
                src={bannerImage1}
                alt=""
                fill
                sizes="100vw"
                className={styles.projBanImg}
              />
            </div>
            <div className={`swiper-slide ${styles.projHeroSlide}`}>
              <Image
                src={bannerImage2}
                alt=""
                fill
                sizes="100vw"
                className={styles.projBanImg}
              />
            </div>
            <div className={`swiper-slide ${styles.projHeroSlide}`}>
              <Image
                src={bannerImage3}
                alt=""
                fill
                sizes="100vw"
                className={styles.projBanImg}
              />
            </div>
          </div>
        </div>

        <div
          className={`${styles.projNameMain} bannerName container-fluid text-center position-relative mb-4`}
        >
          <Image
            src={logo}
            alt=""
            className={`${styles.projectPgLogo} rounded mb-4 w-100 h-100`}
          />
          <h2 className="titleFont textPrimary mb-4">
            Experience One In A Million Living
          </h2>
          <p className="fs-20 fontJakarta">
            Where timeless architecture meets refined luxury and every moment
            feels extraordinary.
          </p>
        </div>
      </section>
    </>
  );
};
export default FlorenceBanner;
