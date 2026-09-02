import ContactUs from '@/components/contact-us/ContactUs'
import Layout from '@/components/Layout/Layout'
import Head from 'next/head'
import React from 'react'

const ConatctUsPage = () => {
  return (
    <>
    <Head>  
      <title>Fortune Group | Contact Us</title>
    </Head>
      <Layout>
        <ContactUs />
      </Layout>
    </>
  )
}

export default ConatctUsPage