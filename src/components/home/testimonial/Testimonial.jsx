import React, { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "@/components/home/testimonial/Testimonial.module.css"

const testimonials = [
  {
    review:
      "Fortune Group delivered exactly what they promised. The attention to detail, modern design, and professional support gave us complete confidence in our investment.",
    name: "Shubh Jain",
    info: "Resident, Fortune Florence - Andheri West",
  },
  {
    review:
      "Fortune Group delivered exactly what they promised. The attention to detail, modern design, and professional support gave us complete confidence in our investment.",
    name: "Rohit Palav",
    info: "Resident, Fortune Florence - Andheri West",
  },
  {
    review:
      "Fortune Group delivered exactly what they promised. The attention to detail, modern design, and professional support gave us complete confidence in our investment.",
    name: "Mugdha Manik",
    info: "Resident, Fortune Florence - Andheri West",
  },
  {
    review:
      "Fortune Group delivered exactly what they promised. The attention to detail, modern design, and professional support gave us complete confidence in our investment.",
    name: "Pratik Singh",
    info: "Resident, Fortune Florence - Andheri West",
  },
  {
    review:
      "Fortune Group delivered exactly what they promised. The attention to detail, modern design, and professional support gave us complete confidence in our investment.",
    name: "Johan Masquetta",
    info: "Resident, Fortune Florence - Andheri West",
  },
  {
    review:
      "Fortune Group delivered exactly what they promised. The attention to detail, modern design, and professional support gave us complete confidence in our investment.",
    name: "Darshan Iyer",
    info: "Resident, Fortune Florence - Andheri West",
  },
];

const Testimonial = () => {
  useEffect(() => {
    const el = document.querySelector(".testimSwiper");
    if (!el) return undefined;

    const swiper = new Swiper(el, {
      modules: [Autoplay, Pagination],
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 1000,
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slideToClickedSlide: true,
      autoplay: { delay: 7000, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: {
        576: { slidesPerView: 1.2 },
        768: { slidesPerView: 1.5 },
        1200: { slidesPerView: 1.75 },
      },
    });

    return () => swiper.destroy(true, true);
  }, []);

  return (
    <section className={`${styles.testimonialSection}"py-5 overflow-hidden`}>
      <div className="w-100 py-5">
        <div className="text-center mb-5">
          <h2 className="sectTitle textGold mb-3 revealText">TESTIMONIALS</h2>
          <h3 className="sectBigTitle titleFont textPrimary mb-0 revealText">
            Voices of Trust
          </h3>
        </div>

        <div className="animateThis fadeShrink">
          <div className={`${styles.testimSwiper} testimSwiper swiper px-3`}>
            <div className="swiper-wrapper">
              {testimonials.map((item, index) => (
                <div className="swiper-slide" key={index}>
                  <div className={`${styles.testimItem} d-flex flex-column gap-4`}>
                    <div className={`${styles.tiReview} titleFont`}>
                      <p>{item.review}</p>
                    </div>
                    <div className={`${styles.tiUser} ti_user pt-4 d-flex align-items-center gap-3`}>
                      <div className={`${styles.tiUserImg} ti_userImg rounded-circle overflow-hidden`}></div>
                      <div className={`${styles.tiUserInfo}`}>
                        <strong className={`${styles.tiUserName} ti_userName d-block fw-bold textGold`}>
                          {item.name}
                        </strong>
                        <small>{item.info}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;