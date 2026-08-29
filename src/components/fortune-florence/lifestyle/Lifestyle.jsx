import Image from "next/image";
import React, { useEffect } from "react";
import icPark from "@/assets/images/ic_park.png";
import icGym from "@/assets/images/ic_gym.png";
import icPool from "@/assets/images/ic_pool.png";
import icPlayarea from "@/assets/images/ic_playarea.png";
import icSecurity from "@/assets/images/ic_security.png";
import deck from "@/assets/images/florence/deck.webp";
import gym from "@/assets/images/florence/gym.webp";
import dropoff from "@/assets/images/florence/dropoff.webp";
import yoga from "@/assets/images/florence/yoga.webp";
import toddler from "@/assets/images/florence/toddler.webp";
import styles from "@/components/fortune-florence/banner/FlorenceBanner.module.css";

const Lifestyle = ({
  flatImage,
  flatImageName,
  flatImageExtra = [],

  flatImage2,
  flatImage2Name,
  flatImage2Extra = [],

  flatImage3,
  flatImage3Name,
  flatImage3Extra = [],

  flatImage4,
  flatImageName4,
  flatImage4Extra = [],

  flatImage5,
  flatImage5Name,
  flatImage5Extra = [],

  flatImage6,
  flatImage6Name,
  flatImage6Extra = [],

  flatImage7,
  flatImage7Name,
  flatImage7Extra = [],

  flatImage8,
  flatImage8Name,
  flatImage8Extra = [],
}) => {
  useEffect(() => {
    let fancyboxRef;
    let cancelled = false;

    import("@fancyapps/ui/dist/fancybox/fancybox.css");

    import("@fancyapps/ui").then(({ Fancybox }) => {
      if (cancelled) return;
      fancyboxRef = Fancybox;
      Fancybox.bind("[data-fancybox]", {
        // groupAll: true,
        Carousel: {
          Thumbs: false,
          Toolbar: {
            display: {
              left: ["counter"],
              middle: [],
              right: ["close"],
            },
          },
        },
      });
    });

    return () => {
      cancelled = true;
      fancyboxRef?.destroy();
    };
  }, []);

  const FloorPlanItem = ({ image, name, groupName, extraImages }) => {
    if (!image) return null;

    return (
      <div
        className={`${styles.flrListItem} col-lg-8 col-sm-10 col-12 d-flex animateThis slideRight`}
      >
        <div className="col">
          <Image src={image} alt="" className={`${styles.flrImg} w-100`} />
        </div>
        <div className="col d-flex flex-column align-items-center justify-content-center">
          <div className="p-3 rounded-2 text-center">
            <div className={`${styles.flrName} mb-2`}>{name}</div>
            <span className="ctaBtn">View Plan</span>
          </div>
        </div>

        <a
          href={image?.src}
          className="stretched-link"
          data-fancybox={groupName}
        ></a>

        {extraImages.length > 0 && (
          <div className="d-none">
            {extraImages.map((img, idx) => (
              <a key={idx} href={img.src} data-fancybox={groupName}>
                <Image src={img} alt="" />
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <section className="sitePadding py-5 bgPrimary">
        <div className="container-fluid text-white py-5">
          <div className="row justify-content-between align-items-center mb-sm-5 mb-4">
            <div className="col-xxl-6 col-lg-6">
              <h2 className="sectTitle textGold mb-3 revealText">
                Fortune Lifestyle Amenities
              </h2>
              <h3 className="sectBigTitle titleFont mb-lg-0 mb-4 revealText">
                World-class Amenities For a Flourishing Lifestyle
              </h3>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 ps-lg-4 ps-xl-0">
              <p className="lh-lg animateThis slideRight curtainLeft">
                Experience a thoughtfully curated collection of world-class
                amenities designed to elevate your everyday living, offering the
                perfect balance of comfort, wellness, leisure, and security.
              </p>
            </div>
          </div>

          <ul className="vstack mb-5 amenities">
            <li
              className={`${styles.amenity} d-flex align-items-stretch gap-md-4 gap-2`}
            >
              <div className="col-lg-4 col-6 d-flex flex-column flex-md-row align-items-md-center gap-md-4 animateThis slideRight">
                <Image
                  src={icPark}
                  alt=""
                  className={`${styles.amntImg} animateThis fadeGrow`}
                />
                <h4 className={`${styles.amntHead} titleFont`}>
                  Landscaped Gardens
                </h4>
              </div>
              <div
                className={`${styles.amntTxt} col d-flex align-items-center ps-md-4 ps-3 animateThis curtainLeft`}
              >
                Relax and unwind in beautifully landscaped gardens.
              </div>
            </li>

            <li
              className={`${styles.amenity} d-flex align-items-stretch gap-md-4 gap-2`}
            >
              <div className="col-lg-4 col-6 d-flex flex-column flex-md-row align-items-md-center gap-md-4 animateThis slideRight">
                <Image
                  src={icGym}
                  alt=""
                  className={`${styles.amntImg} animateThis fadeGrow`}
                />
                <h4 className={`${styles.amntHead} titleFont`}>Gymnasium</h4>
              </div>
              <div
                className={`${styles.amntTxt} col d-flex align-items-center ps-md-4 ps-3 animateThis curtainLeft`}
              >
                Stay fit and healthy with a state-of-the-art gym.
              </div>
            </li>

            <li
              className={`${styles.amenity} d-flex align-items-stretch gap-md-4 gap-2`}
            >
              <div className="col-lg-4 col-6 d-flex flex-column flex-md-row align-items-md-center gap-md-4 animateThis slideRight">
                <Image
                  src={icPool}
                  alt=""
                  className={`${styles.amntImg} animateThis fadeGrow`}
                />
                <h4 className={`${styles.amntHead} titleFont`}>
                  Swimming Pool
                </h4>
              </div>
              <div
                className={`${styles.amntTxt} col d-flex align-items-center ps-md-4 ps-3 animateThis curtainLeft`}
              >
                Take a refreshing dip in the swimming pool.
              </div>
            </li>

            <li
              className={`${styles.amenity} d-flex align-items-stretch gap-md-4 gap-2`}
            >
              <div className="col-lg-4 col-6 d-flex flex-column flex-md-row align-items-md-center gap-md-4 animateThis slideRight">
                <Image
                  src={icPlayarea}
                  alt=""
                  className={`${styles.amntImg} animateThis fadeGrow`}
                />
                <h4 className={`${styles.amntHead} titleFont`}>
                  Children's Play Area
                </h4>
              </div>
              <div
                className={`${styles.amntTxt} col d-flex align-items-center ps-md-4 ps-3 animateThis curtainLeft`}
              >
                A safe and fun space for children to play and grow.
              </div>
            </li>

            <li
              className={`${styles.amenity} d-flex align-items-stretch gap-md-4 gap-2`}
            >
              <div className="col-lg-4 col-6 d-flex flex-column flex-md-row align-items-md-center gap-md-4 animateThis slideRight">
                <Image
                  src={icSecurity}
                  alt=""
                  className={`${styles.amntImg} animateThis fadeGrow`}
                />
                <h4 className={`${styles.amntHead} titleFont`}>
                  24/7 Security
                </h4>
              </div>
              <div
                className={`${styles.amntTxt} col d-flex align-items-center ps-md-4 ps-3 animateThis curtainLeft`}
              >
                Enjoy peace of mind with round-the-clock security and
                surveillance.
              </div>
            </li>
          </ul>

          <div
            className={`${styles.amnitiesBoxes} d-flex flex-column flex-lg-row gap-lg-2 gap-4 mt-5 text-white`}
          >
            <div className={`${styles.amntBoxItem}`}>
              <a
                href={deck.src}
                data-fancybox="amenitiesGallery"
                className={`${styles.amntBox} d-block position-relative`}
              >
                <Image src={deck} alt="" className={`${styles.amntBoxImg}`} />
                <div className={`${styles.amntHeading} titleFont`}>
                  Private Deck
                </div>
              </a>
            </div>

            <div className={`${styles.amntBoxItem}`}>
              <a
                href={gym.src}
                data-fancybox="amenitiesGallery"
                className={`${styles.amntBox} d-block position-relative`}
              >
                <Image src={gym} alt="" className={`${styles.amntBoxImg}`} />
                <div className={`${styles.amntHeading} titleFont`}>
                  Gymnasium
                </div>
              </a>
            </div>

            <div className={`${styles.amntBoxItem}`}>
              <a
                href={dropoff.src}
                data-fancybox="amenitiesGallery"
                className={`${styles.amntBox} d-block position-relative`}
              >
                <Image
                  src={dropoff}
                  alt=""
                  className={`${styles.amntBoxImg}`}
                />
                <div className={`${styles.amntHeading} titleFont`}>
                  Grand Dropoff Area
                </div>
              </a>
            </div>

            <div className={`${styles.amntBoxItem}`}>
              <a
                href={yoga.src}
                data-fancybox="amenitiesGallery"
                className={`${styles.amntBox} d-block position-relative`}
              >
                <Image src={yoga} alt="" className={`${styles.amntBoxImg}`} />
                <div className={`${styles.amntHeading} titleFont`}>
                  Yoga & Meditation Room
                </div>
              </a>
            </div>

            <div className={`${styles.amntBoxItem}`}>
              <a
                href={toddler.src}
                data-fancybox="amenitiesGallery"
                className={`${styles.amntBox} d-block position-relative`}
              >
                <Image
                  src={toddler}
                  alt=""
                  className={`${styles.amntBoxImg}`}
                />
                <div className={`${styles.amntHeading} titleFont`}>
                  Toddler's Room
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sitePadding py-5">
        <div className="container-fluid py-4">
          <div className="text-center mb-5">
            <h2 className="sectTitle textGold mb-3 revealText">
              Thoughtfully Designed Homes
            </h2>
            <h3 className="mb-4 titleFont sectBigTitle textPrimary revealText">
              Spacious Homes That Reflect Your Lifestyle
            </h3>
          </div>

          <div className="row gy-3 gx-0 justify-content-end floorList">
            <FloorPlanItem
              image={flatImage}
              name={flatImageName}
              groupName="floorPlan"
              extraImages={flatImageExtra}
            />

            <FloorPlanItem
              image={flatImage2}
              name={flatImage2Name}
              groupName="floorPlan"
              extraImages={flatImage2Extra}
            />

            <FloorPlanItem
              image={flatImage3}
              name={flatImage3Name}
              groupName="floorPlan"
              extraImages={flatImage3Extra}
            />

            <FloorPlanItem
              image={flatImage4}
              name={flatImageName4}
              groupName="floorPlan"
              extraImages={flatImage4Extra}
            />

            <FloorPlanItem
              image={flatImage5}
              name={flatImage5Name}
              groupName="floorPlan"
              extraImages={flatImage5Extra}
            />

            <FloorPlanItem
              image={flatImage6}
              name={flatImage6Name}
              groupName="floorPlan"
              extraImages={flatImage6Extra}
            />

            <FloorPlanItem
              image={flatImage7}
              name={flatImage7Name}
              groupName="floorPlan"
              extraImages={flatImage7Extra}
            />

            <FloorPlanItem
              image={flatImage8}
              name={flatImage8Name}
              groupName="floorPlan"
              extraImages={flatImage8Extra}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Lifestyle;
