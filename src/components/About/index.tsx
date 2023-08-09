import { Cards } from '@/components/Cards'
import NextImage from '@/components/NextImage'
import { RevealX } from '@/components/RevealX'
import { RevealXR } from '@/components/RevealXR'
import ButtonLink from '@/components/links/ButtonLink'
import React from 'react'

function About() {
  return (
    <section className='flex relative justify-center items-center h-screen' id='About'>
      <div className='absolute w-[80%] flex flex-col-reverse md:flex-row md:justify-between'>
        <div className='md:w-[40%]'>
          <div className='bg-primary-500 md:w-[130px] rounded-md shadow-lg shadow-slate-500'>
            <RevealX>
              <p className='gotham text-[35px] font-bold p-2 py-4 flex items-center box-border text-white '>About</p>
            </RevealX>
          </div>
          <RevealX>
            <h3 className='gotham uppercase text-2xl font-bold text-[36px] my-4 md:my-5'>Barunastra ITS</h3>
          </RevealX>
          <RevealX>
            <p className='gotham font-bold text-[15px] first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:float-left first-letter:mr-3'>Team focuses on conducting research on Autonomous Surface Vehicle (ASV) since 2012. Established by ITS Robotics Students Union, Metic Club by Marine Engineering Department, and Hydro Modelling Club by Naval Architecture Department. We specialize in designing and producing ASV (Autonomous Surface Vehicle), FERC (Fuel Engine Remote Control) and RC (Remote Control) boats. Established by ITS Robotics, Metic Club from Marine Engineering, and Hydromodelling Club from Naval Architecture, Barunastra ITS has a strong commitment to help foster the world’s maritime technology advancement.</p>
          </RevealX>
          <RevealX>
            <ButtonLink
              className='mt-4'
              variant='primary'
              href='https://youtube.com/'
            >
              Learn More
            </ButtonLink>
          </RevealX>
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </section>
  )
}

export default About