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

const HomeComponents = () => {
  return (
    <Layout>
      <Banner />
      <Counter />
      <About />
      <FeaturedProject />
      <WhyChoose />
      <OurTeam />   
      <Connectivity />  
      <Testimonial />
    </Layout>
  );
};

export default HomeComponents;
