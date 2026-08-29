import Image from "next/image";
import React from "react";
import locationBg from "@/assets/images/locationBg.png";
import locationBuilding from "@/assets/images/florence/locationBuilding.png";
import railway from "@/assets/images/ic_railway.png";
import metro from "@/assets/images/ic_metro.png";
import road from "@/assets/images/ic_road.png";
import hospital from "@/assets/images/ic_hospital.png";
import school from "@/assets/images/ic_school.png";
import mall from "@/assets/images/ic_mall.png";
import styles from "@/components/fortune-florence/banner/FlorenceBanner.module.css"


const Location = () => {
  return (
    <section className={`${styles.locAdvSection} sitePadding py-5 position-relative overflow-hidden`}>
      <Image src={locationBg} alt="" className={styles.locAdvBgimg} />
      <Image
        src={locationBuilding}
        alt=""
        className={`${styles.locationBuilding}`}
      />

      <div className="container-fluid py-md-5 position-relative">
        <div className="row justify-content-lg-end justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-12">
            <h3 className="mb-5 titleFont sectBigTitle textPrimary revealText">
              Prime Location. <br /> Seamless Connectivity
            </h3>

            <div className="row row-cols-xl-3 row-cols-sm-2 row-cols-1 g-sm-4 g-2">
              <div className="col animateThis fadeGrow">
                <div className={`${styles.locBox} rounded-2 px-4 py-md-5 py-4`}>
                  <div className="lbLoc d-flex gap-3 align-items-center">
                    <Image src={railway} alt="" />
                    <div>
                      <div className={`${styles.lbTime} mb-1`}>5 Min</div>
                      Borivali Railway Station
                    </div>
                  </div>
                </div>
              </div>
              <div className="col animateThis fadeGrow">
                <div className={`${styles.locBox} rounded-2 px-4 py-md-5 py-4`}>
                  <div className="lbLoc d-flex gap-3 align-items-center">
                    <Image src={metro} alt="" />
                    <div>
                      <div className={`${styles.lbTime} mb-1`}>3 Min</div>
                      Magthane Metro Station
                    </div>
                  </div>
                </div>
              </div>
              <div className="col animateThis fadeGrow">
                <div className={`${styles.locBox} rounded-2 px-4 py-md-5 py-4`}>
                  <div className="lbLoc d-flex gap-3 align-items-center">
                    <Image src={road} alt="" />
                    <div>
                      <div className={`${styles.lbTime} mb-1`}>2 Min</div>
                      Western Express Highway
                    </div>
                  </div>
                </div>
              </div>
              <div className="col animateThis fadeGrow">
                <div className={`${styles.locBox} rounded-2 px-4 py-md-5 py-4`}>
                  <div className="lbLoc d-flex gap-3 align-items-center">
                    <Image src={hospital} alt="" />
                    <div>
                      <div className={`${styles.lbTime} mb-1`}>5 Min</div>
                      Leading Hospitals
                    </div>
                  </div>
                </div>
              </div>
              <div className="col animateThis fadeGrow">
                <div className={`${styles.locBox} rounded-2 px-4 py-md-5 py-4`}>
                  <div className="lbLoc d-flex gap-3 align-items-center">
                    <Image src={school} alt="" />
                    <div>
                      <div className={`${styles.lbTime} mb-1`}>5 Min</div>
                      Top Schools
                    </div>
                  </div>
                </div>
              </div>
              <div className="col animateThis fadeGrow">
                <div className={`${styles.locBox} rounded-2 px-4 py-md-5 py-4`}>
                  <div className="lbLoc d-flex gap-3 align-items-center">
                    <Image src={mall} alt="" />
                    <div>
                      <div className={`${styles.lbTime} mb-1`}>5 Min</div>
                      Shopping Mall
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
