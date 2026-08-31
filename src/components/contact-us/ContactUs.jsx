import React from "react";
import styles from "@/components/contact-us/ContactUs.module.css";

const ContactUs = () => {
  return (
    <section
      className={`${styles.contWrapper} sitePadding position-relative`}
      //   style={{ backgroundImage: "url('/images/contactBg.jpg')" }}
    >
      {/* <!-- <img src="images/contactBg.jpg" alt="" className="contBg"> --> */}

      <div className="container-fluid" style={{ paddingTop: "15vh" }}>
        <div className="row justify-content-between gx-lg-5 gy-5">
          <div className="col-lg-6">
            <div className="position-sticky" style={{ top: "130px" }}>
              <h2 className="sectTitle textGold mb-3 revealText fontJakarta">
                Contact Us
              </h2>
              <h3
                className={`${styles.titleFont} sectBigTitle textPrimary revealText titleFont`}
              >
                We are committed to deliver exceptional service and provide{" "}
              </h3>
              <span className={`${styles.dreamLifestylesContant}  `}>
                <h3
                  className={`${styles.dreamLifestyles} d-inline-block sectBigTitle textPrimary revealText titleFont`}
                >
                  dream lifestyles
                </h3>
                <h3 className="fontJakarta sectBigTitle textPrimary mb-5 revealText titleFont">
                 to you.
                </h3>
              </span>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6">
            <div className="p-3 bg-white bg-opacity-75 rounded-4 shadow-lg animateThis slideTop">
              <form
                className={`${styles.formWrap} ${styles.formFormat} row g-3 m-0 p-4 rounded-3`}
              >
                <div className="col-12">
                  <h4 className="textPrimary sectSubTitle titleFont fw-semibold mb-0 lh-1">
                    Send Us An Enquiry
                  </h4>
                </div>
                <div className="col-12">
                  <label className="form-label fontJakarta">Name *</label>
                  <input type="text" className="form-control" />
                  <span className="errorLabel">This field is required</span>
                </div>
                <div className="col-12">
                  <label className="form-label fontJakarta">Email *</label>
                  <input type="text" className="form-control" />
                  <span className="errorLabel">This field is required</span>
                </div>
                <div className="col-12">
                  <label className="form-label fontJakarta">Mobile No.*</label>
                  <input
                    type="text"
                    className="form-control"
                    maxLength={10}
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                  <span className="errorLabel">This field is required</span>
                </div>
                <div className="col-12">
                  <label className="form-label fontJakarta">
                    Choose Project *
                  </label>
                  <select className="form-control form-select">
                    <option value=""></option>
                    <option value="">Fortune Florence, Borivali</option>
                    <option value="">Fortune Venetian, Andheri</option>
                  </select>
                  <span className="errorLabel">This field is required</span>
                </div>
                <div className="col-12">
                  <label className="form-label fontJakarta">Message</label>
                  <textarea className="form-control" rows="2"></textarea>
                  <span className="errorLabel">This field is required</span>
                </div>
                <div className="col-12 pt-3 text-center">
                  <button className="ctaBtn fontJakarta">Submit</button>
                </div>
              </form>
            </div>
          </div>

          <div
            className={`${styles.contDetails} col-12 pb-5 text-center vstack justify-content-center `}
          >
            <div className="hstack gap-4 mb-2">
              <div className="col bgGold" style={{ height: "1px" }}></div>
              <div className="col-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="textGold"
                  style={{ height: "2rem", aspectRatio: "1" }}
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="col bgGold" style={{ height: "1px" }}>
                {" "}
              </div>
            </div>
            <div className="vstack gap-4 mx-auto" style={{ maxWidth: "500px" }}>
              <h2 className="sectTitle textGold mb-0 fontJakarta">We Are Here</h2>
              <address className="col lh-lg mb-0 fontJakarta">
                <strong className="d-block textPrimary ">
                  Fortune Acres Pvt. Ltd.
                </strong>
                Plot C, Near St. Johns High School, Siddharth Nagar, Borivali
                East, Mumbai, Maharashtra - 400066. INDIA
              </address>
              <div className="hstack gap-2 justify-content-center align-items-center">
                <div className="col hstack justify-content-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="textGold"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                  </svg>
                  <a href="tel:+919960560199" className="fw-medium fontJakarta">
                    +91 99605 60199
                  </a>
                </div>
                <div className="vr h-50 align-self-center"></div>
                <div className="col hstack justify-content-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="textGold"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                  <a href="mailto:info@fortunegroup.in" className="fw-medium fontJakarta">
                    info@fortunegroup.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
