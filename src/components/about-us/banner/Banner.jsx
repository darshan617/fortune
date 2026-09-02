import Image from "next/image";
import React from "react";
import aboutBanner from "@/assets/images/aboutBanner.jpg";
import fortuneLogo from "@/assets/images/FORTUNE-LOGO-192x192.png";
import skyline from "@/assets/images/skyline.svg";
import styles from "@/components/about-us/banner/Banner.module.css";

const AboutBanner = () => {
  return (
    <>
      <section className="aboutMoto d-flex flex-wrap">
        <div className="col-md-6 col-12 position-relative">
          <div className={styles.stickyFrame}>
            <Image src={aboutBanner} alt="" className={styles.stfrImg} />
            <div
              className={`${styles.stickyBlue} d-flex align-items-center justify-content-center`}
            >
              <Image
                src={fortuneLogo}
                alt=""
                className="w-75 animateThis curtain h-auto"
                style={{ transitionDelay: "1s" }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 position-relative z-1">
          <div className={`${styles.motoMain} d-flex align-items-center`}>
            <div className="container-fluid py-5 py-md-0">
              
                <strong className="sectTitle textGold mb-3 revealText fontJakarta">
                  We are driven by our motto
                </strong>
                
                <h1 className="sectBigTitle titleFont textPrimary revealText">
                  Relentless Dedication to{" "}
                </h1>{" "}
                <div className="d-flex gap-3">
                <h1 className="textGold sectBigTitle titleFont textPrimary revealText" style={{ fontStyle: "italic" }}>
                  Your
                </h1>{" "}
                <h1 className="sectBigTitle titleFont textPrimary revealText">
                  Satisfaction
                </h1>
              </div>
            </div>
          </div>
          <div className="sitePadding d-flex align-items-center">
            <div className={`${styles.aboutPgContent} fs-20 text-body fontJakarta`}>
              <div className="container-fluid mb-5 mb-md-0">
                <h2 className="sectTitle textGold mb-3 animateThis fadeIn">
                  About Fortune Group
                </h2>
                <p className="lh-lg animateThis fadeIn">
                  Founded in 2016, Fortune Acres Pvt. Ltd. is a dynamic real
                  estate development firm shaping the landscape of Mumbai.
                </p>
                <p className="lh-lg animateThis fadeIn">
                  Driven by a passionate team of young and dynamic industry
                  leaders, we fuse innovative design with sustainable practices
                  to deliver high-quality residential spaces and commercial
                  showrooms. Our client-first approach guarantees that every
                  project is completed with absolute precision, uncompromised
                  quality, and strict adherence to timelines.
                </p>
                <p className="lh-lg animateThis fadeIn">
                  At Fortune Acres, we don't just build properties;{" "}
                  <strong className="textPrimary">
                    we create remarkable, future-ready environments that foster
                    growth and elevate lifestyle standards.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sitePadding bgPrimary py-3">
        <div className="container-fluid text-center text-white py-5 d-lg-flex align-items-center justify-content-center gap-3 d-md-block">
          <h2 className="sectBigTitle titleFont revealText fw-normal mb-0">
            A Legacy of delivering
          </h2>
          <span className="textGold sectBigTitle titleFont revealText fw-normal" style={{ fontStyle: "italic" }}>
            promises
          </span>
        </div>
      </section>

      <section className="sitePadding pt-5">
        <div className="container-fluid pt-lg-5">
          <div
            className={`${styles.invItemList} row row-cols-lg-3 row-cols-1 bgGold `}
          >
            <div className="col animateThis curtainLeft fadeGrow p-0">
              <div
                className={`${styles.invItem} d-flex flex-column gap-3 p-xl-5 px-4 py-5`}
              >
                <div
                  className={`${styles.invIconBox} rounded-circle d-flex justify-content-center align-items-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={styles.invIcon}
                  >
                    <path d="M12 13V2l8 4-8 4" />
                    <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
                    <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
                  </svg>
                </div>
                <h3 className={`${styles.invHead} titleFont mb-0`}>Mission</h3>
                <p className={`${styles.invTxt} lh-lg mb-0 fontJakarta`}>
                  Transforming lives through innovative and customer-centric
                  real estate developments, Fortune Acres Pvt. Ltd. aims at
                  creating architectural marvels that evoke joy, prosperity, and
                  enable a luxurious way of living for their customers.
                </p>
              </div>
            </div>

            <div className="col animateThis curtainLeft fadeGrow">
              <div
                className={`${styles.invItem} d-flex flex-column gap-3 p-xl-5 px-4 py-5`}
              >
                <div
                  className={`${styles.invIconBox} rounded-circle d-flex justify-content-center align-items-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={styles.invIcon}
                  >
                    <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
                    <path d="m13.56 11.747 4.332-.924" />
                    <path d="m16 21-3.105-6.21" />
                    <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
                    <path d="m6.158 8.633 1.114 4.456" />
                    <path d="m8 21 3.105-6.21" />
                    <circle cx="12" cy="13" r="2" />
                  </svg>
                </div>
                <h3 className={`${styles.invHead} titleFont mb-0`}>Vision</h3>
                <p className={`${styles.invTxt} lh-lg mb-0 fontJakarta`}>
                  Our vision is to selflessly prioritize client's interests,
                  providing prime property locations with seamless connectivity
                  to nature and maximum benefits. With a focus on exceeding
                  expectations and continuous improvement, we aim for 100%
                  satisfaction, surpassing our own benchmarks to set new
                  standards in the market and achieve long-term growth.
                </p>
              </div>
            </div>

            <div className="col animateThis curtainLeft fadeGrow">
              <div
                className={`${styles.invItem} d-flex flex-column gap-3 p-xl-5 px-4 py-5`}
              >
                <div
                  className={`${styles.invIconBox} rounded-circle d-flex justify-content-center align-items-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={styles.invIcon}
                  >
                    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                    <path d="m21 3 1 11h-2" />
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                    <path d="M3 4h8" />
                  </svg>
                </div>
                <h3 className={`${styles.invHead} titleFont mb-0`}>Values</h3>
                <p className={`${styles.invTxt} lh-lg mb-0 fontJakarta`}>
                  Our values drive our growth, treating every client as family
                  and delivering unmatched service and quality. We prioritize
                  respect, transparency, and continuous improvement, offering
                  selfless and feasible property options.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="clearfix">
            <Image
              src={skyline}
              alt=""
              className="float-end"
              style={{ width: "80%", maxWidth: "900px" }}
            />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default AboutBanner;
