import React from 'react'
import Hero from '@/components/Hero';
import CompanyLogos from '@/components/CompanyLogos';
import AboutUs from '@/components/AboutUs';
import NewsUpdate from '@/components/NewsUpdate';
import Resume from '@/components/Resume';
import Head from '@/components/Head';

export default function page() {
  return (
  <main>
    {/* <Head /> */}
    <Hero/>
    <AboutUs/>
    <CompanyLogos/>
    <NewsUpdate/>
    
    <Resume />
  </main>
    
  )
}
