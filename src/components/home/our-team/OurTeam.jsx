import Image from "next/image";
import React from "react";
import Team1 from "@/assets/images/Akbar_Momin.jpg";
import Team2 from "@/assets/images/Malik_Rozani.jpg";
import Team3 from "@/assets/images/Faizan_Rozani.jpg";
import Team4 from "@/assets/images/team_4.jpg";
// import Skyline from "@/assets/images/skyline.svg";
import styles from "@/components/home/our-team/OurTeam.module.css";

const OurTeam = () => {
  return (
    <>
      <section className="sitePadding py-5">
        <div className="container-fluid py-5">
          <div className="row justify-content-between align-items-center mb-5">
            <div className="col-xxl-5 col-lg-6">
              <h2 className="sectTitle textGold mb-3 revealText">Our Team</h2>
              <h3 className="sectBigTitle titleFont textPrimary mb-lg-0 mb-4 revealText">
                The Minds Behind Every Milestone
              </h3>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 ps-lg-4 ps-xl-0">
              <p className="fs-20 animateThis slideRight curtainLeft">
                Our leadership team brings together decades of expertise in real
                estate development, design, finance, and customer experience —
                united by a single commitment to excellence.
              </p>
            </div>
          </div>

          <div className="row g-lg-3 g-md-5 g-4 justify-content-center">
            <div className="col-lg-3 col-sm-6 col-10 animateThis slideTop">
              <div className={`${styles.teamBox} vstack gap-3`}>
                <div className="teamImgBox rounded-4 overflow-hidden position-relative">
                  <Image
                    src={Team1}
                    alt=""
                    className="teamImg object-fit-cover w-100 h-100"
                  />
                  <div className={`${styles.teamText} text-white d-none d-lg-flex align-items-end`}>
                    <p>
                      Visionary behind Fortune Group's 25-year legacy of
                      landmark residential development across Mumbai.
                    </p>
                  </div>
                </div>
                <div className={`${styles.teamInfo} pe-5 position-relative`}>
                  <div className={`${styles.teamName} titleFont textPrimary fw-medium`}>
                    Akbar Momin
                  </div>
                  <div className={`${styles.teamDesig} text-uppercase`}>Founder & Chairman</div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 col-10 animateThis slideTop"
              style={{ transitionDelay: ".2s" }}
            >
              <div className={`${styles.teamBox} vstack gap-3`}>
                <div className="teamImgBox rounded-4 overflow-hidden position-relative">
                  <Image
                    src={Team2}
                    alt=""
                    className="teamImg object-fit-cover w-100 h-100"
                  />
                  <div className={`${styles.teamText} text-white d-none d-lg-flex align-items-end`}>
                    <p>
                      Visionary behind Fortune Group's 25-year legacy of
                      landmark residential development across Mumbai.
                    </p>
                  </div>
                </div>
                <div className={`${styles.teamInfo} pe-5 position-relative`}>
                  <div className={`${styles.teamName} titleFont textPrimary fw-medium`}>
                    Malik Rozani
                  </div>
                  <div className={`${styles.teamDesig} text-uppercase`}>Managing Director</div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 col-10 animateThis slideTop"
              style={{ transitionDelay: ".4s" }}
            >
              <div className={`${styles.teamBox} vstack gap-3`}>
                <div className="teamImgBox rounded-4 overflow-hidden position-relative">
                  <Image
                    src={Team3}
                    alt=""
                    className="teamImg object-fit-cover w-100 h-100"
                  />
                  <div className={`${styles.teamText} text-white d-none d-lg-flex align-items-end`}>
                    <p>
                      Visionary behind Fortune Group's 25-year legacy of
                      landmark residential development across Mumbai.
                    </p>
                  </div>
                </div>
                <div className={`${styles.teamInfo} pe-5 position-relative`}>
                  <div className={`${styles.teamName} titleFont textPrimary fw-medium`}>
                    Faizan Rozani
                  </div>
                  <div className={`${styles.teamDesig} text-uppercase`}>Director</div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 col-10 animateThis slideTop"
              style={{ transitionDelay: ".6s" }}
            >
              <div className={`${styles.teamBox} vstack gap-3`}>
                <div className="teamImgBox rounded-4 overflow-hidden position-relative">
                  <Image
                    src={Team4}
                    alt=""
                    className="teamImg object-fit-cover w-100 h-100"
                  />
                  <div className={`${styles.teamText} text-white d-none d-lg-flex align-items-end`}>
                    <p>
                      Visionary behind Fortune Group's 25-year legacy of
                      landmark residential development across Mumbai.
                    </p>
                  </div>
                </div>
                <div className={`${styles.teamInfo} pe-5 position-relative`}>
                  <div className={`${styles.teamName} titleFont textPrimary fw-medium`}>
                    Priya Iyer
                  </div>
                  <div className={`${styles.teamDesig} text-uppercase`}>
                    HEAD OF INVESTOR RELATIONS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="sitePadding py-5 position-relative overflow-hidden">
         <Image src={Skyline} alt="" className={`${styles.skyline}`}/>
         <div className="container-fluid position-relative">

            <div className="row justify-content-between align-items-end mb-5 mb-md-0">
               <div className="col-xxl-7 col-xl-8 col-lg-9 order-lg-1">
                  <h2 className="sectTitle textGold mb-3 revealText">Investor Relations</h2>
                  <h3 className="sectBigTitle titleFont textPrimary mb-0 revealText">Building Long-Term Value Through
                     Transparency & Responsible Growth.</h3>
               </div>
               <div className="col-12 order-lg-3 py-5">

                  <div className={`row row-cols-lg-3 row-cols-sm-2 row-cols-1 bgGold ${styles.invItemList}`}>

                     <div className="col animateThis curtainLeft fadeGrow">
                        <div className={`${styles.invItem} d-flex flex-column gap-3 p-xl-5 px-4 py-5`}>
                           <div className={`${styles.invIconBox} rounded-circle d-flex justify-content-center align-items-center`}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className={`${styles.invIcon}`}>
                                 <path
                                    d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                                 <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                                 <path d="M10 9H8" />
                                 <path d="M16 13H8" />
                                 <path d="M16 17H8" />
                              </svg>
                           </div>
                           <h3 className="invHead titleFont mb-0">Annual Reports</h3>
                           <p className="invTxt mb-0">Audited financials, highlights, and strategic performance summaries
                              for each fiscal year.</p>
                           <div className="mt-auto"><a href="" className="ctaLink">View Details</a></div>
                        </div>
                     </div>

                     <div className="col animateThis curtainLeft fadeGrow">
                        <div className={`${styles.invItem} d-flex flex-column gap-3 p-xl-5 px-4 py-5`}>
                           <div className={`${styles.invIconBox} rounded-circle d-flex justify-content-center align-items-center`}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className={`${styles.invIcon}`}>
                                 <path d="M16 7h6v6" />
                                 <path d="m22 7-8.5 8.5-5-5L2 17" />
                              </svg>
                           </div>
                           <h3 className="invHead titleFont mb-0">Financial Results</h3>
                           <p className="invTxt mb-0">Quarterly and annual revenue, EBITDA, and project-wise financial
                              disclosures.</p>
                           <div className="mt-auto"><a href="" className="ctaLink">View Details</a></div>
                        </div>
                     </div>

                     <div className="col animateThis curtainLeft fadeGrow">
                        <div className={`${styles.invItem} d-flex flex-column gap-3 p-xl-5 px-4 py-5`}>
                           <div className={`${styles.invIconBox} rounded-circle d-flex justify-content-center align-items-center`}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className={`${styles.invIcon}`}>
                                 <path
                                    d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
                              </svg>
                           </div>
                           <h3 className="invHead titleFont mb-0">Corporate Governance</h3>
                           <p className="invTxt mb-0">Board composition, policies, ethics charter, and governance
                              frameworks.</p>
                           <div className="mt-auto"><a href="" className="ctaLink">View Details</a></div>
                        </div>
                     </div>

                     <div className="col animateThis curtainLeft fadeGrow">
                        <div className={`${styles.invItem} d-flex flex-column gap-3 p-xl-5 px-4 py-5`}>
                           <div className={`${styles.invIconBox} rounded-circle d-flex justify-content-center align-items-center`}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className={`${styles.invIcon}`}>
                                 <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                 <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                                 <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                 <circle cx="9" cy="7" r="4" />
                              </svg>
                           </div>
                           <h3 className="invHead titleFont mb-0">Shareholder Information</h3>
                           <p className="invTxt mb-0">Shareholding patterns, dividend history, AGM notices, and transfer
                              policies.</p>
                           <div className="mt-auto"><a href="" className="ctaLink">View Details</a></div>
                        </div>
                     </div>

                     <div className="col animateThis curtainLeft fadeGrow">
                        <div className={`${styles.invItem} d-flex flex-column gap-3 p-xl-5 px-4 py-5`}>
                           <div className={`${styles.invIconBox} rounded-circle d-flex justify-content-center align-items-center`}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className={`${styles.invIcon}`}>
                                 <path d="m17 2-5 5-5-5" />
                                 <rect width="20" height="15" x="2" y="7" rx="2" />
                              </svg>
                           </div>
                           <h3 className="invHead titleFont mb-0">Investor Presentation</h3>
                           <p className="invTxt mb-0">Pitch decks, project overviews, and market positioning materials for
                              institutional investors.</p>
                           <div className="mt-auto"><a href="" className="ctaLink">View Details</a></div>
                        </div>
                     </div>

                     <div className="col animateThis curtainLeft fadeGrow">
                        <div className={`${styles.invItem} d-flex flex-column gap-3 p-xl-5 px-4 py-5`}>
                           <div className={`${styles.invIconBox} rounded-circle d-flex justify-content-center align-items-center`}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className={`${styles.invIcon}`}>
                                 <path
                                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                              </svg>
                           </div>
                           <h3 className="invHead titleFont mb-0">ESG & Compliance</h3>
                           <p className="invTxt mb-0">Environmental, social, and governance commitments along with statutory
                              compliance reports.</p>
                           <div className="mt-auto"><a href="" className="ctaLink">View Details</a></div>
                        </div>
                     </div>

                  </div>

               </div>
               <div className="col-lg-auto order-lg-2 text-center">
                  <a href="" className="ctaBtn ghost">View All</a>
               </div>
            </div>

            <div className="row justify-content-between align-items-center mb-5">
               <div className="col-xxl-7 col-lg-8 col-md-6 text-center text-md-start">
                  <h3 className="sectBigTitle titleFont textPrimary mb-3 revealText readyTxt">Ready to make your move?</h3>
                  <p className="animateThis fadeIn">Get our complete investment analysis — location report, appreciation
                     data, and project specifications.</p>
               </div>
               <div className="col-md-auto text-center animateThis fadeShrink">
                  <a href="" className="ctaBtn">Download Investment Brochure</a>
               </div>
            </div>
         </div>
      </section> */}
    </>
  );
};

export default OurTeam;
