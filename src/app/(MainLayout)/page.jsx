"use client";

import React from 'react';

import Banner from '../../components/home/Banner/Banner';
import WhychooseUs from '../../components/home/WhyChooseUs/WhyChooseUs';
import OurServices from '../../components/home/OurServices/OurServices';
import Technology from '../../components/home/Technology/Technology';
import TargetIndustries from '../../components/home/TargetIndustries/TargetIndustries';
import ContactUs from '../../components/home/ContactUs/ContactUs';
import Testimonial from '../../components/home/Testimonial/Testimonial';
import CardSection from '../../components/home/CardSection/CardSection';
export default function Home() {

  return <main>
    <Banner />
    <WhychooseUs />
    <OurServices />
    <Technology />
    <TargetIndustries />
    <CardSection />
    <ContactUs />
    <Testimonial />
  </main>;
}
