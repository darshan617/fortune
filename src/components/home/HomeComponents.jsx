import React from "react";
import Layout from "../Layout/Layout";
import Banner from "./banner/Banner";
import Counter from "./counter/Counter";
import About from "./about/About";
import FeaturedProject from "./featured-project/FeaturedProject";
import WhyChoose from "./why-choose/WhyChoose";
import OurTeam from "./our-team/OurTeam";
import Connectivity from "./connectivity/Connectivity";
import Testimonial from "./testimonial/Testimonial";
import projectImages1 from "@/assets/images/florence/item.jpg";
import projectImagesHover from "@/assets/images/florence/item_hover.jpg";
import featuredProject1Logo from "@/assets/images/florence/logo.png";
import featuredProject2 from "@/assets/images/Venetian/item.jpg";
import featuredProject2Hover from "@/assets/images/Venetian/item_hover.jpg";
import featuredProject2Logo from "@/assets/images/venetian/logo.png";

const HomeComponents = () => {
  return (
    <Layout>
      <Banner />
      {/* <Counter /> */}
      <About />
      <FeaturedProject 
       title="Featured Projects"
       description="Our Signature Addresses"
       projectImage1={projectImages1}
       projectImage1Hover={projectImagesHover}
       featuredProject1Logo={featuredProject1Logo}
       featuredProject2={featuredProject2}
       featuredProject2Hover={featuredProject2Hover}
       featuredProject2Logo={featuredProject2Logo}
       projectStatus1="Ongoing Project"
       projectStatus2="Upcoming Project"

       />
      <WhyChoose />
      {/* <OurTeam />    */}
      <Connectivity />  
      <Testimonial />
    </Layout>
  );
};

export default HomeComponents;
