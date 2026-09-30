"use client";

import Image from "next/image";
import React, { useState } from "react";
import Team1 from "@/assets/images/Akbar_Momin.jpg";
import Team2 from "@/assets/images/Malik_Rozani.jpg";
import Team3 from "@/assets/images/Faizan_Rozani.jpg";
import Team4 from "@/assets/images/Karrim_Chamadia.jpg";
import styles from "@/components/home/our-team/OurTeam.module.css";
import CustomPopup from "@/components/custome-popup/CustomPopup";

const TEAM = [
  {
    id: "Akbar_Momin",
    name: "Mr. Akbar Momin",
    desig: "Founder & Chairman",
    img: Team1,
    delay: undefined,
    bio: [
      "From a young age, Mr. Akbar Momin was encouraged to take an active role in the family business, where he developed a strong foundation in strategic decision-making, financial planning and business management.",
      "While his family's legacy provided valuable industry exposure, it was his entrepreneurial vision, leadership and unwavering commitment to excellence that distinguished him.",
      "Driven by a passion to create a trusted and forward-thinking real estate enterprise, he founded Fortune Group with the vision of delivering developments that embody quality, innovation, transparency and long-term value.",
      "Under his leadership, the Group continues to build landmark projects while earning the trust of customers, partners and stakeholders.",
    ],
  },
  {
    id: "Malik_Rozani",
    name: "Mr. Malik Rozani",
    desig: "MD & CEO",
    img: Team2,
    delay: ".2s",
    bio: [
      "With over 30 years of hands-on experience in the construction industry, Mr. Malik Rozani has successfully executed a wide range of projects, including residential buildings, commercial towers, hotels and private bungalows.",
      "His expertise spans every phase of construction— from project planning and optimising development potential to on-site execution—while maintaining high standards of quality and efficiency.",
      "As Managing Director & CEO of Fortune Group, he is closely involved in the company's operations, driving disciplined execution, innovation and excellence across the projects he oversees.",
    ],
  },
  {
    id: "Faizan_Rozani",
    name: "Mr. Faizan Rozani",
    desig: "Director",
    img: Team3,
    delay: ".4s",
    bio: [
      "As the youngest Director of Fortune Group, Mr. Faizan Malik Rozani brings a fresh perspective, hands-on industry experience and expertise in sales and marketing.",
      "His contribution supports the Group's growth and future direction across residential and commercial real estate.",
    ],
  },
  {
    id: "Karrim_Chamadia",
    name: "Mr. Karrim Chamadia",
    desig: "SALES PRESIDENT",
    img: Team4,
    delay: ".6s",
    bio: [
      "With 10 years of experience in sales and investment sector management, Mr. Karrim Chamadia brings a wealth of expertise to the sales domain.",
      "As Sales President, he plays a pivotal role in driving the company's sales strategy and operations. He is committed to fostering strong client relationships and leveraging his deep understanding of financial products to tailor solutions to each customer's unique needs.",
      "He believes success in sales is built on trust, innovation and delivering value, and leads his team with a focus on continuous growth and excellence.",
    ],
  },
];

const OurTeam = () => {
  const [selected, setSelected] = useState(null); // holds the clicked team member

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

          <div className="row g-lg-3 g-md-5 g-4 g-xxl-5 justify-content-center">
            {TEAM.map((member) => (
              <div
                key={member.id}
                className="col-lg-3 col-sm-6 col-10 animateThis slideTop"
                style={
                  member.delay ? { transitionDelay: member.delay } : undefined
                }
              >
                <div className="teamBox vstack gap-3">
                  <div className="teamImgBox rounded-4 overflow-hidden position-relative">
                    <Image
                      src={member.img}
                      alt={member.name}
                      className="teamImg object-fit-cover w-100"
                    />
                  </div>
                  <div className={`${styles.teamInfo} pe-5 position-relative`}>
                    <div className={`${styles.teamName} titleFont textPrimary fw-medium`}>
                      {member.name}
                    </div>
                    <div className={`${styles.teamDesig} text-uppercase`}>
                      {member.desig}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="stretched-link border-0 bg-transparent p-0"
                    aria-label={`View profile of ${member.name}`}
                    onClick={() => setSelected(member)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CustomPopup
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        wide
        maxWidth="1000px"
      >
        {selected && (
          <div className="row g-xl-5 p-3 p-md-4">
            <div className="col-md-auto">
              <div className="teamImgBox rounded-4 overflow-hidden position-relative">
                <Image
                  src={selected.img}
                  alt={selected.name}
                  className="teamImg object-fit-cover w-100"
                />
              </div>
            </div>
            <div className="col-md">
              <div className={`${styles.teamInfo} mb-4 position-relative d-inline-block pe-5`}>
                <div className={`${styles.teamName} titleFont textPrimary fw-medium`}>
                  {selected.name}
                </div>
                <div className={`${styles.teamDesig} text-uppercase`}>{selected.desig}</div>
              </div>
              {selected.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        )}
      </CustomPopup>
    </>
  );
};

export default OurTeam;
