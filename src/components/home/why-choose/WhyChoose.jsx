import React from "react";
import styles from "@/components/home/why-choose/WhyChoose.module.css";

const WhyChoose = () => {
  return (
    <>
      <section className="sitePadding bgPrimary py-5 overflow-hidden">
            <div className="container-fluid py-5">

               <div className="w-100 text-center">
                  <h2 className="sectTitle textGold mb-3 revealText">WHY CHOOSE US</h2>
                  <h3 className="sectBigTitle titleFont text-white mb-4 revealText">End-to-End Capability</h3>
                  <p className="text-white text-opacity-75 animateThis fadeIn">Construction capability across diverse asset classes, guided by planning discipline, execution detail and lasting principles.</p>
               </div>
               
               <div className="mx-auto" style={{maxWidth:"1500px"}}>

                  <div className="row text-center text-white pt-md-5 g-md-4 g-5">

                     <div className="col-md-4 col-12">
                        <div className="wcuItem vstack gap-3 mx-auto" style={{maxWidth: "400px"}}>
                           <div className={`${styles.wcuIcon} animateThis`}>
                              <svg width="39" height="34" viewBox="0 0 39 34" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0 33.7883V11.2884L14.9999 0L24.3652 7.06146C23.7627 7.17428 23.1973 7.34351 22.6691 7.56915C22.1409 7.79479 21.6332 8.08324 21.1461 8.43451L14.9999 3.74991L2.99993 12.7884V30.7884H11.1153C11.1153 30.8089 11.1153 30.8294 11.1153 30.8499C11.1153 30.8704 11.1153 30.8909 11.1153 30.9114V33.7883H0ZM15.5 33.7883V30.5609C15.5 29.9664 15.6557 29.4121 15.9673 28.898C16.2788 28.3839 16.6897 27.9691 17.1999 27.6538C18.6948 26.7666 20.2647 26.0993 21.9096 25.6518C23.5544 25.2044 25.2512 24.9807 26.9999 24.9807C28.7486 24.9807 30.4454 25.2044 32.0903 25.6518C33.7352 26.0993 35.305 26.7666 36.7999 27.6538C37.3102 27.9691 37.7211 28.3839 38.0326 28.898C38.3441 29.4121 38.4999 29.9664 38.4999 30.5609V33.7883H15.5ZM18.6845 30.7884H35.3154V30.2499C34.0461 29.5191 32.7134 28.9582 31.3173 28.5672C29.9211 28.1761 28.482 27.9806 26.9999 27.9806C25.5179 27.9806 24.0788 28.1761 22.6826 28.5672C21.2864 28.9582 19.9537 29.5191 18.6845 30.2499V30.7884ZM27.0022 21.8845C25.4751 21.8845 24.1762 21.35 23.1057 20.281C22.0352 19.212 21.5 17.9139 21.5 16.3868C21.5 14.8596 22.0345 13.5608 23.1035 12.4903C24.1725 11.4198 25.4705 10.8845 26.9977 10.8845C28.5248 10.8845 29.8236 11.419 30.8941 12.488C31.9646 13.557 32.4999 14.8551 32.4999 16.3822C32.4999 17.9094 31.9654 19.2082 30.8964 20.2787C29.8274 21.3492 28.5293 21.8845 27.0022 21.8845ZM26.9999 18.8845C27.6948 18.8845 28.2852 18.6416 28.7711 18.1557C29.257 17.6698 29.5 17.0794 29.5 16.3845C29.5 15.6896 29.257 15.0992 28.7711 14.6133C28.2852 14.1274 27.6948 13.8845 26.9999 13.8845C26.305 13.8845 25.7147 14.1274 25.2287 14.6133C24.7428 15.0992 24.4999 15.6896 24.4999 16.3845C24.4999 17.0794 24.7428 17.6698 25.2287 18.1557C25.7147 18.6416 26.305 18.8845 26.9999 18.8845Z"/>
                              </svg>
                           </div>
                           <div className="animateThis slideTop" style={{transitionDelay:"1s"}}>
                              <div className={`${styles.wcuHead} mb-1`}>Residential Construction</div>
                              <div className={`${styles.wcutxt} fw-light text-opacity-50 text-white lh-lg`}>Custom homes and residential
                                 communities shaped around quality living and environmentally responsible design.
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-md-4 col-12">
                        <div className="wcuItem vstack gap-3 mx-auto" style={{maxWidth:"400px"}}>
                           <div className={`${styles.wcuIcon} animateThis`}>
                              <svg width="30" height="38" viewBox="0 0 30 38" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M12.8999 25.3306L23.5076 14.723L21.3692 12.5846L12.8999 21.0538L8.66146 16.8154L6.52305 18.9538L12.8999 25.3306ZM14.9999 37.8845C10.6743 36.705 7.09292 34.1588 4.25575 30.246C1.41858 26.3332 0 21.9589 0 17.123V5.61536L14.9999 0L29.9999 5.61536V17.123C29.9999 21.9589 28.5813 26.3332 25.7441 30.246C22.9069 34.1588 19.3255 36.705 14.9999 37.8845ZM14.9999 34.723C18.4666 33.623 21.3333 31.423 23.5999 28.123C25.8666 24.823 26.9999 21.1563 26.9999 17.123V7.673L14.9999 3.19223L2.99993 7.673V17.123C2.99993 21.1563 4.13326 24.823 6.39993 28.123C8.66659 31.423 11.5333 33.623 14.9999 34.723Z" />
                              </svg>
                           </div>
                           <div className="animateThis slideTop" style={{transitionDelay:"1s"}}>
                              <div className={`${styles.wcuHead} mb-1`}>Tenant Improvements</div>
                              <div className={`${styles.wcutxt} fw-light text-opacity-50 text-white lh-lg`}>Residential improvement and redevelopment solutions tailored to tenant requirements and site conditions.</div>
                           </div>
                        </div>
                     </div>

                     <div className="col-md-4 col-12">
                        <div className="wcuItem vstack gap-3 mx-auto" style={{maxWidth:"400px"}}>
                           <div className={`${styles.wcuIcon} animateThis`}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 50">
                                 <path d="M44.8,47.6L44.8,47.6l0-28.9c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0h0l-5.8-1.2V4.5c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0L21.2,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0,0h0h0L7.7,2.6c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0,0,0-0.1,0C7.2,2.7,7.1,2.8,7,3c0,0,0,0,0,0c0,0,0,0,0,0C6.9,3.1,6.8,3.2,6.8,3.4c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0.1v0c0,0,0,0.1,0,0.1v0c0,0,0,0.1,0,0.1v9.1l-4.6,0.9c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0,0,0-0.1,0c-0.1,0.1-0.3,0.2-0.4,0.3c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0.1-0.2,0.3-0.2,0.4c0,0,0,0,0,0.1v0c0,0,0,0.1,0,0.1v0c0,0,0,0.1,0,0.1v32.7h0c-0.6,0-1.2,0.5-1.2,1.2S0.5,50,1.2,50h43.6c0.6,0,1.2-0.5,1.2-1.2C46,48.2,45.5,47.6,44.8,47.6z M20.6,15.1c0.1,0,0.2,0.1,0.3,0.1l21.6,4.5v3.9l-26.9-5.7V14L20.6,15.1zM42.4,29.7L15.5,24v-4.1l26.9,5.7V29.7z M42.4,31.7v4.1l-26.9-5.6V26L42.4,31.7z M15.5,32.1l26.9,5.6v4.1l-26.9-5.6V32.1zM42.4,43.8v3.8H15.5v-9.4L42.4,43.8z M22.2,13V2.6l13.6,2.8v10.4L22.2,13z M9,4.7l10.8-2.1v9.9l-5.2-1.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0l-5,1V4.7z M3.5,15.9L7.9,15c0.1,0,0.2,0,0.3-0.1l4.9-1v3.9l-7.9,1.6c-0.5,0.1-0.9,0.6-0.8,1.1c0.1,0.5,0.5,0.8,0.9,0.8c0.1,0,0.1,0,0.2,0l7.5-1.6V24l-7.9,1.6c-0.5,0.1-0.9,0.6-0.8,1.1c0.1,0.5,0.5,0.8,0.9,0.8c0.1,0,0.1,0,0.2,0l7.5-1.6v4.1l-7.9,1.6c-0.5,0.1-0.9,0.6-0.8,1.1c0.1,0.5,0.5,0.8,0.9,0.8c0.1,0,0.1,0,0.2,0l7.5-1.6v4.1l-7.9,1.6C4.7,38,4.4,38.5,4.5,39c0.1,0.5,0.5,0.8,0.9,0.8c0.1,0,0.1,0,0.2,0l7.5-1.6v9.4H3.5V15.9z"/><path d="M33.3,9.1L25,7.4c-0.5-0.1-1,0.2-1.1,0.8c-0.1,0.5,0.2,1,0.8,1.1l8.3,1.7c0.1,0,0.1,0,0.2,0c0.4,0,0.8-0.3,0.9-0.8C34.2,9.8,33.8,9.2,33.3,9.1z"/>
                              </svg>
                           </div>
                           <div className="animateThis slideTop" style={{transitionDelay:"1s"}}>
                              <div className={`${styles.wcuHead} mb-1`}>Commercial Construction</div>
                              <div className={`${styles.wcutxt} fw-light text-opacity-50 text-white lh-lg`}>Office buildings, retail, hospitality developments and specialised facilities for modern business use.</div>
                           </div>
                        </div>
                     </div>

                  </div>

               </div>

            </div>
         </section>
    </>
  );
};

export default WhyChoose;
