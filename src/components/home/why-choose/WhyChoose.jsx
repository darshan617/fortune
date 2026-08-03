import React from "react";
import styles from "@/components/home/why-choose/WhyChoose.module.css";

const WhyChoose = () => {
  return (
    <>
      <section className="sitePadding bgPrimary py-5 overflow-hidden">
        <div className="container-fluid py-5">
          <div className="w-100 mb-5 text-center">
            <h2 className="sectTitle textGold mb-3 revealText">
              WHY CHOOSE US
            </h2>
            <h3 className="sectBigTitle titleFont text-white mb-4 revealText">
              The Fortune Advantage
            </h3>
            <p className="text-white text-opacity-75 animateThis fadeIn">
              Unparalleled quality and transparency built into every single
              project.
            </p>
          </div>

          <div className="row text-center text-white pt-md-5 g-md-4 g-5">
            <div className="col-md-3 col-6">
              <div className="wcuItem vstack gap-3">
                <div className={`${styles.wcuIcon} animateThis`}>
                  <svg
                    width="30"
                    height="38"
                    viewBox="0 0 30 38"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.8999 25.3306L23.5076 14.723L21.3692 12.5846L12.8999 21.0538L8.66146 16.8154L6.52305 18.9538L12.8999 25.3306ZM14.9999 37.8845C10.6743 36.705 7.09292 34.1588 4.25575 30.246C1.41858 26.3332 0 21.9589 0 17.123V5.61536L14.9999 0L29.9999 5.61536V17.123C29.9999 21.9589 28.5813 26.3332 25.7441 30.246C22.9069 34.1588 19.3255 36.705 14.9999 37.8845ZM14.9999 34.723C18.4666 33.623 21.3333 31.423 23.5999 28.123C25.8666 24.823 26.9999 21.1563 26.9999 17.123V7.673L14.9999 3.19223L2.99993 7.673V17.123C2.99993 21.1563 4.13326 24.823 6.39993 28.123C8.66659 31.423 11.5333 33.623 14.9999 34.723Z" />
                  </svg>
                </div>
                <div
                  className="animateThis slideTop"
                  style={{ transitionDelay: "1s" }}
                >
                  <div className={`${styles.wcuHead} mb-1`}>
                    TRUSTED DEVELOPER
                  </div>
                  <div
                    className={`${styles.wcutxt} fw-light text-opacity-50 text-white`}
                  >
                    25+ Years of Trust
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="wcuItem vstack gap-3">
                <div className={`${styles.wcuIcon} animateThis`}>
                  <svg
                    width="39"
                    height="34"
                    viewBox="0 0 39 34"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 33.7883V11.2884L14.9999 0L24.3652 7.06146C23.7627 7.17428 23.1973 7.34351 22.6691 7.56915C22.1409 7.79479 21.6332 8.08324 21.1461 8.43451L14.9999 3.74991L2.99993 12.7884V30.7884H11.1153C11.1153 30.8089 11.1153 30.8294 11.1153 30.8499C11.1153 30.8704 11.1153 30.8909 11.1153 30.9114V33.7883H0ZM15.5 33.7883V30.5609C15.5 29.9664 15.6557 29.4121 15.9673 28.898C16.2788 28.3839 16.6897 27.9691 17.1999 27.6538C18.6948 26.7666 20.2647 26.0993 21.9096 25.6518C23.5544 25.2044 25.2512 24.9807 26.9999 24.9807C28.7486 24.9807 30.4454 25.2044 32.0903 25.6518C33.7352 26.0993 35.305 26.7666 36.7999 27.6538C37.3102 27.9691 37.7211 28.3839 38.0326 28.898C38.3441 29.4121 38.4999 29.9664 38.4999 30.5609V33.7883H15.5ZM18.6845 30.7884H35.3154V30.2499C34.0461 29.5191 32.7134 28.9582 31.3173 28.5672C29.9211 28.1761 28.482 27.9806 26.9999 27.9806C25.5179 27.9806 24.0788 28.1761 22.6826 28.5672C21.2864 28.9582 19.9537 29.5191 18.6845 30.2499V30.7884ZM27.0022 21.8845C25.4751 21.8845 24.1762 21.35 23.1057 20.281C22.0352 19.212 21.5 17.9139 21.5 16.3868C21.5 14.8596 22.0345 13.5608 23.1035 12.4903C24.1725 11.4198 25.4705 10.8845 26.9977 10.8845C28.5248 10.8845 29.8236 11.419 30.8941 12.488C31.9646 13.557 32.4999 14.8551 32.4999 16.3822C32.4999 17.9094 31.9654 19.2082 30.8964 20.2787C29.8274 21.3492 28.5293 21.8845 27.0022 21.8845ZM26.9999 18.8845C27.6948 18.8845 28.2852 18.6416 28.7711 18.1557C29.257 17.6698 29.5 17.0794 29.5 16.3845C29.5 15.6896 29.257 15.0992 28.7711 14.6133C28.2852 14.1274 27.6948 13.8845 26.9999 13.8845C26.305 13.8845 25.7147 14.1274 25.2287 14.6133C24.7428 15.0992 24.4999 15.6896 24.4999 16.3845C24.4999 17.0794 24.7428 17.6698 25.2287 18.1557C25.7147 18.6416 26.305 18.8845 26.9999 18.8845Z" />
                  </svg>
                </div>
                <div
                  className="animateThis slideTop"
                  style={{ transitionDelay: "1s" }}
                >
                  <div className={`${styles.wcuHead} mb-1`}>
                    PRIME LOCATIONS
                  </div>
                  <div
                    className={`${styles.wcutxt} fw-light text-opacity-50 text-white`}
                  >
                    Strategic Mumbai Hubs
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="wcuItem vstack gap-3">
                <div className={`${styles.wcuIcon} animateThis`}>
                  <svg
                    width="34"
                    height="39"
                    viewBox="0 0 34 39"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.61536 38.2306C2.60511 38.2306 1.74998 37.8806 1.04999 37.1806C0.349997 36.4807 0 35.6255 0 34.6153V7.84614C0 6.83589 0.349997 5.98077 1.04999 5.28078C1.74998 4.58078 2.60511 4.23079 3.61536 4.23079H6.38464V0H9.4615V4.23079H24.6153V0H27.6152V4.23079H30.3845C31.3947 4.23079 32.2499 4.58078 32.9499 5.28078C33.6499 5.98077 33.9999 6.83589 33.9999 7.84614V34.6153C33.9999 35.6255 33.6499 36.4807 32.9499 37.1806C32.2499 37.8806 31.3947 38.2306 30.3845 38.2306H3.61536ZM3.61536 35.2307H30.3845C30.5384 35.2307 30.6794 35.1666 30.8076 35.0384C30.9358 34.9102 30.9999 34.7691 30.9999 34.6153V15.8461H2.99993V34.6153C2.99993 34.7691 3.06403 34.9102 3.19225 35.0384C3.32046 35.1666 3.4615 35.2307 3.61536 35.2307ZM2.99993 12.8462H30.9999V7.84614C30.9999 7.69229 30.9358 7.55125 30.8076 7.42303C30.6794 7.29482 30.5384 7.23071 30.3845 7.23071H3.61536C3.4615 7.23071 3.32046 7.29482 3.19225 7.42303C3.06403 7.55125 2.99993 7.69229 2.99993 7.84614V12.8462ZM2.99993 12.8462V7.84614C2.99993 7.69229 2.99993 7.55125 2.99993 7.42303C2.99993 7.29482 2.99993 7.23071 2.99993 7.23071C2.99993 7.23071 2.99993 7.29482 2.99993 7.42303C2.99993 7.55125 2.99993 7.69229 2.99993 7.84614V12.8462Z" />
                  </svg>
                </div>
                <div
                  className="animateThis slideTop"
                  style={{ transitionDelay: "1s" }}
                >
                  <div className={`${styles.wcuHead} mb-1`}>
                    ON-TIME DELIVERY
                  </div>
                  <div
                    className={`${styles.wcutxt} fw-light text-opacity-50 text-white`}
                  >
                    Proven Track Record
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="wcuItem vstack gap-3">
                <div className={`${styles.wcuIcon} animateThis`}>
                  <svg
                    width="28"
                    height="42"
                    viewBox="0 0 28 42"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.61536 41.9999C2.61793 41.9999 1.76601 41.6467 1.05961 40.9402C0.353202 40.2338 0 39.3819 0 38.3845V3.61536C0 2.60511 0.349997 1.74998 1.04999 1.04999C1.74998 0.349997 2.60511 0 3.61536 0H22.4614C23.4589 0 24.3108 0.353202 25.0172 1.05961C25.7236 1.76601 26.0768 2.61793 26.0768 3.61536V9.93075C26.6255 10.0743 27.0832 10.3609 27.4499 10.7903C27.8165 11.2198 27.9999 11.7192 27.9999 12.2884V16.0576C27.9999 16.6268 27.8165 17.1262 27.4499 17.5557C27.0832 17.9852 26.6255 18.2717 26.0768 18.4153V38.3845C26.0768 39.3819 25.7236 40.2338 25.0172 40.9402C24.3108 41.6467 23.4589 41.9999 22.4614 41.9999H3.61536ZM3.61536 38.9999H22.4614C22.6409 38.9999 22.7884 38.9422 22.9038 38.8268C23.0192 38.7114 23.0769 38.564 23.0769 38.3845V3.61536C23.0769 3.43586 23.0192 3.28841 22.9038 3.17302C22.7884 3.05762 22.6409 2.99993 22.4614 2.99993H3.61536C3.43586 2.99993 3.28841 3.05762 3.17302 3.17302C3.05762 3.28841 2.99993 3.43586 2.99993 3.61536V38.3845C2.99993 38.564 3.05762 38.7114 3.17302 38.8268C3.28841 38.9422 3.43586 38.9999 3.61536 38.9999ZM2.99993 38.9999C2.99993 38.9999 2.99993 38.9422 2.99993 38.8268C2.99993 38.7114 2.99993 38.564 2.99993 38.3845V3.61536C2.99993 3.43586 2.99993 3.28841 2.99993 3.17302C2.99993 3.05762 2.99993 2.99993 2.99993 2.99993C2.99993 2.99993 2.99993 3.05762 2.99993 3.17302C2.99993 3.28841 2.99993 3.43586 2.99993 3.61536V38.3845C2.99993 38.564 2.99993 38.7114 2.99993 38.8268C2.99993 38.9422 2.99993 38.9999 2.99993 38.9999ZM13.0384 9.30764C13.541 9.30764 13.9615 9.13841 14.2999 8.79995C14.6384 8.4615 14.8076 8.04099 14.8076 7.53843C14.8076 7.03587 14.6384 6.61536 14.2999 6.2769C13.9615 5.93844 13.541 5.76921 13.0384 5.76921C12.5358 5.76921 12.1153 5.93844 11.7769 6.2769C11.4384 6.61536 11.2692 7.03587 11.2692 7.53843C11.2692 8.04099 11.4384 8.4615 11.7769 8.79995C12.1153 9.13841 12.5358 9.30764 13.0384 9.30764Z" />
                  </svg>
                </div>
                <div
                  className="animateThis slideTop"
                  style={{ transitionDelay: "1s" }}
                >
                  <div className={`${styles.wcuHead} mb-1`}>SMART PLANNING</div>
                  <div
                    className={`${styles.wcutxt} fw-light text-opacity-50 text-white`}
                  >
                    Future-Ready Homes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sitePadding pt-5">
        <div className="container-fluid pt-5">
          <div className={`${styles.videoWrap} position-relative rounded-4 bgPrimary`}>
            <video
              autoPlay
              muted
              loop
              className={`${styles.videoPlayer} w-100 h-100 rounded-4 d-block object-fit-cover animateThis curtain`}
              poster="video/hero.jpg"
            >
              <source src="video/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={`${styles.vidContent} d-flex flex-nowrap p-xxl-4 p-lg-2`}>
              <div></div>
              <div className={`${styles.vidOverText} align-self-end rounded-4 fs-20 text-white p-4 px-lg-5 shadow-lg`}>
                <p>
                  Fortune Group proudly presents Fortune Florence, a landmark
                  development that redefines modern luxury living. Thoughtfully
                  designed with premium 2, 2.5 & 3 BHK residences, world-class
                  amenities, and exceptional craftsmanship, every home offers
                  the perfect blend of comfort, elegance, and lasting value.
                  Experience a lifestyle where quality, convenience, and
                  timeless design come together.
                </p>
                <a href="" className="ctaBtn">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
