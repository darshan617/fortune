import React from "react";
import Navbar from "./navbar/Navbar";
import styles from "@/components/Layout/Layout.module.css";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.page}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
