import FlorenceBanner from '@/components/fortune-florence/banner/FlorenceBanner'
import Layout from '@/components/Layout/Layout'
import React from 'react'
import bannerImage from "@/assets/images/venetian/lobby.jpg";
import bannerImage1 from "@/assets/images/venetian/gym.jpg";
import bannerImage2 from "@/assets/images/venetian/terraceView.jpg";
import bannerImage3 from "@/assets/images/venetian/item.jpg";
import bannerImage4 from "@/assets/images/venetian/lobby.jpg";
import logo from "@/assets/images/Venetian/logo.png";
import AboutProject from '@/components/fortune-florence/about-project/AboutProject';
import aboutProjectImage from "@/assets/images/venetian/item.jpg";
import aboutProjectImage1 from "@/assets/images/venetian/item_hover.jpg";
import Lifestyle from '@/components/fortune-florence/lifestyle/Lifestyle';
import flatImage1 from "@/assets/images/venetian/ground_floor.jpg";
import flatImage2 from "@/assets/images/venetian/1st_floor.jpg";
import flatImage3 from "@/assets/images/venetian/typical_floor_plan.jpg";
import flatImage4 from "@/assets/images/venetian/8th_floor.jpg";
import flatImage5 from "@/assets/images/venetian/15th _floor_refugee.jpg";
import flatImage6 from "@/assets/images/venetian/18th_floor.jpg";
import flatImage7 from "@/assets/images/venetian/19th_floor.jpg";
import flatImage8 from "@/assets/images/venetian/terrace.jpg";
import Gallery from '@/components/fortune-florence/gallery/Gallery';
import galleryImage1 from "@/assets/images/venetian/lobby.jpg";
import galleryImage2 from "@/assets/images/venetian/gym.jpg";
import galleryImage3 from "@/assets/images/venetian/terraceView.jpg";
import Location from '@/components/fortune-florence/location/Location';
import Head from 'next/head';

const fortuneVenetianPage = () => {
  return (
    <>
    <Head>
      <title>Fortune Group | Project - Fortune Venetian</title>
      <meta name="description" content="Fortune Group | Project - Fortune Venetian" />
    </Head>
    <Layout>
        <FlorenceBanner 
        bannerImage={bannerImage}
        bannerImage1={bannerImage1}
        bannerImage2={bannerImage2}
        bannerImage3={bannerImage3}
        bannerImage4={bannerImage4}
        logo={logo}
        title="The Jewel Life @ Andheri"
        description={null}
        />
        <AboutProject
        heading="About the project"
        title="Premium Residences offering a tranquil escape from city bustle"
        paragraph1="Fortune Venetian, developed by Vighnavinashanaya Vikasak LLP, is a luxurious residential tower rising 22 storeys high on Azad Nagar Lane No. 3, Veera Desai Road, Andheri West, Mumbai."
        paragraph2="The project spans a compact 0.19 acre plot and offers freehold ownership."
        aboutProjectImage={aboutProjectImage}
        aboutProjectImage1={aboutProjectImage1}
        Location="Azad Nagar, Veera Desai Road, Andheri West."
        Configuration= "Premium 1,2,3 BHK and Duplexes (4/6 BHK)"
        />
        {/*
          No *Extra props are passed here, so each floorPlan_N fancybox group
          contains only this project's single image. Next/Prev will simply
          have nothing to cycle to unless you add Venetian-specific extra
          images via flatImageNExtra={[...]} the same way Florence does below.
        */}
        <Lifestyle 
        flatImage={flatImage1}
        flatImageName="Ground Floor Plan"
        flatImage2={flatImage2}
        flatImage2Name="1st Floor Plan"
        flatImage3={flatImage3}
        flatImage3Name="Typical Floor Plan"
        flatImage4={flatImage4}
        flatImageName4="8th Floor Plan"
        flatImage5={flatImage5}
        flatImage5Name="15th Floor - Refugee"
        flatImage6={flatImage6}
        flatImage6Name="18th Floor Plan"
        flatImage7={flatImage7}
        flatImage7Name="19th Floor Plan"
        flatImage8={flatImage8}
        flatImage8Name="Terrace Floor Plan"
        />
        <Gallery 
        images={[
          galleryImage1,
          galleryImage2,
          galleryImage3,
        ]}
        />
        <Location />
    </Layout>
    </>
  )
}

export default fortuneVenetianPage