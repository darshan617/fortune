import React, { useEffect, useState } from "react";
import Image from "next/image";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import styles from "@/components/home/featured-project/FeaturedProject.module.css";
import Link from "next/link";

const FeaturedProject = ({
  title,
  description,
  projectImage1,
  projectImage1Hover,
  featuredProject1Logo,
  featuredProject2,
  featuredProject2Hover,
  featuredProject2Logo,
  projectStatus1,
  projectStatus2,
  showFilter = false,
}) => {
  const [filter, setFilter] = useState("all");
  const [displayedFilter, setDisplayedFilter] = useState("all");
  const [isFading, setIsFading] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const projects = [
    {
      key: "florence",
      href: "/fortune_florence",
      status: "ongoing",
      statusLabel: projectStatus1,
      image: projectImage1,
      hover: projectImage1Hover,
      logo: featuredProject1Logo,
      name: "Fortune Florence",
      location: "Borivali East, Mumbai",
    },
    {
      key: "venetian",
      href: "/fortune_venetian",
      status: "upcoming",
      statusLabel: projectStatus2,
      image: featuredProject2,
      hover: featuredProject2Hover,
      logo: featuredProject2Logo,
      name: "Fortune Venetian",
      location: "Andheri West, Mumbai",
    },
  ];

  const visibleProjects =
    showFilter && displayedFilter !== "all"
      ? projects.filter((project) => project.status === displayedFilter)
      : projects;

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
  }, [displayedFilter, showFilter]);

  useEffect(() => {
    if (!isFading) return undefined;

    const timeout = setTimeout(() => {
      setDisplayedFilter(filter);
      setIsFading(false);
      setIsEntering(true);
    }, 600);

    return () => clearTimeout(timeout);
  }, [isFading, filter]);

  useEffect(() => {
    if (!isEntering) return undefined;

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsEntering(false));
    });

    return () => cancelAnimationFrame(frame);
  }, [isEntering]);

  const handleFilterChange = (event) => {
    const nextFilter = event.target.value;
    if (nextFilter === filter) return;
    setFilter(nextFilter);
    setIsFading(true);
  };

  return (
    <section
      className={`${styles.featuredProject} sitePadding overflow-hidden`}
    >
      <div className="container-fluid py-5">
        <div className="row justify-content-between align-items-end g-4 mb-4">
          <div className="col-xxl-6 col-lg-6 col-md order-md-1">
            {title}
            {description}
          </div>

          <div className="col-12 order-md-3">
            <div className="animateThis">
              <div
                key={displayedFilter}
                className={`${styles.projectSlider} projectSlider swiper`}
              >
                <div className="swiper-wrapper">
                  {visibleProjects.map((project) => (
                    <div
                      className={`swiper-slide project-item${
                        isFading || isEntering ? " fade-out" : ""
                      }`}
                      key={project.key}
                    >
                      <Link href={project.href}>
                        <div className={styles.projectItem}>
                          <div className={styles.projImgBox}>
                            <Image
                              src={project.image}
                              alt=""
                              fill
                              sizes="(max-width: 992px) 90vw, 45vw"
                              className={styles.pibImg}
                            />
                            <Image
                              src={project.hover}
                              alt=""
                              fill
                              sizes="(max-width: 992px) 90vw, 45vw"
                              className={`${styles.pibImg} ${styles.pibHoverImg}`}
                            />
                          </div>
                          <div className="w-100 h-100 d-flex flex-column justify-content-between position-relative z-3">
                            <div className="pitemHead d-flex justify-content-between align-items-start">
                              <div className="projStatus badge bgGold lh-sm fw-normal px-3 ">
                                {project.statusLabel}
                              </div>
                              <div className={styles.projLogo}>
                                <Image
                                  src={project.logo}
                                  alt={project.name}
                                  className={styles.projLogoImg}
                                />
                              </div>
                            </div>
                            <div className="pitemFoot d-flex justify-content-between align-items-end">
                              <div className="projDetail text-white">
                                <h3
                                  className={`${styles.projName} titleFont mb-1`}
                                >
                                  {project.name}
                                </h3>
                                <div className={`${styles.projLocation} `}>
                                  {project.location}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}

                  {/* <div className="swiper-slide">
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
                  </div> */}

                  {/* <div className="swiper-slide">
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
                  </div> */}
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
              {visibleProjects.length === 0 && (
                <p id="noProjectsMsg" className="fade-in mb-0 text-center">
                  No projects found.
                </p>
              )}
            </div>
          </div>

          {showFilter ? (
            <div className="col-md-auto d-flex align-items-center justify-content-center mb-5 order-md-2">
              <select
                className="projSelect"
                id="projectFilter"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="all">All Projects</option>
                <option value="ongoing">Ongoing Projects</option>
                <option value="upcoming">Upcoming Projects</option>
              </select>
            </div>
          ) : (
            <div className="col-md-auto order-md-2 text-md-end text-center animateThis fadeShrink ">
              <a href="/projects" className="ctaBtn ghost">
                View All
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
