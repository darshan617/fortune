import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/components/Layout/navbar/Navbar.module.css";
import logo from "@/assets/images/fortune_logo.png";
import lineProject from "@/assets/images/line-project.png";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const DateTimePicker = dynamic(
  () =>
    import("@vaadin/react-components/DateTimePicker.js").then(
      (mod) => mod.DateTimePicker,
    ),
  { ssr: false },
);

const APPOINTMENT_TIME_MIN = "08:00";
const APPOINTMENT_TIME_MAX = "20:00";

const padTime = (n) => String(n).padStart(2, "0");

const toMinutes = (hhmm) => {
  const [hours, minutes] = hhmm.split(":").map(Number);
  return hours * 60 + minutes;
};

const fromMinutes = (mins) => {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;
  return `${padTime(hours)}:${padTime(minutes)}`;
};

const constrainAppointmentTime = (datePicker, timePicker) => {
  let minMins = toMinutes(APPOINTMENT_TIME_MIN);
  const maxMins = toMinutes(APPOINTMENT_TIME_MAX);
  const selectedDate = datePicker.value;

  if (selectedDate) {
    const now = new Date();
    const today = `${now.getFullYear()}-${padTime(now.getMonth() + 1)}-${padTime(now.getDate())}`;

    if (selectedDate === today) {
      let nowMins = now.getHours() * 60;
      if (now.getMinutes() > 0) {
        nowMins += 60;
      }
      minMins = Math.max(minMins, nowMins);
      if (minMins > maxMins) {
        minMins = maxMins;
      }
    }
  }

  timePicker.min = fromMinutes(minMins);
  timePicker.max = fromMinutes(maxMins);
  timePicker.step = 3600;
};

const Navbar = () => {
  const [menuShow, setMenuShow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const dateTimePickerWrapperRef = useRef(null);

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

  useEffect(() => {
    const wrapper = dateTimePickerWrapperRef.current;
    if (!wrapper) return;

    const hideYearScroller = (datePicker) => {
      const yearScroller = datePicker.querySelector(
        "vaadin-date-picker-year-scroller",
      );
      if (yearScroller) {
        yearScroller.hidden = true;
      }
    };

    let datePicker;
    let timePicker;
    let pickerReady = false;

    const applyConstraints = () => {
      if (!datePicker || !timePicker) return;
      constrainAppointmentTime(datePicker, timePicker);
    };

    const onDateOpened = (event) => {
      if (event.detail?.value) {
        requestAnimationFrame(() => hideYearScroller(datePicker));
      }
    };

    const onDateOrValueChanged = () => {
      queueMicrotask(applyConstraints);
    };

    const onTimeOpened = (event) => {
      if (event.detail?.value) {
        applyConstraints();
      }
    };

    const bindPickers = () => {
      const picker = wrapper.querySelector("vaadin-date-time-picker");
      if (!picker) return false;

      timePicker = picker.querySelector('[slot="time-picker"]');
      datePicker = picker.querySelector('[slot="date-picker"]');
      if (!timePicker || !datePicker) return false;

      applyConstraints();
      hideYearScroller(datePicker);

      datePicker.addEventListener("opened-changed", onDateOpened);
      datePicker.addEventListener("value-changed", onDateOrValueChanged);
      picker.addEventListener("value-changed", onDateOrValueChanged);
      timePicker.addEventListener("opened-changed", onTimeOpened);

      const originalUpdate = picker.__updateTimePickerMinMax?.bind(picker);
      if (originalUpdate) {
        picker.__updateTimePickerMinMax = () => {
          originalUpdate();
          applyConstraints();
        };
      }

      pickerReady = true;
      return true;
    };

    if (bindPickers()) {
      return () => {
        datePicker?.removeEventListener("opened-changed", onDateOpened);
        datePicker?.removeEventListener("value-changed", onDateOrValueChanged);
        timePicker?.removeEventListener("opened-changed", onTimeOpened);
        wrapper
          .querySelector("vaadin-date-time-picker")
          ?.removeEventListener("value-changed", onDateOrValueChanged);
      };
    }

    const observer = new MutationObserver(() => {
      if (bindPickers()) {
        observer.disconnect();
      }
    });

    observer.observe(wrapper, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      if (!pickerReady) return;
      datePicker?.removeEventListener("opened-changed", onDateOpened);
      datePicker?.removeEventListener("value-changed", onDateOrValueChanged);
      timePicker?.removeEventListener("opened-changed", onTimeOpened);
      wrapper
        .querySelector("vaadin-date-time-picker")
        ?.removeEventListener("value-changed", onDateOrValueChanged);
    };
  }, []);

  const router = useRouter();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const isNavActive = (href) => {
    const path = router.pathname;

    if (href === "/") {
      return path === "/" || path === "/home";
    }
    if (href === "/projects") {
      return (
        path.startsWith("/projects") ||
        path.startsWith("/fortune_florence") ||
        path.startsWith("/fortune_venetian") ||
        path.startsWith("/apartments")
      );
    }
    if (href === "/blogs") {
      return path.startsWith("/blogs") || path.startsWith("/blog-details");
    }

    return path === href || path.startsWith(`${href}/`);
  };

  const dateTimeRange = React.useMemo(() => {
    const pad = (n) => String(n).padStart(2, "0");
    const format = (date) =>
      `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:00`;

    const min = new Date();
    const max = new Date();
    max.setDate(max.getDate() + 29);
    max.setHours(20, 0, 0, 0);

    return { min: format(min), max: format(max) };
  }, []);

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
          <div className="col d-flex gap-sm-2 gap-1 justify-content-end">
            <div
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Enquire Now"
            >
              <a href="/contact-us" className={`${styles.headContBtn}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
              </a>
            </div>
            <div
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="WhatsApp Us"
            >
              <a
                href="http://wa.link/pf7n2p"
                target="_blank"
                className={`${styles.headContBtn}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </a>
            </div>
            <div
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Book An Appointment"
            >
              <a
                role="button"
                className={`${styles.headContBtn}`}
                data-bs-toggle="offcanvas"
                data-bs-target="#appointmentModal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 14v2.2l1.6 1" />
                  <path d="M16 2v3" />
                  <path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338" />
                  <path d="M3 9h5.859" />
                  <path d="M8 2v3" />
                  <circle cx="16" cy="16" r="6" />
                </svg>
              </a>
            </div>
            {/* <!-- <a href="contact_us.html" className="ctaBtn headEnquiryBtn" style="--btnWidth:30px"><span className="d-none d-md-block">Enquire Now</span></a> --> */}
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
                {navItems.map((item) => (
                  <li
                    key={item.href}
                    className={isNavActive(item.href) ? styles.active : ""}
                  >
                    <a
                      onClick={() => {
                        setMenuShow(false);
                        router.push(item.href);
                      }}
                      aria-current={isNavActive(item.href) ? "page" : undefined}
                    >
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end p-3"
        tabindex="-1"
        id="appointmentModal"
        data-bs-scroll="false"
        data-lenis-prevent
      >
        <form
          className={`${styles.formWrap} ${styles.formFormat} row g-3 m-0 p-sm-4 p-3 rounded-3`}
        >
          <button
            type="button"
            className="btn-close position-absolute end-0 top-0 m-4"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
          <div className="col-12 hstack justify-content-between">
            <h4 className="textPrimary sectSubTitle titleFont fw-semibold mb-0 lh-1">
              Book An Appointment
            </h4>
          </div>
          <div className="col-12 ">
            <label className="form-label">Choose Project *</label>
            <select className="form-control form-select">
              <option value=""></option>
              <option value="">Fortune Florence, Borivali</option>
              <option value="">Fortune Venetian, Andheri</option>
            </select>
            <span className={`${styles.errorLabel}`}>
              This field is required
            </span>
          </div>
          <div className="col-12 ">
            <label className="form-label">Date & Time*</label>
            <div
              ref={dateTimePickerWrapperRef}
              className={styles.dateTimePicker}
            >
              <DateTimePicker
                min={dateTimeRange.min}
                max={dateTimeRange.max}
                step={3600}
              />
            </div>
            <span className={`${styles.errorLabel}`}>
              This field is required
            </span>
          </div>
          <div className="col-12 ">
            <label className="form-label">Name *</label>
            <input type="text" className="form-control" />
            <span className={`${styles.errorLabel}`}>
              This field is required
            </span>
          </div>
          <div className="col-12 ">
            <label className="form-label">Email *</label>
            <input type="text" className="form-control" />
            <span className={`${styles.errorLabel}`}>
              This field is required
            </span>
          </div>
          <div className="col-12 ">
            <label className="form-label">Mobile No.*</label>
            <input type="text" className="form-control" />
            <span className={`${styles.errorLabel}`}>
              This field is required
            </span>
          </div>
          <div className="col-12 pt-3 text-center ">
            <button className="ctaBtn">Submit</button>
          </div>
        </form>
      </div>
    </header>
  );
};
export default Navbar;
