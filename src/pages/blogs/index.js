import Blogs from "@/components/blogs/Blogs";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import React from "react";

const blogpage = () => {
  return (
    <>
    <Head>
      <title>Fortune Group | Blogs</title>
    </Head>
      <Layout>
        <Blogs />
      </Layout>
    </>
  );
};

export default blogpage;
