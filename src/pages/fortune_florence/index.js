import AboutProject from "@/components/fortune-florence/about-project/AboutProject";
import FlorenceBanner from "@/components/fortune-florence/banner/FlorenceBanner";
import Gallery from "@/components/fortune-florence/gallery/Gallery";
import Lifestyle from "@/components/fortune-florence/lifestyle/Lifestyle";
import Location from "@/components/fortune-florence/location/Location";
import Layout from "@/components/Layout/Layout";
import React from "react";
import bannerImage from "@/assets/images/florence/banner.jpg";
import bannerImage1 from "@/assets/images/florence/pooltop.jpg";
import bannerImage2 from "@/assets/images/florence/lobbby.jpg";
import bannerImage3 from "@/assets/images/florence/dropoff.webp";
import logo from "@/assets/images/florence/logo.png";
import aboutProjectImage from "@/assets/images/florence/item.jpg";
import aboutProjectImage1 from "@/assets/images/florence/item_hover.jpg";
import flatImage1 from "@/assets/images/florence/3BHK.jpg";
import flatImage2 from "@/assets/images/florence/2.5BHK.jpg";
import flatImage3 from "@/assets/images/florence/2BHK.jpg";
import galleryImage1 from "@/assets/images/florence/deck.webp";
import galleryImage2 from "@/assets/images/florence/dropoff.webp";
import galleryImage3 from "@/assets/images/florence/gym.webp";
import galleryImage4 from "@/assets/images/florence/toddler.webp";
import galleryImage5 from "@/assets/images/florence/yoga.webp";
import galleryImage6 from "@/assets/images/florence/charging.jpg";
import galleryImage7 from "@/assets/images/florence/jogtrack.jpg";
import galleryImage8 from "@/assets/images/florence/lift.jpg";
import galleryImage9 from "@/assets/images/florence/lobbby.jpg";
import galleryImage10 from "@/assets/images/florence/playarea.jpg";
import galleryImage11 from "@/assets/images/florence/pooltop.jpg";
import galleryImage12 from "@/assets/images/florence/spa.jpg";
import galleryImage13 from "@/assets/images/florence/tenniscourt.jpg";
import galleryImage14 from "@/assets/images/florence/view.jpg";
import Head from "next/head";

const fortuneFlorencePage = () => {
  return (
    <>
    <Head>
      <title>Fortune Group | Project - Fortune Florence</title>
      <meta name="description" content="Fortune Group | Project - Fortune Florence" />
    </Head>
    <Layout>
      <FlorenceBanner
        bannerImage={bannerImage}
        bannerImage1={bannerImage1}
        bannerImage2={bannerImage2}
        bannerImage3={bannerImage3}
        logo={logo}
        title="Experience One In A Million Living"
        description="Where timeless architecture meets refined luxury and every moment feels extraordinary."
      />
      <AboutProject
        type="florence"
        heading="About the project"
        title="Signature Living Spaces For You To Indulge"
        paragraph1="A premier residential project located in the thriving neighborhood of Borivali East, Mumbai. Designed for those who seek a blend of luxury, comfort, and convenience, Fortune Florence offers an exceptional living experience."
        paragraph2="The project offer modern amenities that are essential for your daily life while ensuring that you live in style. Our project consists of 2 BHK and 3 BHK flats designed to offer comfort, space, and luxury."
        paragraph3="When it comes to quality and commitment, Fortune group believe in providing the best to clients. The flats are crafted with utmost precision and immaculate finishing to provide you the ultimate luxurious experience."
        paragraph4="Come and experience why Fortune Florence is the perfect choice for your new dream home."
        // aboutProjectImage={aboutProjectImage}
        // aboutProjectImage1={aboutProjectImage1}
        videoBanner="/video/florence.mp4"
        Location="Siddharth Nagar, Borivali East, Mumbai"
        Configuration="Premium 2, 2.5, 3 BHK and 2+2 Jodi Apartments with Deck"
      />
      <Lifestyle
        flatImage={flatImage1}
        flatImageName="3 BHK Unit Plan"
        flatImage2={flatImage2}
        flatImage2Name="2.5 BHK Unit Plan"
        flatImage3={flatImage3}
        flatImage3Name="2 BHK Unit Plan"
      />
      <Gallery
        images={[
          galleryImage1,
          galleryImage2,
          galleryImage3,
          galleryImage4,
          galleryImage5,
          galleryImage6,
          galleryImage7,
          galleryImage8,
          galleryImage9,
          galleryImage10,
          galleryImage11,
          galleryImage12,
          galleryImage13,
          galleryImage14,
        ]}
      />
      <Location />
    </Layout>
    </>
  );
};

export default fortuneFlorencePage;