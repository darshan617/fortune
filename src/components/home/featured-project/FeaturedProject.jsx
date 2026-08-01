import React from 'react'

const FeaturedProject = () => {
  return (
    <section className="sitePadding py-5 overflow-hidden">
         <div className="container-fluid py-5">

            <div className="row justify-content-between align-items-end g-4 mb-4">
               <div className="col-xxl-4 col-lg-6 col-md order-md-1">
                  <h2 className="sectTitle textGold mb-3 revealText">FEATURED PROJECTS</h2>
                  <h3 className="sectBigTitle titleFont textPrimary mb-0 revealText">Our Signature Addresses</h3>
               </div>

               <div className="col-12 order-md-3">
                  <div className="animateThis">
                     <div className="swiper projectSlider">
                        <div className="swiper-wrapper">

                           <div className="swiper-slide">
                              <div className="projectItem">
                                 <div className="projImgBox">
                                    <img src="images/florence/item.jpg" alt="" className="pibImg">
                                    <img src="images/florence/item_hover.jpg" alt="" className="pibImg pibHoverImg">
                                 </div>
                                 <div
                                    className="w-100 h-100 d-flex flex-column justify-content-between position-relative z-3">
                                    <div className="pitemHead d-flex justify-content-between align-items-start">
                                       <div className="projStatus badge bgGold lh-sm fw-normal px-3">Ongoing Project</div>
                                       <div className="projLogo">
                                          <img src="images/florence/logo.png" alt="Fortune Florence"
                                             className="projLogoImg">
                                       </div>
                                    </div>
                                    <div className="pitemFoot d-flex justify-content-between align-items-end">
                                       <div className="projDetail text-white">
                                          <h3 className="projName titleFont mb-1">Fortune Florence</h3>
                                          <div className="projLocation">Borivali East, Mumbai</div>
                                       </div>
                                       <div>
                                          <a href="" className="ctaBtn">View More</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="swiper-slide">
                              <div className="projectItem">
                                 <div className="projImgBox">
                                    <img src="images/Venetian/item.jpg" alt="" className="pibImg">
                                    <img src="images/Venetian/item_hover.jpg" alt="" className="pibImg pibHoverImg">
                                 </div>
                                 <div
                                    className="w-100 h-100 d-flex flex-column justify-content-between position-relative z-3">
                                    <div className="pitemHead d-flex justify-content-between align-items-start">
                                       <div className="projStatus badge bgGold lh-sm fw-normal px-3">New Launch</div>
                                       <div className="projLogo">
                                          <!-- <img src="images/florence/logo.png" alt="Fortune Venetian" className="projLogoImg"> -->
                                       </div>
                                    </div>
                                    <div className="pitemFoot d-flex justify-content-between align-items-end">
                                       <div className="projDetail text-white">
                                          <h3 className="projName titleFont mb-1">Fortune Venetian</h3>
                                          <div className="projLocation">Andheri West, Mumbai</div>
                                       </div>
                                       <div>
                                          <a href="" className="ctaBtn">View More</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="swiper-slide">
                              <div className="projectItem">
                                 <div className="projImgBox">
                                    <img src="images/florence/item.jpg" alt="" className="pibImg">
                                    <img src="images/florence/item_hover.jpg" alt="" className="pibImg pibHoverImg">
                                 </div>
                                 <div
                                    className="w-100 h-100 d-flex flex-column justify-content-between position-relative z-3">
                                    <div className="pitemHead d-flex justify-content-between align-items-start">
                                       <div className="projStatus badge bgGold lh-sm fw-normal px-3">Ongoing Project</div>
                                       <div className="projLogo">
                                          <img src="images/florence/logo.png" alt="Fortune Florence"
                                             className="projLogoImg">
                                       </div>
                                    </div>
                                    <div className="pitemFoot d-flex justify-content-between align-items-end">
                                       <div className="projDetail text-white">
                                          <h3 className="projName titleFont mb-1">Fortune Florence</h3>
                                          <div className="projLocation">Borivali East, Mumbai</div>
                                       </div>
                                       <div>
                                          <a href="" className="ctaBtn">View More</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="swiper-slide">
                              <div className="projectItem">
                                 <div className="projImgBox">
                                    <img src="images/Venetian/item.jpg" alt="" className="pibImg">
                                    <img src="images/Venetian/item_hover.jpg" alt="" className="pibImg pibHoverImg">
                                 </div>
                                 <div
                                    className="w-100 h-100 d-flex flex-column justify-content-between position-relative z-3">
                                    <div className="pitemHead d-flex justify-content-between align-items-start">
                                       <div className="projStatus badge bgGold lh-sm fw-normal px-3">New Launch</div>
                                       <div className="projLogo">
                                          <!-- <img src="images/florence/logo.png" alt="Fortune Venetian" className="projLogoImg"> -->
                                       </div>
                                    </div>
                                    <div className="pitemFoot d-flex justify-content-between align-items-end">
                                       <div className="projDetail text-white">
                                          <h3 className="projName titleFont mb-1">Fortune Venetian</h3>
                                          <div className="projLocation">Andheri West, Mumbai</div>
                                       </div>
                                       <div>
                                          <a href="" className="ctaBtn">View More</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                        </div>
                        <div className="swiperBtn next projNext">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              viewBox="0 0 16 16">
                              <path fill-rule="evenodd"
                                 d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                           </svg>
                        </div>
                        <div className="swiperBtn prev projPrev">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              viewBox="0 0 16 16">
                              <path fill-rule="evenodd"
                                 d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-md-auto order-md-2 text-md-end text-center animateThis fadeShrink">
                  <a href="" className="ctaBtn ghost">View All</a>
               </div>
            </div>

         </div>
      </section>

  )
}

export default FeaturedProject