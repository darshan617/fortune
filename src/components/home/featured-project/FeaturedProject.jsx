import React, { useEffect } from "react";
import Image from "next/image";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import featuredProject1 from "@/assets/images/florence/item.jpg";
import featuredProject1Hover from "@/assets/images/florence/item_hover.jpg";
import featuredProject1Logo from "@/assets/images/florence/logo.png";
import featuredProject2 from "@/assets/images/Venetian/item.jpg";
import featuredProject2Hover from "@/assets/images/Venetian/item_hover.jpg";
import featuredProject3 from "@/assets/images/florence/item.jpg";
import featuredProject3Hover from "@/assets/images/florence/item_hover.jpg";
import featuredProject3Logo from "@/assets/images/florence/logo.png";
import featuredProject4 from "@/assets/images/Venetian/item.jpg";
import featuredProject4Hover from "@/assets/images/Venetian/item_hover.jpg";
import styles from "@/components/home/featured-project/FeaturedProject.module.css";

const FeaturedProject = () => {
  useEffect(() => {
    const el = document.querySelector(".projectSlider");
    if (!el) return undefined;

    const swiper = new Swiper(el, {
      modules: [Navigation],
      slidesPerView: 1.1,
      spaceBetween: 20,
      speed: 1000,
      slideToClickedSlide: true,
      navigation: { nextEl: ".projNext", prevEl: ".projPrev" },
      breakpoints: {
        576: { slidesPerView: 1.4 },
        768: { slidesPerView: 1.2 },
        992: { slidesPerView: 2 },
      },
    });

    return () => swiper.destroy(true, true);
  }, []);

  return (
    <section className="sitePadding py-5 overflow-hidden">
      <div className="container-fluid py-5">
        <div className="row justify-content-between align-items-end g-4 mb-4">
          <div className="col-xxl-4 col-lg-6 col-md order-md-1">
            <h2 className="sectTitle textGold mb-3 revealText">
              FEATURED PROJECTS
            </h2>
            <h3 className="sectBigTitle titleFont textPrimary mb-0 revealText">
              Our Signature Addresses
            </h3>
          </div>

          <div className="col-12 order-md-3">
            <div className="animateThis">
              <div className={`${styles.projectSlider} projectSlider swiper`}>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className={styles.projectItem}>
                      <div className={styles.projImgBox}>
                        <Image
                          src={featuredProject1}
                          alt=""
                          fill
                          sizes="(max-width: 992px) 90vw, 45vw"
                          className={styles.pibImg}
                        />
                        <Image
                          src={featuredProject1Hover}
                          alt=""
                          fill
                          sizes="(max-width: 992px) 90vw, 45vw"
                          className={`${styles.pibImg} ${styles.pibHoverImg}`}
                        />
                      </div>
                      <div className="w-100 h-100 d-flex flex-column justify-content-between position-relative z-3">
                        <div className="pitemHead d-flex justify-content-between align-items-start">
                          <div className="projStatus badge bgGold lh-sm fw-normal px-3">
                            Ongoing Project
                          </div>
                          <div className={styles.projLogo}>
                            <Image
                              src={featuredProject1Logo}
                              alt="Fortune Florence"
                              className={styles.projLogoImg}
                            />
                          </div>
                        </div>
                        <div className="pitemFoot d-flex justify-content-between align-items-end">
                          <div className="projDetail text-white">
                            <h3 className={`${styles.projName} titleFont mb-1`}>
                              Fortune Florence
                            </h3>
                            <div className={styles.projLocation}>
                              Borivali East, Mumbai
                            </div>
                          </div>
                          <div>
                            <a href="" className="ctaBtn">
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className={styles.projectItem}>
                      <div className={styles.projImgBox}>
                        <Image
                          src={featuredProject2}
                          alt=""
                          fill
                          sizes="(max-width: 992px) 90vw, 45vw"
                          className={styles.pibImg}
                        />
                        <Image
                          src={featuredProject2Hover}
                          alt=""
                          fill
                          sizes="(max-width: 992px) 90vw, 45vw"
                          className={`${styles.pibImg} ${styles.pibHoverImg}`}
                        />
                      </div>
                      <div className="w-100 h-100 d-flex flex-column justify-content-between position-relative z-3">
                        <div className="pitemHead d-flex justify-content-between align-items-start">
                          <div className="projStatus badge bgGold lh-sm fw-normal px-3">
                            New Launch
                          </div>
                          <div className={styles.projLogo} />
                        </div>
                        <div className="pitemFoot d-flex justify-content-between align-items-end">
                          <div className="projDetail text-white">
                            <h3 className={`${styles.projName} titleFont mb-1`}>
                              Fortune Venetian
                            </h3>
                            <div className={styles.projLocation}>
                              Andheri West, Mumbai
                            </div>
                          </div>
                          <div>
                            <a href="" className="ctaBtn">
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className={styles.projectItem}>
                      <div className={styles.projImgBox}>
                        <Image
                          src={featuredProject3}
                          alt=""
                          fill
                          sizes="(max-width: 992px) 90vw, 45vw"
                          className={styles.pibImg}
                        />
                        <Image
                          src={featuredProject3Hover}
                          alt=""
                          fill
                          sizes="(max-width: 992px) 90vw, 45vw"
                          className={`${styles.pibImg} ${styles.pibHoverImg}`}
                        />
                      </div>
                      <div className="w-100 h-100 d-flex flex-column justify-content-between position-relative z-3">
                        <div className="pitemHead d-flex justify-content-between align-items-start">
                          <div className="projStatus badge bgGold lh-sm fw-normal px-3">
                            Ongoing Project
                          </div>
                          <div className={styles.projLogo}>
                            <Image
                              src={featuredProject3Logo}
                              alt="Fortune Florence"
                              className={styles.projLogoImg}
                            />
                          </div>
                        </div>
                        <div className="pitemFoot d-flex justify-content-between align-items-end">
                          <div className="projDetail text-white">
                            <h3 className={`${styles.projName} titleFont mb-1`}>
                              Fortune Florence
                            </h3>
                            <div className={styles.projLocation}>
                              Borivali East, Mumbai
                            </div>
                          </div>
                          <div>
                            <a href="" className="ctaBtn">
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className={styles.projectItem}>
                      <div className={styles.projImgBox}>
                        <Image
                          src={featuredProject4}
                          alt=""
                          fill
                          sizes="(max-width: 992px) 90vw, 45vw"
                          className={styles.pibImg}
                        />
                        <Image
                          src={featuredProject4Hover}
                          alt=""
                          fill
                          sizes="(max-width: 992px) 90vw, 45vw"
                          className={`${styles.pibImg} ${styles.pibHoverImg}`}
                        />
                      </div>
                      <div className="w-100 h-100 d-flex flex-column justify-content-between position-relative z-3">
                        <div className="pitemHead d-flex justify-content-between align-items-start">
                          <div className="projStatus badge bgGold lh-sm fw-normal px-3">
                            New Launch
                          </div>
                          <div className={styles.projLogo} />
                        </div>
                        <div className="pitemFoot d-flex justify-content-between align-items-end">
                          <div className="projDetail text-white">
                            <h3 className={`${styles.projName} titleFont mb-1`}>
                              Fortune Venetian
                            </h3>
                            <div className={styles.projLocation}>
                              Andheri West, Mumbai
                            </div>
                          </div>
                          <div>
                            <a href="" className="ctaBtn">
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiperBtn next projNext">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                    />
                  </svg>
                </div>
                <div className="swiperBtn prev projPrev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-auto order-md-2 text-md-end text-center animateThis fadeShrink">
            <a href="" className="ctaBtn ghost">
              View All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
