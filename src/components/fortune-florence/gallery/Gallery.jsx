"use client";

import Image from "next/image";
import React, { useEffect } from "react";

import styles from "@/components/fortune-florence/banner/FlorenceBanner.module.css";

import "swiper/css";
import "swiper/css/effect-fade";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Gallery = ({ images = [] }) => {
  useEffect(() => {
    let Fancybox = null;

    const initGallery = async () => {
      if (typeof window === "undefined") return;
      try {
        const FancyboxModule = await import("@fancyapps/ui");
        Fancybox = FancyboxModule.Fancybox;

        if (Fancybox) {
          Fancybox.bind("[data-fancybox]", {
            Carousel: {
              Thumbs: false,
              Toolbar: {
                display: {
                  left: ["counter"],
                  middle: [],
                  right: ["close"],
                },
              },
            },
          });
        }
      } catch (error) {
        console.error("Gallery initialization error:", error);
      }
    };

    initGallery();

    return () => {
      if (Fancybox) {
        Fancybox.destroy();
        Fancybox = null;
      }
    };
  }, []);

  // Guard against empty/undefined images
  const validImages = images.filter(Boolean);

  if (validImages.length === 0) return null;

  return (
    <section className="sitePadding py-5">
      <div className="container-fluid py-4">
        <div className="text-center mb-5">
          <h2 className="sectTitle textGold mb-3 revealText">Gallery</h2>
          <h3 className="mb-4 titleFont sectBigTitle textPrimary revealText">
            A Glimpse of the Extraordinary
          </h3>
        </div>

        <div className="row g-0 row-cols-2 justify-content-center rounded-4 overflow-hidden projGallery">
          {validImages.map((img, index) => (
            <div
              key={index}
              className={`col animateThis ${
                index % 2 === 0 ? "curtainRight" : "curtainLeft"
              } fadeIn`}
            >
              
               <a href={img.src}
                className={`${styles.projGalleryItem}`}
                data-fancybox="projectGallery"
              >
                <Image
                  src={img}
                  alt=""
                  className={`${styles.projGalImg}`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;