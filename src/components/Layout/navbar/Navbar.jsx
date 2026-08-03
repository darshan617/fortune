import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@/components/Layout/navbar/Navbar.module.css";
import logo from "@/assets/images/fortune_logo.png";

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
            <a href="" className="ctaBtn" style={{ "--btnWidth": "40px" }}>
              <span className="d-none d-md-block">Enquire Now</span>
            </a>
          </div>
        </div>
        <div className={`collapse ${menuShow ? "show" : ""}`} id="menu">
          <ul
            className={`${styles.naviWrap} d-flex flex-column text-uppercase py-5`}
          >
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Investors</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
