import { Navbar } from '@/components/Navbar/Navbar'
import NextImage from '@/components/NextImage'
import { Reveal } from '@/components/Reveal/Reveal'
import React from 'react'

function LandingPage() {
  return (
    <section className=' h-full' id='Home'>
      <Navbar />
      <div className='layout flex flex-col justify-center items-center my-20'>
        <Reveal>
          <h5 className='mt-10 mb-5 text-[20px] font-bold gotham uppercase'>Welcome to</h5>
        </Reveal>
        <Reveal>
          <h1 className='text-[54px] mb-2 font-bold gotham leading-[70px] text-center uppercase'>Barunastra ITS</h1>
        </Reveal>
        <Reveal>
          <div className='flex justify-center'>
            <p className='gotham text-center w-[50%]'>Barunastra ITS Roboboat team is a research team from Sepuluh Nopember Institute of Technology ITS which focuses on developing unmaned vessels since 2012.</p>
          </div>
        </Reveal>
      </div>
      <div className='flex justify-center items-center'>
        <NextImage
          className='cursor-pointer w-[50%] '
          src="/images/kapal.png"
          width='930'
          height='562'
          alt='Logo'
        />
      </div>
    </section>
  )
}

export default LandingPage