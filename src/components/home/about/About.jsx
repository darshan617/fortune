import Image from "next/image";
import React, { useEffect } from "react";
import styles from "@/components/home/about/About.module.css";
import aboutHero from "@/assets/images/aboutHero.jpg";

const About = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    const animationDuration = 1500;

    const startCounterAnimation = (element) => {
      const target = +element.getAttribute("data-target");
      const start = 0;
      let startTime = null;

      const animate = (timestamp) => {
        if (element.dataset.animating === "false") return;

        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;

        const progressRatio = Math.min(progress / animationDuration, 1);
        const currentValue = Math.floor(
          progressRatio * (target - start) + start,
        );

        element.textContent = currentValue;

        if (progress < animationDuration) {
          requestAnimationFrame(animate);
        } else {
          element.textContent = target;
        }
      };

      element.dataset.animating = "true";
      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounterAnimation(entry.target);
          } else {
            entry.target.dataset.animating = "false";
            entry.target.textContent = "0";
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    counters.forEach((counter) => observer.observe(counter));
  }, []);
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
              <div
                className="aiwYearBox bgPrimary py-sm-4 px-md-5 px-sm-4 p-3 rounded-4 shadow-lg position-absolute bottom-0 end-0"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                <div className="aiwLabel text-white text-opacity-75">
                  Founded in
                </div>
                <div
                  className={`${styles.aiwYear} textGold lh-1 fw-semibold mb-2`}
                >
                  {/* <div className="aiwLabel text-white text-opacity-75">
                  Years of Building
                  <br /> Trust in Mumbai
                </div> */}
                  <span className="counter" data-target="2016"></span>
                </div>
                {/* <div className="aiwLabel text-white text-opacity-75">
                  Years of Building
                  <br /> Trust in Mumbai
                </div> */}
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
                <p
                  className="fs-20 lh-base mb-0 animateThis fadeIn "
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  For over a decade, Fortune Group has been creating
                  thoughtfully designed residential developments that combine
                  quality craftsmanship, innovative planning, and timeless
                  architecture. Every project is built with a commitment to
                  excellence, delivering homes that offer comfort, value, and a
                  lifestyle for generations to come.
                </p>
                <div className="animateThis fadeIn ">
                  <a
                    href="/about-us"
                    className="ctaBtn ghost"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
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
                <blockquote className="blockquote ">
                  <h3 className="sectBigTitle titleFont fw-light text-white lh-base revealText d-inline-block">
                    "We don't just build structures — we create sanctuaries
                    where generations begin their finest chapters. Every detail,
                    every material, every space is a{" "}
                    <span
                      className="textGold fw-normal"
                      style={{ fontStyle: "italic" }}
                    >
                      promises kept
                    </span>
                    <span className="sectBigTitle text-white">."</span>
                  </h3>
                </blockquote>
                <figcaption className="fs-20 d-flex align-items-center gap-4 animateThis slideRight">
                  <span
                    className="bgGold d-block"
                    style={{ width: "7%", height: "2px" }}
                  ></span>
                  <span className="text-white-50">
                    {" "}
                    Akbar Momin - Founder & Chairman, Fortune Group{" "}
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
