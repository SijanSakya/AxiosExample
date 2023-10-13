"use client"
import HeroSection from '@/components/HeroSection'
import FirstRequest from '@/components/axios/FirstRequest'
import FetchData from '@/components/axios/fetchData'
import GlobalInstance from '@/components/axios/globalInstance'
// import '../axios/global' ;
import Image from 'next/image'
import CustomInstance from '@/components/axios/customInstance';


export default function Home() {
  return (
  <div>
    {/* <HeroSection />
    <FirstRequest />
    <FetchData /> */}
    {/* <GlobalInstance /> */}
    <CustomInstance />
  </div>
  )
}
