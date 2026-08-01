import React from "react";
import styles from "@/components/home/banner/Banner.module.css";
import Link from "next/link";

const Banner = () => {
  return (
    <section className={`${styles.heroSection} sitePadding`}>
      <video autoPlay muted loop playsInline className={`${styles.heroBanVid}`} poster="/video/hero.jpg">
        <source src="/video/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container-fluid h-100 d-flex align-items-center justify-content-center position-relative z-1">
        <div className="col text-white text-center d-flex flex-column align-items-center gap-md-4 gap-2">
          <h1 className={`${styles.heroHead} titleFont fw-normal revealText`}>
            A Legacy of Delivering Promises.
          </h1>
          <p className={`${styles.heroTxt} fs-20 revealText`}>
            Experience thoughtfully crafted residences where timeless
            architecture, exceptional craftsmanship, and premium living come
            together. Discover homes designed for generations.
          </p>
          <div className="animateThis fadeIn ">
            <Link href="" className="ctaBtn">
              Explore Projects{" "}
            </Link>
          </div>
        </div>
      </div>

      <div className={`${styles.arrowDown}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default Banner;