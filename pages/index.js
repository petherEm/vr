import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";
import NavMobile from "../components/NavMobile";
import Experience from "../components/Experience";
import Video from "../components/Video";
import Headset from "../components/Headset";
import Testimonials from "../components/Testimonials";
import Explore from "../components/Explore";
import Training from "../components/Training";

//import aos (animate on scroll)
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Aos from "aos";



export default function Home() {
  const [navMobile, setNavMobile] = useState(false);

  //Aos init

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400
    })
  }, [])

  return (
    <div className="relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex">
      <Head>
        <title>VR Shop</title>
        <meta name="description" content="VR Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setNavMobile={setNavMobile} />
      <Training />
      <Banner />

      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>

      <Experience />
      <Video />
      <Headset />
      <Testimonials />
      <Explore />
    </div>
  );
}
