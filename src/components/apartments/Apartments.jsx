import Image from "next/image";
import React, { useEffect } from "react";
import banner from "@/assets/images/florence/banner.jpg";
import styles from "@/components/home/featured-project/FeaturedProject.module.css";
import Link from "next/link";
import projectImage1 from "@/assets/images/florence/item.jpg";
import projectImage1Hover from "@/assets/images/florence/item_hover.jpg";
import featuredProject1Logo from "@/assets/images/florence/logo.png";
import featuredProject2 from "@/assets/images/venetian/item.jpg";
import featuredProject2Hover from "@/assets/images/venetian/item_hover.jpg";
import featuredProject2Logo from "@/assets/images/venetian/logo.png";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const Apartments = () => {
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
      <div
        className="container-fluid border-bottom border-secondary"
        style={{ paddingTop: "10vh" }}
      >
        <div className="row justify-content-center mb-5">
          <div className="col-12 mb-4 text-center vstack">
            <h2 className="sectTitle textGold revealText fontJakarta">
              Projects by Locality
            </h2>
            <h1 className="sectBigTitle titleFont textPrimary mb-3 revealText">
              2 & 3 BHK Flats & Apartments in Borivali, Mumbai
            </h1>
          </div>

          <div className="col-lg-8">
            <div
              className={`${styles.blogBanner} rounded-4 border mb-5 overflow-hidden animateThis curtain`}
            >
              <Image src={banner} alt="Banner" className="w-100 h-100" />
            </div>

            <div className={`${styles.blogContent} fs-20 mb-5 fontJakarta`}>
              <p>
                Borivali, a vibrant locality in West Mumbai, is becoming
                increasingly popular among homebuyers and renters alike. With a
                diverse range of apartments in Borivali, including 2 BHK in
                Borivali and 3 BHK flats in Borivali, this area offers something
                for everyone. The real estate market here is thriving, making it
                an ideal place to buy flats in Borivali or explore luxurious
                living options.
              </p>
              <h2>Overview of Apartments in Borivali</h2>
              <p>
                Borivali is known for its excellent connectivity and
                well-developed infrastructure. The availability of{" "}
                <a href="">flats in Borivali</a> ranges from affordable options
                to luxury apartments in Mumbai. Whether you are looking for a
                cozy 2 BHK flat in Borivali or a spacious 3 BHK apartment in
                Borivali, the choices are abundant. The locality features
                various residential projects that cater to different budgets and
                preferences.
              </p>
              <h2>Popular Options: 2 BHK and 3 BHK Flats</h2>
              <p>
                Among the most sought-after properties are the 2 BHK in Borivali
                and <a href="">3 BHK flats in Borivali</a>. These configurations
                are perfect for families, offering ample space and comfort. The
                2 BHK flat in Mumbai typically features modern amenities and is
                located near essential services like schools, hospitals, and
                shopping centers. On the other hand, the 3 BHK luxury flats in
                Mumbai provide an upscale living experience with premium
                facilities.
              </p>
              <h2>Real Estate Trends</h2>
              <p>
                The demand for <a href="">flats for sale in Mumbai</a>,
                especially in Borivali, has seen a significant rise. Many buyers
                are keen on investing in this area due to its strategic location
                and potential for appreciation. Project like Purva Clermont is
                leading the way with their innovative designs and luxurious
                offerings. Those interested can easily find listings for 3 BHK
                in Mumbai that promise not only comfort but also a lifestyle
                upgrade.
              </p>
              <h2>Why Choose Borivali?</h2>
              <p>
                Choosing to live in Borivali means embracing a community that
                balances urban living with tranquility. The area boasts numerous
                parks, recreational facilities, and cultural spots, making it an
                attractive choice for families and professionals alike.
                Additionally, the local transport network ensures easy commuting
                to various parts of Mumbai, enhancing the appeal of buying an
                apartment in Borivali.
              </p>
              <h2>Investment Opportunities</h2>
              <p>
                Investing in residential projects in Mumbai, particularly those
                located in Borivali, can be highly rewarding. The market is
                witnessing consistent growth, with numerous options available
                for those looking to buy apartments in Mumbai. Properties here
                are not just homes; they are potential assets that can
                appreciate over time.
              </p>
              <h2>Luxury Living</h2>
              <p>
                For those seeking opulence, the market also features several
                luxury flats in Mumbai, including those within gated communities
                that offer exclusive amenities such as swimming pools, gyms, and
                landscaped gardens. These luxury apartments in Mumbai provide a
                lifestyle that combines comfort with sophistication.
              </p>
              <p>
                Whether you are searching for a cozy{" "}
                <a href="">2 BHK flat in Borivali</a> or a lavish 3 BHK luxury
                flat in Mumbai, this locality has it all. With its strategic
                location, excellent amenities, and vibrant community life,
                Borivali stands out as a prime destination for homebuyers and
                investors alike. As you explore your options to buy flats in
                Borivali, you'll discover a wealth of opportunities that cater
                to various needs and preferences. The real estate landscape of
                Borivali is flourishing with options ranging from affordable to
                luxury living. Buyers looking for quality homes will find plenty
                of choices among the numerous projects in Borivali, making it a
                hotspot for both living and investment purposes. Whether you
                prefer a modern 2 BHK apartment in Mumbai or spacious 3 BHK
                flats in Mumbai, Borivali promises a fulfilling lifestyle
                enriched by its community spirit and urban conveniences.
              </p>
            </div>

            <div className="col-12 order-md-3">
              <div className="animateThis">
                <div className={`${styles.projectSlider} projectSlider swiper`}>
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <Link href="/fortune_florence">
                        <div className={styles.projectItem}>
                          <div className={styles.projImgBox}>
                            <Image
                              src={projectImage1}
                              alt=""
                              fill
                              sizes="(max-width: 992px) 90vw, 45vw"
                              className={styles.pibImg}
                            />
                            <Image
                              src={projectImage1Hover}
                              alt=""
                              fill
                              sizes="(max-width: 992px) 90vw, 45vw"
                              className={`${styles.pibImg} ${styles.pibHoverImg}`}
                            />
                          </div>
                          <div className="w-100 h-100 d-flex flex-column justify-content-between position-relative z-3">
                            <div className="pitemHead d-flex justify-content-between align-items-start">
                              <div className="projStatus badge bgGold lh-sm fw-normal px-3 fontJakarta">
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
                                <h3
                                  className={`${styles.projName} titleFont mb-1`}
                                >
                                  Fortune Florence
                                </h3>
                                <div
                                  className={`${styles.projLocation} fontJakarta`}
                                >
                                  Borivali East, Mumbai
                                </div>
                              </div>
                              {/* <div>
                            <a href="" className="ctaBtn">
                              View More
                            </a>
                          </div> */}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="swiper-slide">
                      <Link href="/fortune_venetian">
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
                              <div className="projStatus badge bgGold lh-sm fw-normal px-3 fontJakarta">
                                New Launch
                              </div>
                              <div className={styles.projLogo}>
                                <Image
                                  src={featuredProject2Logo}
                                  alt="Fortune Florence"
                                  className={styles.projLogoImg}
                                />
                              </div>
                            </div>
                            <div className="pitemFoot d-flex justify-content-between align-items-end">
                              <div className="projDetail text-white">
                                <h3
                                  className={`${styles.projName} titleFont mb-1`}
                                >
                                  Fortune Venetian
                                </h3>
                                <div
                                  className={`${styles.projLocation} fontJakarta`}
                                >
                                  Andheri West, Mumbai
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apartments;
