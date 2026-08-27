import Image from "next/image";
import React, { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import arialView from "@/assets/images/arial_view.jpg";
import styles from "@/components/home/connectivity/Connectivity.module.css";
import Alumil from "@/assets/images/partners_logo/Alumil.png";
import AsianPaints from "@/assets/images/partners_logo/Asian-Paints.png";
import AstralPipes from "@/assets/images/partners_logo/Astral-Pipes.png";
import CPPlus from "@/assets/images/partners_logo/CP-Plus.png";
import Dulux from "@/assets/images/partners_logo/Dulux.png";
import Finolex from "@/assets/images/partners_logo/Finolex.png";
import Godrej from "@/assets/images/partners_logo/Godrej.png";
import Goldmedal from "@/assets/images/partners_logo/Goldmedal.png";
import HIkVision from "@/assets/images/partners_logo/HIk-Vision.png";
import Hitachi from "@/assets/images/partners_logo/Hitachi.png";
import Kajari from "@/assets/images/partners_logo/Kajaria.png";
import Kohler from "@/assets/images/partners_logo/Kohler.png";
import LT from "@/assets/images/partners_logo/L-T.png";
import Legrand from "@/assets/images/partners_logo/Legrand.png";
import Nirali from "@/assets/images/partners_logo/Nirali.png";
import Panasonic from "@/assets/images/partners_logo/Panasonic.png";
import Mitshibishi from "@/assets/images/partners_logo/Mitshibishi.png";
import Polycab from "@/assets/images/partners_logo/Polycab.png";
import PrincePiping from "@/assets/images/partners_logo/Prince-Piping.png";
import RakCeramics from "@/assets/images/partners_logo/Rak-Ceramics.png";
import RRKable from "@/assets/images/partners_logo/RR-Kable.png";
import Schindler from "@/assets/images/partners_logo/Schindler.png";
import Siemens from "@/assets/images/partners_logo/Siemens.png";
import Simona from "@/assets/images/partners_logo/Simona.png";
import Somany from "@/assets/images/partners_logo/Somany.png";
import Supreme from "@/assets/images/partners_logo/Supreme.png";
import Toshiba from "@/assets/images/partners_logo/Toshiba.png";
import Toto from "@/assets/images/partners_logo/Toto.png";

const partnerLogos = [
  { src: Alumil, alt: "Alumil" },
  { src: AsianPaints, alt: "Asian Paints" },
  { src: AstralPipes, alt: "Astral Pipes" },
  { src: CPPlus, alt: "CP Plus" },
  { src: Dulux, alt: "Dulux" },
  { src: Finolex, alt: "Finolex" },
  { src: Godrej, alt: "Godrej" },
  { src: Goldmedal, alt: "Goldmedal" },
  { src: HIkVision, alt: "Hikvision" },
  { src: Hitachi, alt: "Hitachi" },
  { src: Kajari, alt: "Kajaria" },
  { src: Kohler, alt: "Kohler" },
  { src: LT, alt: "L&T" },
  { src: Legrand, alt: "Legrand" },
  { src: Mitshibishi, alt: "Mitsubishi" },
  { src: Nirali, alt: "Nirali" },
  { src: Panasonic, alt: "Panasonic" },
  { src: Polycab, alt: "Polycab" },
  { src: PrincePiping, alt: "Prince Piping" },
  { src: RakCeramics, alt: "RAK Ceramics" },
  { src: RRKable, alt: "RR Kabel" },
  { src: Schindler, alt: "Schindler" },
  { src: Siemens, alt: "Siemens" },
  { src: Simona, alt: "Simona" },
  { src: Somany, alt: "Somany" },
  { src: Supreme, alt: "Supreme" },
  { src: Toshiba, alt: "Toshiba" },
  { src: Toto, alt: "Toto" },
];

const Connectivity = () => {
  useEffect(() => {
    const el = document.querySelector(".marqueStrip");
    if (!el) return undefined;

    const swiper = new Swiper(el, {
      modules: [Autoplay],
      slidesPerView: 3,
      spaceBetween: 25,
      speed: 5000,
      loop: true,
      grabCursor: false,
      allowTouchMove: false,
      autoplay: { delay: 0, disableOnInteraction: false },
      breakpoints: {
        576: { slidesPerView: 5, spaceBetween: 40 },
        992: { slidesPerView: 6, spaceBetween: 80 },
        1200: { slidesPerView: 8, spaceBetween: 100 },
      },
    });

    return () => swiper.destroy(true, true);
  }, []);

  return (
    <>
      <section className="sitePadding py-5 bg-white overflow-hidden">
        <div className="container-fluid py-5">
          <div className="row justify-content-between">
            <div className="col-lg-5 align-self-center mb-5 mb-lg-0">
              <h2 className="sectTitle textGold mb-3 revealText">
                CONNECTIVITY
              </h2>
              <h3 className="sectBigTitle titleFont textPrimary mb-3 revealText">
                At the Centre of Everything That Matters
              </h3>
              <p className="fs-20 mb-4 animateThis fadeIn">
                Whether you&apos;re ready to invest or simply exploring, our team
                is ready to guide you through every step of your journey home.
              </p>

              <div
                className={`${styles.projStatusBar} rounded-pill d-inline-flex gap-2 p-3 lh-1 animateThis fadeShrink`}
              >
                <span style={{ fontSize: "1.75rem", lineHeight: ".5rem" }}>
                  &bull;
                </span>{" "}
                On Schedule — Possession Dec 2025
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className={`${styles.arialViewWrap} bgPrimary rounded-4 overflow-hidden position-relative d-flex justify-content-center align-items-center z-1`}
              >
                <Image
                  src={arialView}
                  alt=""
                  className={`${styles.avwImg} w-100 h-100 object-fit-cover position-absolute z-n1 opacity-75 animateThis fadeGrow`}
                />

                <div
                  className={`${styles.avwProject} text-white text-center p-4 rounded-3 d-flex flex-column align-items-center gap-2 animateThis fadeShrink`}
                  style={{ transitionDelay: "1s" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    className="textGold"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  <h4 className="titleFont fw-normal mb-0">Fortune Elysium</h4>
                  <span className="text-white text-opacity-75">
                    Worli, Mumbai
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="w-100 py-4">
          <div className="container-fluid">
            <h2 className="sectTitle textGold text-center mb-5 revealText">
              TRUSTED MATERIAL & TECHNOLOGY PARTNERS
            </h2>
          </div>

          <div
            className={`${styles.marqueStrip} marqueStrip swiper animateThis fadeIn`}
          >
            <div className="swiper-wrapper">
              {partnerLogos.map((logo) => (
                <div className="swiper-slide" key={logo.alt}>
                  <Image src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connectivity;
