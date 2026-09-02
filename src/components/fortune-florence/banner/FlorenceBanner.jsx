import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "@/components/fortune-florence/banner/FlorenceBanner.module.css";
import Swiper from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const FlorenceBanner = ({
  type,
  bannerImage,
  bannerImage1,
  bannerImage2,
  bannerImage3,
  logo,
  title,
  description,
  florenceVideo,
}) => {
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
      autoplay: { delay: 3000, disableOnInteraction: false },
      //navigation: {nextEl:".projNext",prevEl:".projPrev"},
    });
  }, []);
  return (
    <>
    {type === "fortune_florence" ? (
       <section
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
     </section>
    ):(
      <section
      className={`${styles.projectBanner} sitePadding d-flex align-items-end`}
    >
      
      <div className={`${styles.projHeroSwiper} swiper`} ref={sliderRef}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Image src={bannerImage} alt="" className={styles.projBanImg} />
          </div>
          <div className="swiper-slide">
            <Image src={bannerImage1} alt="" className={styles.projBanImg} />
          </div>
          <div className="swiper-slide">
            <Image src={bannerImage2} alt="" className={styles.projBanImg} />
          </div>
          <div className="swiper-slide">
            <Image src={bannerImage3} alt="" className={styles.projBanImg} />
          </div>
        </div>
      </div>

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
    </section>
    )
    }
    </>
  );
};
export default FlorenceBanner;
