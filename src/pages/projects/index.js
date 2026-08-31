import FeaturedProject from "@/components/home/featured-project/FeaturedProject";
import Layout from "@/components/Layout/Layout";
import projectImages1 from "@/assets/images/florence/item.jpg";
import projectImagesHover from "@/assets/images/florence/item_hover.jpg";
import featuredProject1Logo from "@/assets/images/florence/logo.png";
import featuredProject2 from "@/assets/images/Venetian/item.jpg";
import featuredProject2Hover from "@/assets/images/Venetian/item_hover.jpg";
import featuredProject2Logo from "@/assets/images/venetian/logo.png";
import Head from "next/head";
import React from "react";

const projectsPage = () => {
  return (
    <>
    <Head>
      <title>Fortune Group | Projects</title>
      <meta name="description" content="Fortune Group | Projects" />
    </Head>
    <Layout>
      <FeaturedProject
        title={<h2 className="sectTitle textGold mb-3 revealText fontJakarta mt-5 ">Featured Projects</h2>}
        description={<h3 className="sectBigTitle titleFont textPrimary mb-0 revealText mb-3">Creating remarkable spaces for the future.</h3>}
        projectImage1={projectImages1}
        projectImage1Hover={projectImagesHover}
        featuredProject1Logo={featuredProject1Logo}
        featuredProject2={featuredProject2}
        featuredProject2Hover={featuredProject2Hover}
        featuredProject2Logo={featuredProject2Logo}
        projectStatus1="Ongoing Project"
        projectStatus2="Upcoming Project"
      />
    </Layout>
    </>
  );
};

export default projectsPage;
