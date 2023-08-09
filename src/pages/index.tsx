import * as React from 'react';
import { Link } from 'react-scroll'

import { Achievement } from '@/components/Achievement';
import { Cards } from '@/components/Cards';
import { Footer } from '@/components/Footer';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import { Midline } from '@/components/Midline';
import { Navbar } from '@/components/Navbar';
import NextImage from '@/components/NextImage';
import { ProfileEPR } from '@/components/ProfileEPR';
import { ProfileMEC } from '@/components/ProfileMEC';
import { ProfileNTC } from '@/components/ProfileNTC';
import { Reveal } from '@/components/Reveal';
import { RevealX } from '@/components/RevealX';
import { RevealXR } from '@/components/RevealXR';
import Seo from '@/components/Seo';
import LandingPage from '@/components/LandingPage';
import About from '@/components/About';
import Team from '@/components/Team';

export default function HomePage() {
  return (
    <Layout>
      <Seo
        templateTitle='Web Kelompok 4 FP Barunastra'
        description='Awesome Page'
      />

      <main>
        <LandingPage />
        <About />
        <section className=''>
          <div className='w-screen h-[300px] bg-[url(/images/parallax.jpg)] bg-cover object-cover bg-fixed drop-shadow-[0 35px 35px rgba(0, 0, 0, 0.25)] drop-shadow-xl shadow-slate-800'></div>
        </section>
        <Team />  
        
        
        
        {/*
        <div className='relative'>
          <section id='Contact' className='h-screen flex justify-center'>
            <NextImage
              className='md:block hidden cursor-pointer w-auto bottom-0 md:w-[1920px] md:h-[860px] absolute'
              src="/images/footerPhotos.png"
              width='1925'
              height='850'
              alt='Logo' />
            <div className='absolute left-[108px] bottom-[-3200px] md:bottom-[-20px] md:visible'>
              <Footer />
            </div>
            <div>
              <ButtonLink
                className='bottom-[-1100px] left-[138px] absolute visible md:hidden
               '
                size='xl'
                variant='dark'
                href='https://instagram.com/barunastra_its'
              // href='/robot'
              > Know More About Barunastra!</ButtonLink>
            </div>
          </section>
        </div>
*/}
      </main>

    </Layout>
  );
}