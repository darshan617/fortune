import Image from "next/image";
import React from "react";
import blogImage1 from "@/assets/images/blogs/blog1.avif";
import blogImage2 from "@/assets/images/blogs/blog2.avif";
import blogImage3 from "@/assets/images/blogs/blog3.avif";
import styles from "@/components/blogs/Blogs.module.css";
import { useRouter } from "next/navigation";

const blogData = [
  {
    id: 1,
    image: blogImage2,
    alt: "blogImage1",
    date: "05-03-2025",
    title:
      "The Rise of the Peripheral City: Why the Edges of Bengaluru Are Getting More Attention",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga quo ducimus ipsum autem? Vero voluptatum, ...",
  },
  {
    id: 2,
    image: blogImage3,
    alt: "blogImage2",
    date: "05-03-2025",
    title:
      "The Sunday Test: What Your Home Feels Like When You're Not in a Hurry",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione illum accusamus cupiditate quas odio ut id ...",
  },
  {
    id: 3,
    image: blogImage1,
    alt: "blogImage3",
    date: "05-03-2025",
    title: "The Rise of Social Spaces Within Residential Projects",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus ad maiores a ...",
  },
  {
    id: 4,
    image: blogImage2,
    alt: "blogImage4",
    date: "05-03-2025",
    title:
      "The Rise of the Peripheral City: Why the Edges of Bengaluru Are Getting More Attention",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga quo ducimus ipsum autem? Vero voluptatum, ...",
  },
  {
    id: 5,
    image: blogImage3,
    alt: "blogImage5",
    date: "05-03-2025",
    title:
      "The Sunday Test: What Your Home Feels Like When You're Not in a Hurry",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione illum accusamus cupiditate quas odio ut id ...",
  },
  {
    id: 6,
    image: blogImage1,
    alt: "blogImage6",
    date: "05-03-2025",
    title: "The Rise of Social Spaces Within Residential Projects",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus ad maiores a ...",
  },
];

const Blogs = () => {
  const router = useRouter();
  return (
    <section className="sitePadding py-5 overflow-hidden">
      <div className="container-fluid" style={{ paddingTop: "15vh" }}>
        <div className="row justify-content-between g-4 mb-4">
          <div className="col-md text-center mb-5">
            <h2 className="sectTitle textGold mb-3 revealText ">Blogs</h2>
            <h3 className="sectBigTitle titleFont textPrimary mb-0 revealText">
              Smart insights for modern <br />
            </h3>
            <h3 className="sectBigTitle titleFont textPrimary mb-0 revealText">
              home buyers, sellers, and dreamers
            </h3>
          </div>

          <div className="col-12">
            <div
              className={`${styles.blogList} row mb-5 g-md-5 g-4 row-cols-xl-3 row-cols-md-2 row-cols-1`}
            >
              {blogData.map((blog) => (
                <div className="col animateThis fadeGrow" key={blog.id}>
                  <div
                    className={`${styles.blogItem} rounded-4 d-flex flex-column h-100`}
                  >
                    <div
                      className={`${styles.blogThumb} rounded-3 overflow-hidden`}
                    >
                      <Image
                        src={blog.image}
                        alt={blog.alt}
                        className={`${styles.blogImg} w-100`}
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="p-4">
                      <div className={`${styles.blogDate} textGold mb-2`}>
                        {blog.date}
                      </div>
                      <h3
                        className={`${styles.blogHead} titleFont fs-20 lh-base mb-3`}
                      >
                        {blog.title}
                      </h3>
                      <p>{blog.desc}</p>
                    </div>
                    <a
                      onClick={() => router.push("/blog-details")}
                      className={`${styles.stretchedLink} stretched-link`}
                    ></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12">
            <nav className="d-flex justify-content-center align-items-center gap-4 mb-5">
              <button className={`${styles.pgBtn} rounded-pill btn`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  strokeWidth="1"
                  stroke="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                  />
                </svg>
                Prev
              </button>
              <div className="fw-medium">Page 1 of 1</div>
              <button className={`${styles.pgBtn} rounded-pill btn`}>
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  stroke-width="1"
                  stroke="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
