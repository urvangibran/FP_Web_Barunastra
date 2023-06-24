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
            <Reveal>
              <h5 className='mt-10 mb-5 text-[20px] font-bold gotham uppercase'>Welcome to</h5>
            </Reveal>
            <Reveal>
              <h1 className='text-[64px] mb-2 font-bold gotham leading-[70px] text-center uppercase'>Barunastra ITS</h1>
            </Reveal>
            <Reveal>
              <p className='gotham ml-[115px] md:ml-[277px] text-center w-[50%]'>Barunastra ITS Roboboat team is a research team from Sepuluh Nopember Institute of Technology ITS which focuses on developing unmaned vessels since 2012.</p>
            </Reveal>
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
          <div className='absolute bottom-[-690px] md:bottom-[-630px] w-[80%] flex flex-col-reverse md:flex-row md:justify-between'>
            <div className='md:w-[40%]'>
              <div className='bg-primary-500 md:w-[130px] rounded-md shadow-lg shadow-slate-500'>
                <RevealX>
                  <p className='gotham text-[35px] font-bold p-2 py-4 flex items-center box-border text-white '>About</p>
                </RevealX>
              </div>
              <RevealX>
                <h3 className='gotham uppercase text-2xl font-bold text-[36px] my-14 md:my-5'>Barunastra ITS</h3>
              </RevealX>
              <RevealX>
                <p className='gotham font-bold text-[15px] first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:float-left first-letter:mr-3'>Team focuses on conducting research on Autonomous Surface Vehicle (ASV) since 2012. Established by ITS Robotics Students Union, Metic Club by Marine Engineering Department, and Hydro Modelling Club by Naval Architecture Department. We specialize in designing and producing ASV (Autonomous Surface Vehicle), FERC (Fuel Engine Remote Control) and RC (Remote Control) boats. Established by ITS Robotics, Metic Club from Marine Engineering, and Hydromodelling Club from Naval Architecture, Barunastra ITS has a strong commitment to help foster the world’s maritime technology advancement.</p>
              </RevealX>
              <RevealX>
                <ButtonLink
                  className='mt-4'
                  variant='primary'
                  href='https://youtube.com'
                >
                  Learn More
                </ButtonLink>
              </RevealX>
            </div>
            <Cards />
            <RevealXR>
              <div className='absolute md:static top-[-100px]'>
                <NextImage
                  className='cursor-pointer w-auto z-10 md:w-[695px] md:h-[391px]'
                  src="/images/kapalAbout.jpg"
                  width='695'
                  height='391'
                  alt='Logo' />
              </div>
            </RevealXR>
          </div>
        </section>
        <section className='absolute bottom-[-1030px]'>
          <div className='w-[518px] md:w-[1900px] h-[270px] bg-red bg-[url(/images/parallax.jpg)] bg-cover object-cover bg-fixed drop-shadow-[0 35px 35px rgba(0, 0, 0, 0.25)] drop-shadow-xl shadow-slate-800'></div>
        </section>
        <section id='Team'>
          <section className='flex justify-center h-screen'>
            <div className='layout absolute bottom-[-1240px] md:bottom-[-1330px] flex flex-col justify-center items-center'>
              <Reveal>
                <h5 className='md:my-3 py-3 text-[44px] font-[1000] gotham uppercase'>Meet</h5>
              </Reveal>
              <Reveal>
                <h1 className='text-[64px] font-[1000] gotham leading-[70px] text-center uppercase'>The Crew</h1>
              </Reveal>
              <Reveal>
                <p className='text-center ml-[115px] md:ml-[277px] mt-3 gotham w-[50%]'>Meet the extraordinary individuals who have come together, not just as teammates but as a family.</p>
              </Reveal>
            </div>
            <div className='gap-10 absolute bottom-[-2200px] md:bottom-[-1730px] flex flex-col md:flex-row md:gap-[300px]'>
              <Reveal>
                <div className='w-[289px] h-[289px] flex justify-center items-center rounded-[27px]' style={{ background: "linear-gradient(180deg, #4570DD 0%, #6A61E1 100%)" }}>
                  <Link to="EPR" spy={true} smooth={true} offset={-100} duration={500} className='z-10 font-bold text-[60px] text-transparent gotham px-5 cursor-pointer'>LINK LINK LINK LINK LNK LINK LINK LINK LINK LINK</Link>
                  <NextImage
                    className='cursor-pointer w-auto md:w-[219px] md:h-[220px] absolute'
                    src="/images/epr.png"
                    width='219'
                    height='220'
                    alt='Logo' />
                </div>
              </Reveal>
              <Reveal>
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
              </Reveal>
              <Reveal>
                <div className='w-[289px] h-[289px] flex justify-center items-center rounded-[27px]' style={{ background: "linear-gradient(180deg, #4570DD 0%, #6A61E1 100%)" }}>
                  <Link to="NTC" spy={true} smooth={true} offset={-100} duration={500} className='z-10 font-bold text-[60px] text-transparent gotham px-5 cursor-pointer'>LINK LINK LINK LINK LNK LINK LINK LINK LINK LINK</Link>
                  <NextImage
                    className='cursor-pointer w-auto md:w-[219px] md:h-[220px] absolute'
                    src="/images/ntc.png"
                    width='219'
                    height='220'
                    alt='Logo' />
                </div>
              </Reveal>
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
        <div className='md:visible relative md:mb-[450px] md:top-0 top-[3800px] '>
          <section id='Achievement' className='h-[200vh] flex justify-center'>
            <Reveal>
              <h1 className='hidden md:block text-[64px] mt-24 text-center gotham top- md:top-[120px] small-caps'>Our Achievement</h1>
            </Reveal>
            <Midline />
            <Achievement
              tahun={22}
              topValue={300}
              textDesc='RoboBoat is an international student competition. Teams from around the world design autonomous, robotic boats (or ASVs) to navigate through a challenge course. '
              textAchievement={<span style={{ whiteSpace: 'pre-line' }}>Champion {'\n'} 2nd Place Design Communication Awards</span>}
              num={0}
              urlPhoto='roboboat2022.png'
            />
            <Achievement
              topValue={650}
              textDesc='RoboBoat is an international student competition. Teams from around the world design autonomous, robotic boats (or ASVs) to navigate through a challenge course. '
              textAchievement={<span style={{ whiteSpace: 'pre-line' }}>Champion {'\n'} 2nd Place Design Communication Awards</span>}
              num={1}
            />
            <Achievement
              tahun={21}
              rightValue={180}
              topValue={1050}
              textDesc='Kontes Kapal Cepat Tak Berawak (KKCTBN): is one of the competition agendas for innovation in design technology, prototype making, and prototype performance in the field of maritime-shipping technology. This competition is aimed at students, which is held annually by: Indonesian Talent Development Center-National Achievement Center-Indonesian Ministry of Education and Culture.'
              textAchievement={<span style={{ whiteSpace: 'pre-line' }}>1st Place Skills Video & Website {'\n'} 2nd Place Technical Design Report {'\n'} AUVSI 14th International Roboboat Competition
                (Conducted Online) </span>}
              num={2}
            />
            <Achievement
              rightValue={180}
              tahun={19}
              topValue={1450}
              textDesc='RoboBoat is an international student competition. Teams from around the world design autonomous, robotic boats (or ASVs) to navigate through a challenge course. '
              textAchievement={<span style={{ whiteSpace: 'pre-line' }}>1st Place AUVSI 12th International Roboboat Competition, 2019, Florida, USA {'\n'}</span>}
              num={0}
            />
            <Achievement
              topValue={1800}
              textDesc='Kontes Kapal Cepat Tak Berawak (KKCTBN): is one of the competition agendas for innovation in design technology, prototype making, and prototype performance in the field of maritime-shipping technology. This competition is aimed at students, which is held annually by: Indonesian Talent Development Center-National Achievement Center-Indonesian Ministry of Education and Culture.'
              textAchievement={<span style={{ whiteSpace: 'pre-line' }}>2nd Place & Best Design Award Kompetisi Kapal Cepat Tak Berawak Nasional (KKCTBN) 2019, Malang, Indonesia {'\n'}</span>}
              num={1}
            />
            <div className='hidden md:block absolute bottom-[-325px] gotham'>
              <Reveal>
                <ButtonLink
                  size='xl'
                  variant='dark'
                  href='https://instagram.com/barunastra_its'
                // href='/robot'
                > Show More</ButtonLink>
              </Reveal>
            </div>
          </section>
        </div>
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
                className='bottom-[-3100px] left-[138px] absolute visible md:hidden
               '
                size='xl'
                variant='dark'
                href='https://instagram.com/barunastra_its'
              // href='/robot'
              > Know More About Barunastra!</ButtonLink>
            </div>
          </section>
        </div>

      </main>

    </Layout>
  );
}