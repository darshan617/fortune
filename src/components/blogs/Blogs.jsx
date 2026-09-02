import Image from "next/image";
import React from "react";
import blogImage1 from "@/assets/images/blogs/blog1.avif";
import blogImage2 from "@/assets/images/blogs/blog2.avif";
import blogImage3 from "@/assets/images/blogs/blog3.avif";
import blogImage4 from "@/assets/images/blogs/blog1.avif";
import blogImage5 from "@/assets/images/blogs/blog2.avif";
import blogImage6 from "@/assets/images/blogs/blog3.avif";
import styles from "@/components/blogs/Blogs.module.css";

const Blogs = () => {
  return (
    <section className="sitePadding py-5 overflow-hidden">
      <div className="container-fluid" style={{ paddingTop: "15vh" }}>
        <div className="row justify-content-between g-4 mb-4">
          <div className="col-md text-center mb-5">
            <h2 className="sectTitle textGold mb-3 revealText fontJakarta">Blogs</h2>
            <h3 className="sectBigTitle titleFont textPrimary mb-0 revealText">
              Smart insights for modern <br />
            </h3>
            <h3 className="sectBigTitle titleFont textPrimary mb-0 revealText">
              home buyers, sellers, and dreamers
            </h3>
          </div>

          {/* <!-- <div className="col-md-auto d-flex align-items-center justify-content-center mb-5">
             <select className="projSelect">
                <option value="" selected>2026 - 27</option>
                <option value="">2025 - 26</option>
                <option value="">2024 - 25</option>
                <option value="">2023 - 24</option>
                <option value="">2022 - 23</option>
                <option value="">2021 - 22</option>
             </select>
          </div> --> */}

          <div className="col-12">
            <div
              className={`${styles.blogList} row mb-5 g-md-5 g-4 row-cols-xl-3 row-cols-md-2 row-cols-1`}
            >
              <div className="col animateThis fadeGrow">
                <div
                  className={`${styles.blogItem} rounded-4 d-flex flex-column h-100`}
                >
                  <div
                    className={`${styles.blogThumb} rounded-3 overflow-hidden`}
                  >
                    <Image
                      src={blogImage1}
                      alt="blogImage1"
                      className={`${styles.blogImg} w-100`}
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="p-4">
                    <div className={`${styles.blogDate} textGold mb-2`}>
                      05-03-2025
                    </div>
                    <h3
                      className={`${styles.blogHead} titleFont fs-20 lh-base mb-3`}
                    >
                      The Rise of the Peripheral City: Why the Edges of
                      Bengaluru Are Getting More Attention
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi fuga quo ducimus ipsum autem? Vero voluptatum, ...
                    </p>
                  </div>
                  <a
                    href="/"
                    className={`${styles.stretchedLink} stretched-link`}
                  ></a>
                </div>
              </div>

              <div className="col animateThis fadeGrow">
                <div
                  className={`${styles.blogItem} rounded-4 d-flex flex-column h-100`}
                >
                  <div
                    className={`${styles.blogThumb} rounded-3 overflow-hidden`}
                  >
                    <Image
                      src={blogImage2}
                      alt="blogImage2"
                      className={`${styles.blogImg} w-100`}
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="p-4">
                    <div className={`${styles.blogDate} textGold mb-2`}>
                      05-03-2025
                    </div>
                    <h3
                      className={`${styles.blogHead} titleFont fs-20 lh-base mb-3`}
                    >
                      The Sunday Test: What Your Home Feels Like When You're Not
                      in a Hurry
                    </h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ratione illum accusamus cupiditate quas odio ut id ...
                    </p>
                  </div>
                  <a
                    href="/"
                    className={`${styles.stretchedLink} stretched-link`}
                  ></a>
                </div>
              </div>

              <div className="col animateThis fadeGrow">
                <div
                  className={`${styles.blogItem} rounded-4 d-flex flex-column h-100`}
                >
                  <div
                    className={`${styles.blogThumb} rounded-3 overflow-hidden`}
                  >
                    <Image
                      src={blogImage3}
                      alt="blogImage3"
                      className={`${styles.blogImg} w-100`}
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="p-4">
                    <div className={`${styles.blogDate} textGold mb-2`}>
                      05-03-2025
                    </div>
                    <h3
                      className={`${styles.blogHead} titleFont fs-20 lh-base mb-3`}
                    >
                      The Rise of Social Spaces Within Residential Projects
                    </h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis necessitatibus ad maiores a ...
                    </p>
                  </div>
                  <a
                    href="/"
                    className={`${styles.stretchedLink} stretched-link`}
                  ></a>
                </div>
              </div>

              <div className="col animateThis fadeGrow">
                <div
                  className={`${styles.blogItem} rounded-4 d-flex flex-column h-100`}
                >
                  <div
                    className={`${styles.blogThumb} rounded-3 overflow-hidden`}
                  >
                    <Image
                      src={blogImage4}
                      alt="blogImage4"
                      className={`${styles.blogImg} w-100`}
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="p-4">
                    <div className={`${styles.blogDate} textGold mb-2`}>
                      05-03-2025
                    </div>
                    <h3
                      className={`${styles.blogHead} titleFont fs-20 lh-base mb-3`}
                    >
                      The Rise of the Peripheral City: Why the Edges of
                      Bengaluru Are Getting More Attention
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi fuga quo ducimus ipsum autem? Vero voluptatum, ...
                    </p>
                  </div>
                  <a
                    href="/"
                    className={`${styles.stretchedLink} stretched-link`}
                  ></a>
                </div>
              </div>

              <div className="col animateThis fadeGrow">
                <div
                  className={`${styles.blogItem} rounded-4 d-flex flex-column h-100`}
                >
                  <div
                    className={`${styles.blogThumb} rounded-3 overflow-hidden`}
                  >
                    <Image
                      src={blogImage5}
                      alt="blogImage5"
                      className={`${styles.blogImg} w-100`}
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="p-4">
                    <div className={`${styles.blogDate} textGold mb-2`}>
                      05-03-2025
                    </div>
                    <h3
                      className={`${styles.blogHead} titleFont fs-20 lh-base mb-3`}
                    >
                      The Sunday Test: What Your Home Feels Like When You're Not
                      in a Hurry
                    </h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ratione illum accusamus cupiditate quas odio ut id ...
                    </p>
                  </div>
                  <a
                    href="/"
                    className={`${styles.stretchedLink} stretched-link`}
                  ></a>
                </div>
              </div>

              <div className="col animateThis fadeGrow">
                <div
                  className={`${styles.blogItem} rounded-4 d-flex flex-column h-100`}
                >
                  <div
                    className={`${styles.blogThumb} rounded-3 overflow-hidden`}
                  >
                    <Image
                      src={blogImage6}
                      alt="blogImage6"
                      className={`${styles.blogImg} w-100`}
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="p-4">
                    <div className={`${styles.blogDate} textGold mb-2`}>
                      05-03-2025
                    </div>
                    <h3
                      className={`${styles.blogHead} titleFont fs-20 lh-base mb-3`}
                    >
                      The Rise of Social Spaces Within Residential Projects
                    </h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis necessitatibus ad maiores a ...
                    </p>
                  </div>
                  <a
                    href="/"
                    className={`${styles.stretchedLink} stretched-link`}
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
