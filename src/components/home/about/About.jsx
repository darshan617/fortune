import Image from "next/image";
import React from "react";
import styles from "@/components/home/about/About.module.css";
import aboutHero from "@/assets/images/aboutHero.jpg";

const About = () => {
  return (
    <>
      <section className="sitePadding py-5">
        <div className="container-fluid py-5">
          <div className="row justify-content-between g-md-0 g-4">
            <div className="col-xl-7 col-md-6 pe-xl-5 position-relative">
              <div className={`${styles.aboutImgWrap}`}>
                <div className={`${styles.aiwImgBox} overflow-hidden`}>
                  <Image
                    src={aboutHero}
                    alt=""
                    className={`${styles.aiwImg} w-100 h-100 object-fit-cover`}
                  />
                </div>
              </div>
              <div className="aiwYearBox bgPrimary py-sm-4 px-md-5 px-sm-4 p-3 rounded-4 shadow-lg position-absolute bottom-0 end-0">
                <div
                  className={`${styles.aiwYear} textGold lh-1 fw-semibold mb-2`}
                >
                  <span className="counter" data-target="25"></span>+
                </div>
                <div className="aiwLabel text-white text-opacity-75">
                  Years of Building
                  <br /> Trust in Mumbai
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-6 p-xl-5 ps-md-5">
              <div
                className="pt-xxl-4 vstack gap-3 gap-xl-4 mb-4 sticky-top"
                style={{ top: "100px" }}
              >
                <h2 className="sectTitle textGold mb-0 revealText">
                  About Fortune Group
                </h2>
                <h3 className="sectBigTitle titleFont textPrimary mb-0 revealText">
                  Crafting Icons. Delivering Distinction.
                </h3>
                <p className="fs-20 lh-base mb-0 animateThis fadeIn ">
                  For over a decade, Fortune Group has been creating
                  thoughtfully designed residential developments that combine
                  quality craftsmanship, innovative planning, and timeless
                  architecture. Every project is built with a commitment to
                  excellence, delivering homes that offer comfort, value, and a
                  lifestyle for generations to come.
                </p>
                <div className="animateThis fadeIn ">
                  <a href="/about-us" className="ctaBtn ghost">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sitePadding bgPrimary py-5">
        <div className="container-fluid py-4">
          <div className="row gx-lg-5">
            <div className="col-lg-auto pe-5 pt-4">
              <h2 className="sectTitle textGold revealText">OUR PHILOSOPHY</h2>
            </div>
            <div className="col-lg ps-xl-5">
              <figure className="ps-xl-5">
                <blockquote className="sectBigTitle titleFont fw-light text-white lh-base mb-5 revealText">
                  "We don't just build structures — we create sanctuaries where
                  generations begin their finest chapters. Every detail, every
                  material, every space is a{" "}
                  <i className="textGold">promise kept</i>."
                </blockquote>
                <figcaption className="fs-20 d-flex align-items-center gap-4 animateThis slideRight">
                  <span
                    className="bgGold d-block"
                    style={{ width: "7%", height: "2px" }}
                  ></span>
                  <span className="text-white-50">
                    {" "}
                    Faizan Malik Rozani - Founder & Chairman, Fortune Group{" "}
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
