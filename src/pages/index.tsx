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
import AchievementPage from '@/components/AchievementPage';
import LastPage from '@/components/LastPage';

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
        <AchievementPage />
        <LastPage />
      </main>

    </Layout>
  );
}