import * as React from 'react';
import { Link } from 'react-scroll'

import { Achievement } from '@/components/Achievement';
import { Cards } from '@/components/Cards';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import { Midline } from '@/components/Midline';
import { Navbar } from '@/components/Navbar';
import NextImage from '@/components/NextImage';
import { ProfileEPR } from '@/components/ProfileEPR';
import { ProfileMEC } from '@/components/ProfileMEC';
import { ProfileNTC } from '@/components/ProfileNTC';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo
        templateTitle='Web Kelompok 4 FP Barunastra'
        description='Awesome Page'
      />

      <main>
        <section className='bg-white h-screen' id='Home'>
          <Navbar />
          <div className='layout flex flex-col justify-center items-center my-20'>
            <h5 className='mt-10 mb-5 text-[20px] font-bold gotham uppercase'>Welcome to</h5>
            <h1 className='text-[64px] mb-2 font-bold gotham leading-[70px] text-center uppercase'>Barunastra ITS</h1>
            <p className='gotham text-center w-[50%]'>Barunastra ITS Roboboat team is a research team from Sepuluh Nopember Institute of Technology ITS which focuses on developing unmaned vessels since 2012.</p>
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
          <div className='absolute bottom-[-540px] md:bottom-[-630px] w-[80%] flex flex-col-reverse md:flex-row md:justify-between'>
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
            <div className='absolute md:static top-[-100px]'>
              <NextImage
                className='cursor-pointer w-auto z-10 md:w-[695px] md:h-[391px]'
                src="/images/kapalAbout.jpg"
                width='695'
                height='391'
                alt='Logo' />
            </div>
          </div>
        </section>
        <section className='absolute bottom-[-1030px]'>
          <div className='w-[524px] md:w-[1900px] h-[270px] bg-red bg-[url(/images/parallax.jpg)] bg-cover object-cover bg-fixed drop-shadow-[0 35px 35px rgba(0, 0, 0, 0.25)] drop-shadow-xl shadow-slate-800'></div>
        </section>
        <section id='Team'>
          <section className='flex justify-center h-screen'>
            <div className='layout absolute bottom-[-1200px] md:bottom-[-1330px] flex flex-col justify-center items-center'>
              <h5 className='my-3 text-[44px] font-[1000] gotham uppercase'>Meet</h5>
              <h1 className='text-[64px] font-[1000] gotham leading-[70px] text-center uppercase'>The Crew</h1>
              <p className='text-center mt-3 gotham w-[50%]'>Our specialist are out pride. <br /> Team gracefully orchestrates the symphony of code, navigating the digital waters with precision and innovation.</p>
            </div>
            <div className='gap-10 absolute bottom-[-2200px] md:bottom-[-1730px] flex flex-col md:flex-row md:gap-[300px]'>
              <div className='w-[289px] h-[289px] flex justify-center items-center rounded-[27px]' style={{ background: "linear-gradient(180deg, #4570DD 0%, #6A61E1 100%)" }}>
                <Link to="EPR" spy={true} smooth={true} offset={-100} duration={500} className='z-10 font-bold text-[60px] text-transparent gotham px-5 cursor-pointer'>LINK LINK LINK LINK LNK LINK LINK LINK LINK LINK</Link>
                <NextImage
                  className='cursor-pointer w-auto md:w-[219px] md:h-[220px] absolute'
                  src="/images/epr.png"
                  width='219'
                  height='220'
                  alt='Logo' />
              </div>
              <div className='w-[289px] h-[289px] flex justify-center items-center rounded-[27px]' style={{ background: "linear-gradient(180deg, #4570DD 0%, #6A61E1 100%)" }}>
                <Link to="MEC" spy={true} smooth={true} offset={-100} duration={500} className='z-10 font-bold text-[60px] text-transparent gotham px-5 cursor-pointer'>LINK LINK LINK LINK LNK LINK LINK LINK LINK LINK</Link>
                <NextImage
                  className='cursor-pointer w-auto md:w-[219px] md:h-[220px] absolute '
                  src="/images/mec.png"
                  width='219'
                  height='220'
                  alt='Logo'
                />
              </div>
              <div className='w-[289px] h-[289px] flex justify-center items-center rounded-[27px]' style={{ background: "linear-gradient(180deg, #4570DD 0%, #6A61E1 100%)" }}>
                <Link to="NTC" spy={true} smooth={true} offset={-100} duration={500} className='z-10 font-bold text-[60px] text-transparent gotham px-5 cursor-pointer'>LINK LINK LINK LINK LNK LINK LINK LINK LINK LINK</Link>
                <NextImage
                  className='cursor-pointer w-auto md:w-[219px] md:h-[220px] absolute'
                  src="/images/ntc.png"
                  width='219'
                  height='220'
                  alt='Logo' />
              </div>
            </div>
          </section>
          <section id='Team' className='h-screen flex justify-center'>
            <ProfileEPR />
          </section>
          <section className='h-screen flex justify-center'>
            <ProfileMEC />
          </section>
          <section id='Team' className='h-screen flex justify-center'>
            <ProfileNTC />
          </section>
        </section>
        <div className='relative mb-[450px] '>
          <section id='Achievement' className='h-[200vh] flex justify-center'>
            <h1 className='text-[64px] text-center gotham absolute md:top-[120px] '>Our Achievement</h1>
            <Midline />
            <Achievement
              tahun={23}
              topValue={300}
              textDesc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique harum labore natus dolores omnis iste quaerat optio tempore nemo. Exercitationem assumenda, ad earum consequatur et aliquid fuga. Adipisci deserunt molestiae suscipit, aperiam aspernatur rem accusantium quae eligendi a aliquid perspiciatis id tenetur fuga asperiores repudiandae vitae dicta repellat earum excepturi?'
              textAchievement='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vel possimus consectetur distinctio nam. Tempora, illum sequi sit mollitia nisi sed est. Sed aut totam hic laudantium voluptatem tenetur quaerat.'
            />
            <Achievement
              topValue={650}
              textDesc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique harum labore natus dolores omnis iste quaerat optio tempore nemo. Exercitationem assumenda, ad earum consequatur et aliquid fuga. Adipisci deserunt molestiae suscipit, aperiam aspernatur rem accusantium quae eligendi a aliquid perspiciatis id tenetur fuga asperiores repudiandae vitae dicta repellat earum excepturi?'
              textAchievement='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vel possimus consectetur distinctio nam. Tempora, illum sequi sit mollitia nisi sed est. Sed aut totam hic laudantium voluptatem tenetur quaerat.'
            />
            <Achievement
              tahun={22}
              topValue={1050}
              textDesc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique harum labore natus dolores omnis iste quaerat optio tempore nemo. Exercitationem assumenda, ad earum consequatur et aliquid fuga. Adipisci deserunt molestiae suscipit, aperiam aspernatur rem accusantium quae eligendi a aliquid perspiciatis id tenetur fuga asperiores repudiandae vitae dicta repellat earum excepturi?'
              textAchievement='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vel possimus consectetur distinctio nam. Tempora, illum sequi sit mollitia nisi sed est. Sed aut totam hic laudantium voluptatem tenetur quaerat.'
            />
            <Achievement
              rightValue={180}
              tahun={21}
              topValue={1450}
              textDesc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique harum labore natus dolores omnis iste quaerat optio tempore nemo. Exercitationem assumenda, ad earum consequatur et aliquid fuga. Adipisci deserunt molestiae suscipit, aperiam aspernatur rem accusantium quae eligendi a aliquid perspiciatis id tenetur fuga asperiores repudiandae vitae dicta repellat earum excepturi?'
              textAchievement='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vel possimus consectetur distinctio nam. Tempora, illum sequi sit mollitia nisi sed est. Sed aut totam hic laudantium voluptatem tenetur quaerat.'
            />
            <Achievement
              topValue={1800}
              textDesc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique harum labore natus dolores omnis iste quaerat optio tempore nemo. Exercitationem assumenda, ad earum consequatur et aliquid fuga. Adipisci deserunt molestiae suscipit, aperiam aspernatur rem accusantium quae eligendi a aliquid perspiciatis id tenetur fuga asperiores repudiandae vitae dicta repellat earum excepturi?'
              textAchievement='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vel possimus consectetur distinctio nam. Tempora, illum sequi sit mollitia nisi sed est. Sed aut totam hic laudantium voluptatem tenetur quaerat.'
            />
            <div className='absolute bottom-[-325px] gotham'>
              <ButtonLink
                size='xl'
                variant='dark'
                href='https://instagram.com/barunastra_its'
              > Show More</ButtonLink>
            </div>
          </section>
        </div>
        <div className='relative'>
          <section id='Contact' className='h-screen flex justify-center'>
            <NextImage
              className='cursor-pointer w-auto bottom-0 md:w-[1905px] md:h-[850px] absolute'
              src="/images/footerPhotos.png"
              width='1905'
              height='850'
              alt='Logo' />
          </section>
        </div>

      </main>

    </Layout>
  );
}