import * as React from 'react';

import Layout from '@/components/layout/Layout';
import { Navbar } from '@/components/Navbar';
import Seo from '@/components/Seo';


export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>

        <section className='bg-white'>
          <Navbar />
          <div className='layout flex flex-col justify-center items-center uppercase my-20'>
            <h5 className='my-10 text-[20px] font-bold gotham'>Welcome to</h5>
            <h1 className='text-[64px] font-bold gotham leading-[70px] text-center'>Barunastra ITS</h1>
          </div>
        </section>

      </main>


    </Layout>
  );
}