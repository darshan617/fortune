import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@/components/Layout/navbar/Navbar.module.css";
import logo from "@/assets/images/fortune_logo.png";
import lineProject from "@/assets/images/line-project.png";

const Navbar = () => {
  const [menuShow, setMenuShow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleMenuShow = () => {
    setMenuShow((prev) => !prev);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("stopScroll", menuShow);
    return () => document.body.classList.remove("stopScroll");
  }, [menuShow]);

  return (
    <header
  className={`${styles.pageHeader} sitePadding py-3 ${isSticky ? "stick" : ""} ${menuShow ? "opened" : ""}`}
>
  <div className="pgHeadMain container-fluid rounded">
    <div className="row align-items-center">
      <div className="col-md-4 col-auto">
        <button
          role="button"
          className={`${styles.headBtns} titleFont`}
          onClick={handleMenuShow}
        >
          <div className={`${styles.menuBtn}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="d-none d-md-block">MENU</span>
        </button>
      </div>
      <div className="col d-flex justify-content-center align-items-center text-center">
        <a href="/" className={`${styles.logoBox}`}>
          <Image
            src={logo}
            alt=""
            title="Fortune Group"
            className={`${styles.logoImg}`}
          />
        </a>
      </div>
      <div className="col-md-4 col-auto text-end">
        
          <a href="/contact-us">
          <span className="ctaBtn headEnquiryBtn" style={{ "--btnWidth": "30px" }}>
          <span className="d-none d-md-block" style={{ fontFamily: "var(--font-jakarta)" }}>Enquire Now</span>
        </span>
        </a>
      </div>
    </div>
    <div className={`collapse ${menuShow ? "show" : ""}`} id="menu">
      <div className={`d-flex ${styles.navigMain}`}>
        <div className="col-md-5 d-none d-md-block">
          <Image
            src={lineProject}
            alt=""
            className="w-100 h-100 object-fit-contain"
          />
        </div>
        <div className="col-md col-12">
          <ul
            className={`${styles.naviWrap} titleFont d-flex flex-column text-uppercase py-5`}
          >
            <li>
              <a href="/">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/about-us">
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a href="/projects">
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Investors</span>
              </a>
            </li>
            <li>
              <a href="/contact-us">
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>
  );
};
export default Navbar;
