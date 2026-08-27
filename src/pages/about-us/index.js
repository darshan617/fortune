import AboutBanner from "@/components/about-us/banner/Banner";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Fortune Group | About Us</title>
        <meta name="description" content="Fortune Group | About Us" />
      </Head>
      <Layout>
        <AboutBanner />
      </Layout>
    </>
  );
};

export default AboutUs;
