import BlogDetail from "@/components/blog-details/BlogDetail";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import React from "react";

const BlogDetailPage = () => {
  return (
    <>
      {" "}
      <Head>
        <title>Fortune Group | Blog Details</title>
      </Head>
      <Layout>
        <BlogDetail />
      </Layout>
    </>
  );
};

export default BlogDetailPage;
