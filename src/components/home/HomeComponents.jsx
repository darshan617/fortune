import React from "react";
import Layout from "../Layout/Layout";
import Banner from "./banner/Banner";
import Counter from "./counter/Counter";
import About from "./about/About";

const HomeComponents = () => {
  return (
    <Layout>
      <Banner />
      <Counter />
      <About />
    </Layout>
  );
};

export default HomeComponents;
