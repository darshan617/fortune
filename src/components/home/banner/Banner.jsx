import React from "react";
import styles from "@/components/home/banner/Banner.module.css";
import Link from "next/link";

const Banner = () => {
  return (
    <section className={`${styles.heroSection} sitePadding`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`${styles.heroBanVid}`}
        poster="/video/mumbai.jpg"
      >
        <source src="/video/mumbai.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container-fluid h-100 d-flex align-items-center justify-content-center position-relative z-1">
        <div className="col text-white text-center d-flex flex-column align-items-center gap-md-4 gap-2">
          <h1 className={`${styles.heroHead} titleFont fw-normal revealText`}>
            A Legacy of Delivering Promises.
          </h1>
          <p className={`${styles.heroTxt} fs-20 revealText fontJakarta `}>
            Experience thoughtfully crafted residences where timeless
            architecture, exceptional craftsmanship, and premium living come
            together.
          </p>
          <div
            className="animateThis fadeIn"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            <Link href="/projects" className="ctaBtn">
              Explore Projects{" "}
            </Link>
          </div>
        </div>
      </div>

      <a href="#pullUp" className={`${styles.arrowDown} z-3`}>
        <span></span>
        <span></span>
        <span></span>
      </a>
      <div id="pullUp" className="clearfix"></div>
    </section>
  );
};

export default Banner;
