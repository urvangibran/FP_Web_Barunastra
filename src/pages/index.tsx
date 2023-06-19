import * as React from 'react';

import Layout from '@/components/layout/Layout';
import { Navbar } from '@/components/Navbar';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import { Cards } from '@/components/Cards';
import ButtonLink from '@/components/links/ButtonLink';


export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white h-screen' id='Home'>
          <Navbar />
          <div className='layout flex flex-col justify-center items-center uppercase my-20'>
            <h5 className='my-10 text-[20px] font-bold gotham'>Welcome to</h5>
            <h1 className='text-[64px] font-bold gotham leading-[70px] text-center'>Barunastra ITS</h1>
          </div>
          <NextImage
            className='cursor-pointer absolute w-auto md:bottom-[-60px] md:right-[450px]'
            src="/images/kapal.png"
            width='930'
            height='562'
            alt='Logo'
          />
        </section>
        <section className='flex justify-center h-screen' id='About'>
          <div className='absolute bottom-[-540px] md:bottom-[-730px] w-[80%] flex flex-col-reverse md:flex-row md:justify-between'>
            <div className='md:w-[40%]'>
              <div className='bg-primary-500 md:w-[130px] rounded-md shadow-lg shadow-slate-500'>
                <p className='gotham text-[35px] mt-5 font-bold p-2 py-4 box-border text-white '>About</p>
              </div>
              <h3 className='gotham uppercase text-2xl font-bold text-[36px] my-5'>Barunastra ITS</h3>
              <p className='gotham font-bold text-[15px] first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:float-left first-letter:mr-3'>Team focuses on conducting research on Autonomous Surface Vehicle (ASV) since 2012. Established by ITS Robotics Students Union, Metic Club by Marine Engineering Department, and Hydro Modelling Club by Naval Architecture Department. We specialize in designing and producing ASV (Autonomous Surface Vehicle), FERC (Fuel Engine Remote Control) and RC (Remote Control) boats. Established by ITS Robotics, Metic Club from Marine Engineering, and Hydromodelling Club from Naval Architecture, Barunastra ITS has a strong commitment to help foster the world’s maritime technology advancement.</p>
              <ButtonLink
                className='mt-4'
                variant='primary'
                href='https://youtube.com'
              >
                Learn More
              </ButtonLink>
            </div>
            <Cards />
            <div>
              <NextImage
                className='cursor-pointer w-auto z-10 md:w-[695px] md:h-[391px]'
                src="/images/kapalAbout.jpg"
                width='695'
                height='391'
                alt='Logo' />
            </div>
          </div>
        </section>
        <section className='flex justify-center h-screen' id='Team'>
          <div className='layout absolute bottom-[-700px] md:bottom-[-1230px] flex flex-col justify-center items-center uppercase'>
            <h5 className='my-3 text-[44px] font-[1000] gotham uppercase'>Meet</h5>
            <h1 className='text-[64px] font-[1000] gotham leading-[70px] text-center uppercase'>The Crew</h1>
          </div>
          <div className='gap-10 absolute bottom-[-1700px] md:bottom-[-1730px] flex flex-col md:flex-row md:gap-[300px]'>
            <div className='w-[289px] h-[289px] flex justify-center items-center rounded-[27px]' style={{ background: "linear-gradient(180deg, #4570DD 0%, #6A61E1 100%)" }}>
              <NextImage
                className='cursor-pointer w-auto md:w-[219px] md:h-[220px] '
                src="/images/epr.png"
                width='219'
                height='220'
                alt='Logo' />
            </div>
            <div className='w-[289px] h-[289px] flex justify-center items-center rounded-[27px]' style={{ background: "linear-gradient(180deg, #4570DD 0%, #6A61E1 100%)" }}>
              <NextImage
                className='cursor-pointer w-auto md:w-[219px] md:h-[220px] '
                src="/images/mec.png"
                width='219'
                height='220'
                alt='Logo' />
            </div>
            <div className='w-[289px] h-[289px] flex justify-center items-center rounded-[27px]' style={{ background: "linear-gradient(180deg, #4570DD 0%, #6A61E1 100%)" }}>
              <NextImage
                className='cursor-pointer w-auto md:w-[219px] md:h-[220px] '
                src="/images/ntc.png"
                width='219'
                height='220'
                alt='Logo' />
            </div>
          </div>
        </section>
      </main>

    </Layout>
  );
}