import Image from "next/image";
import React from "react";
import styles from '@/components/fortune-florence/banner/FlorenceBanner.module.css'

const FlorenceBanner = ( {bannerImage, bannerImage1, bannerImage2, bannerImage3, logo, title, description} ) => {
  return (
    <section className={`${styles.projectBanner} sitePadding d-flex align-items-end`}>
      <div className={`${styles.projHeroSwiper} swiper`}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Image src={bannerImage} alt="" className={styles.projBanImg} />
          </div>
          <div className="swiper-slide">
            <Image
              src={bannerImage1}
              alt=""
              className={styles.projBanImg}
            />
          </div>
          <div className="swiper-slide">
            <Image src={bannerImage2} alt="" className={styles.projBanImg} />
          </div>
          <div className="swiper-slide">
            <Image
              src={bannerImage3}
              alt=""
              className={styles.projBanImg}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid text-center text-white position-relative z-3 mb-sm-5 mb-4 animateThis fadeIn">
        <Image
          src={logo}
          alt=""
          className={`${styles.projectPgLogo} mb-4`}
        />
        <h2 className="titleFont sectBigTitle mb-4 revealText">
          {title}
        </h2>
        <p className="fs-20">
          {description}
        </p>
      </div>
    </section>
  );
};

export default FlorenceBanner;
