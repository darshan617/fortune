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
              <strong className="sectTitle textGold mb-3 revealText ">
                We are driven by our motto
              </strong>
              <h1 className="sectBigTitle titleFont textPrimary revealText">
                Relentless Dedication to{" "}
                <span
                  className="textGold sectBigTitle titleFont textPrimary revealText"
                  style={{ fontStyle: "italic" }}
                >
                  Your
                </span>{" "}
                Satisfaction
              </h1>
            </div>
          </div>
          <div className="sitePadding d-flex align-items-center">
            <div className={`${styles.aboutPgContent} fs-20 text-body `}>
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

      <section className="sitePadding bgPrimary py-5 text-white">
        <div className="container-fluid py-sm-4">
          <div className="text-center mb-5">
            <h2 className="sectBigTitle titleFont revealText fw-normal mb-4">
              A legacy built on <i className="textGold">Trust.</i>
            </h2>
            <div className="fs-20 animateThis slideTop">
              With over 35 years of experience in construction and development
              all over Maharashtra.
            </div>
          </div>

          <div className="row text-white text-center pt-4 gy-5 g-sm-4 g-xl-5">
            <div className="col-lg-3 col-sm-6 px-xl-5">
              <div className="wcuItem vstack gap-3">
                <div className={`${styles.wcuIcon} animateThis`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M28.5,17.3L16,7.9L3.5,17.3v8.8c0,1.9,1.5,3.4,3.4,3.4h4.8c0.6,0,1.1-0.5,1.1-1.1v-4.2c0-0.6,0.5-1.1,1.1-1.1H18c0.6,0,1.1,0.5,1.1,1.1v4.2c0,0.6,0.5,1.1,1.1,1.1H25c1.9,0,3.4-1.5,3.4-3.4V17.3z" />
                    <path d="M30.9,16c0.3,0,0.7-0.2,0.9-0.4c0.4-0.5,0.3-1.2-0.2-1.6L16.7,2.7c-0.4-0.3-1-0.3-1.4,0L0.4,14c-0.5,0.4-0.6,1.1-0.2,1.6c0.4,0.5,1.1,0.6,1.6,0.2L16,5l14.2,10.8C30.4,15.9,30.6,16,30.9,16z" />
                  </svg>
                </div>
                <div className="animateThis slideTop" style={{transitionDelay:"1s"}}>
                  <div className={`${styles.wcuHead} mb-2 text-uppercase`}>What we build</div>
                  <div className={`${styles.wcutxt} fw-light text-opacity-50 lh-lg text-white`}>
                    Custom homes, residential complexes, commercial buildings,
                    office spaces, hotels and specialised developments.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 px-xl-5">
              <div className="wcuItem vstack gap-3">
                <div className={`${styles.wcuIcon} animateThis`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.8 50">
                    <path d="M34.9,42.5h7.4V50h-7.4V42.5z M49.8,26v23.6c0,0.2-0.2,0.4-0.4,0.4h-5.5v-8.3c0-0.4-0.4-0.8-0.8-0.8h-9c-0.4,0-0.8,0.4-0.8,0.8V50h-5.5c-0.2,0-0.4-0.2-0.4-0.4V32.4c0-0.2,0.2-0.4,0.4-0.4h0.4c0-3.6,0-7.3,0-10.9c0-0.4,0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8V24h3.4v-1.6c0-0.4,0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8V24h1.5c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8h-1.5v1.8h1.5c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8h-1.5v3H40v-6c0-0.2,0.2-0.4,0.4-0.4h9C49.6,25.6,49.8,25.8,49.8,26L49.8,26z M29.7,27.4h3.4v-1.8h-3.4V27.4z M29.7,32h3.4v-3h-3.4V32z M33.7,35.6c0-0.1-0.1-0.2-0.2-0.2H31c-0.1,0-0.2,0.1-0.2,0.2v2.5c0,0.1,0.1,0.2,0.2,0.2h2.5c0.1,0,0.2-0.1,0.2-0.2V35.6z M40,35.6c0-0.1-0.1-0.2-0.2-0.2h-2.5c-0.1,0-0.2,0.1-0.2,0.2v2.5c0,0.1,0.1,0.2,0.2,0.2h2.5c0.1,0,0.2-0.1,0.2-0.2V35.6z M46.4,35.6c0-0.1-0.1-0.2-0.2-0.2h-2.5c-0.1,0-0.2,0.1-0.2,0.2v2.5c0,0.1,0.1,0.2,0.2,0.2h2.5c0.1,0,0.2-0.1,0.2-0.2V35.6z M46.4,29.3c0-0.1-0.1-0.2-0.2-0.2h-2.5c-0.1,0-0.2,0.1-0.2,0.2v2.5c0,0.1,0.1,0.2,0.2,0.2h2.5c0.1,0,0.2-0.1,0.2-0.2V29.3z M18.8,49.4c0.1,0.3-0.1,0.6-0.4,0.6H5.7c-0.3,0-0.5-0.3-0.4-0.6l1.3-2.8c0.3-0.5,0.8-0.9,1.4-0.9h0.2V17.1H8.1c-0.3,0-0.6-0.3-0.6-0.6v-0.9H4.5v3.3h1c0.3,0,0.6,0.3,0.6,0.6v3.7c0,0.3-0.3,0.6-0.6,0.6H1.9c-0.3,0-0.6-0.3-0.6-0.6v-3.7c0-0.3,0.3-0.6,0.6-0.6h1v-3.3H0.7c-0.4,0-0.7-0.3-0.7-0.7V13c0-0.4,0.3-0.6,0.6-0.7l9.4-12C10.2,0.1,10.4,0,10.6,0l2.8,0c0.1,0,0.3,0,0.4,0.1c8.9,4,17.8,8.1,26.7,12.1h2.1c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.7,1.7-1.7,1.7h-0.8v4.6h3.4c0.3,0,0.5,0.2,0.5,0.5V22c0,0.3-0.2,0.5-0.5,0.5h-8.3c-0.3,0-0.5-0.2-0.5-0.5v-1.3c0-0.3,0.2-0.5,0.5-0.5h3.4v-4.6H16.6v0.9c0,0.3-0.3,0.6-0.6,0.6h-0.2v28.7h0.2c0.6,0,1.1,0.3,1.4,0.9L18.8,49.4z M14.5,2.1l1.1,8l0.8,0.8c0.2,0.2,0.3,0.4,0.3,0.7v0.6h20L14.5,2.1z M10.5,7.7h2.3c0.3,0,0.5,0.1,0.7,0.3l0.3,0.3l-0.9-6.6h-1.4L10.5,7.7z M9.8,20.9l4.1-3.9H9.8V20.9z M9.8,26.7l3.2-3.1H9.8L9.8,26.7z M9.8,32.4l3.2-3.1H9.8L9.8,32.4z M9.8,38.1l3.2-3.1H9.8L9.8,38.1z M9.4,3.7l-6.8,8.6h4.8V8.3c0-0.3,0.3-0.6,0.6-0.6h0.8L9.4,3.7z M9.8,43.9l3.2-3.1H9.8V43.9z M14.3,41.9l-4.1,3.9h4.1V41.9z M14.3,36.2L11,39.2h3.2V36.2z M14.3,30.4L11,33.5h3.2V30.4z M14.3,24.7L11,27.7h3.2V24.7z M14.3,18.9L11,22h3.2V18.9z M15.6,11.6l-2.9-2.9h-1.2V13h4.2L15.6,11.6z" />
                  </svg>
                </div>
                <div className="animateThis slideTop" style={{transitionDelay:"1s"}}>
                  <div className={`${styles.wcuHead} mb-2 text-uppercase`}>How we build</div>
                  <div className={`${styles.wcutxt} fw-light text-opacity-50 lh-lg text-white`}>
                    Exceptional craftsmanship, modern technology and
                    environmentally responsible practices— delivered with
                    disciplined attention to time, quality and budget.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 px-xl-5">
              <div className="wcuItem vstack gap-3">
                <div className={`${styles.wcuIcon} animateThis`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.6 50">
                    <path d="M48.9,18.2L46,15.5c-0.8-0.8-1.3-1.6-1.5-2.7l-0.9-3.9c-0.5-2.3-2.5-4-4.9-4.1l-4-0.2c-1.1-0.1-2-0.4-2.9-1.1l-3.2-2.4c-1.9-1.4-4.5-1.4-6.4,0l-3.2,2.4c-0.9,0.7-1.8,1-2.9,1.1l-4,0.2C9.6,4.9,7.6,6.5,7.1,8.9l-0.9,3.9c-0.3,1.1-0.7,1.9-1.5,2.7l-2.9,2.7c-1.8,1.6-2.2,4.2-1.1,6.3l1.8,3.6c0.5,1,0.7,1.9,0.5,3l-0.5,4c-0.3,2.4,1,4.6,3.2,5.5l3.7,1.6c1,0.4,1.8,1.1,2.4,2l2.2,3.4c1.3,2,3.7,2.9,6,2.2l3.8-1.2c1.1-0.3,2-0.3,3.1,0l3.8,1.2c2.3,0.7,4.7-0.2,6-2.2l2.2-3.4c0.6-0.9,1.4-1.6,2.4-2l3.7-1.6c2.2-0.9,3.5-3.2,3.2-5.5l-0.5-4c-0.1-1.1,0-2.1,0.5-3l1.8-3.6C51.1,22.4,50.7,19.9,48.9,18.2z M37.5,37.2c-3.1,3.1-7.4,5.1-12.2,5.1c-4.8,0-9.1-1.9-12.2-5.1C10,34.1,8.1,29.8,8.1,25s1.9-9.1,5.1-12.2c3.1-3.1,7.4-5.1,12.2-5.1c4.8,0,9.1,1.9,12.2,5.1c3.1,3.1,5.1,7.4,5.1,12.2S40.6,34.1,37.5,37.2z" />
                    <path d="M36.3,14c-2.8-2.8-6.7-4.6-11-4.6c-4.3,0-8.2,1.7-11,4.6c-2.8,2.8-4.6,6.7-4.6,11c0,4.3,1.7,8.2,4.6,11 c2.8,2.8,6.7,4.6,11,4.6c4.3,0,8.2-1.7,11-4.6c2.8-2.8,4.6-6.7,4.6-11C40.9,20.7,39.1,16.8,36.3,14z M34.1,22c-3.1,3.1-6.1,6.2-9.2,9.3c-0.9,0.9-2.4,0.9-3.3,0l-5.1-5.1c-0.9-0.9-0.9-2.4,0-3.3c0.9-0.9,2.4-0.9,3.3,0l3.5,3.5l7.6-7.7c0.9-0.9,2.4-0.9,3.3,0C35,19.6,35,21.1,34.1,22z" />
                  </svg>
                </div>
                <div className="animateThis slideTop" style={{transitionDelay:"1s"}}>
                  <div className={`${styles.wcuHead} mb-2 text-uppercase`}>
                    What we stand for
                  </div>
                  <div className={`${styles.wcutxt} fw-light text-opacity-50 lh-lg text-white`}>
                    Integrity, transparency, attention to detail and
                    uncompromising quality across every stage of development.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 px-xl-5">
              <div className="wcuItem vstack gap-3">
                <div className={`${styles.wcuIcon} animateThis`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M10.7,39.5c-4.3,1.3-7.9,4-10.4,7.7c-0.4,0.5-0.4,1.3-0.1,1.8C0.5,49.6,1.1,50,1.8,50h8.9V39.5z" />
                    <path d="M49.7,47.2c-2.5-3.7-6.2-6.4-10.4-7.7V50h8.9c0.7,0,1.3-0.4,1.6-0.9C50.1,48.5,50.1,47.8,49.7,47.2z" />
                    <path d="M14.3,50h21.4V39.5l-9.9,5c-0.3,0.1-0.5,0.2-0.8,0.2c-0.2,0-0.5-0.1-0.7-0.2l-10-4.4V50z" />
                    <path d="M37.5,23.2h-25V25c0,3.4,1.4,6.5,3.6,8.8c0,0.1,0,0.1,0,0.2v3l8.9,3.9l9-4.5v-2.5c0-0.1,0-0.1,0-0.2c2.2-2.3,3.6-5.3,3.6-8.8V23.2z" />
                    <path d="M40.6,14.3c0-0.1,0-0.3-0.1-0.4c-1.2-4.6-4.3-8.3-8.4-10.4v3.6c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8V2.3V1.8c0-1-0.8-1.8-1.8-1.8h-3.6c-1,0-1.8,0.8-1.8,1.8v0.5v4.9c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8V3.5c-4.1,2.1-7.3,5.8-8.4,10.4c0,0.1-0.1,0.3,0,0.4c-1.3,0.2-2.2,1.3-2.2,2.6c0,1.5,1.2,2.7,2.7,2.7h30.4c1.5,0,2.7-1.2,2.7-2.7C42.9,15.6,41.9,14.5,40.6,14.3z" />
                  </svg>
                </div>
                <div className="animateThis slideTop" style={{transitionDelay:"1s"}}>
                  <div className={`${styles.wcuHead} mb-2 text-uppercase`}>
                    How we collaborate
                  </div>
                  <div className={`${styles.wcutxt} fw-light text-opacity-50 lh-lg text-white`}>
                    Working closely with architects, engineers and designers to
                    transform ambitious client visions into inspiring realities.
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                <p className={`${styles.invTxt} lh-lg mb-0 `}>
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
                <p className={`${styles.invTxt} lh-lg mb-0 `}>
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
                <p className={`${styles.invTxt} lh-lg mb-0 `}>
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
