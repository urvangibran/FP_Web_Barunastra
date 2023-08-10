import { Tooltip } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-scroll'

import NextImage from '@/components/NextImage'
import { ProfileEPR } from '@/components/Profile/ProfileEPR'
import { ProfileMEC } from '@/components/Profile/ProfileMEC'
import { ProfileNTC } from '@/components/Profile/ProfileNTC'
import { Reveal } from '@/components/Reveal/Reveal'

function Team() {
  return (
    <section id='Team'>
      <section className='flex flex-col justify-start items-center h-full'>
        <div className='layout flex flex-col justify-center items-center mt-24 mb-14 md:mb-32'>
          <Reveal>
            <h5 className='md:my-3 py-3 text-[44px] font-[1000] gotham uppercase'>Meet</h5>
          </Reveal>
          <Reveal>
            <h1 className='text-[64px] font-[1000] gotham leading-[70px] text-center uppercase'>The Crew</h1>
          </Reveal>
          <Reveal>
            <p className='text-center mt-3 gotham w-[300px] md:w-[550px]'>Meet the extraordinary individuals who have come together, not just as teammates but as a family.</p>
          </Reveal>
        </div>
        <div className='gap-10 flex flex-col md:flex-row'>
          <Reveal>
            <Tooltip
              className='px-4 py-2 rounded-lg gotham font-semibold'
              label='Click to Visit the Programming Team Page'
              hasArrow
              placement='top'
              bg='#242424'
              color='white'
            >
              <div className='w-[289px] h-[289px] flex justify-center items-center rounded-[27px]' style={{ background: "linear-gradient(180deg, #4570DD 0%, #6A61E1 100%)" }}>
                <Link to="EPR" spy={true} smooth={true} offset={-100} duration={500} className='z-10 font-bold text-[60px] text-transparent gotham px-5 cursor-pointer'>LINK LINK LINK LINK LNK LINK LINK LINK LINK LINK</Link>

                <NextImage
                  className='cursor-pointer w-auto md:w-[219px] md:h-[220px] absolute'
                  src="/images/team/epr.png"
                  width='219'
                  height='220'
                  alt='Logo' />
              </div>
            </Tooltip>
          </Reveal>
          <Reveal>
            <Tooltip
              className='px-4 py-2 rounded-lg gotham font-semibold'
              label='Click to Visit the Mechanical Team Page'
              hasArrow
              placement='top'
              bg='#242424'
              color='white'
            >
              <div className='w-[289px] h-[289px] flex justify-center items-center rounded-[27px]' style={{ background: "linear-gradient(180deg, #4570DD 0%, #6A61E1 100%)" }}>
                <Link to="MEC" spy={true} smooth={true} offset={-100} duration={500} className='z-10 font-bold text-[60px] text-transparent gotham px-5 cursor-pointer'>LINK LINK LINK LINK LNK LINK LINK LINK LINK LINK</Link>
                <NextImage
                  className='cursor-pointer w-auto md:w-[219px] md:h-[220px] absolute '
                  src="/images/team/mec.png"
                  width='219'
                  height='220'
                  alt='Logo'
                />
              </div>
            </Tooltip>
          </Reveal>
          <Reveal>
            <Tooltip
              className='px-4 py-2 rounded-lg gotham font-semibold'
              label='Click to Visit the Techincal Team Page'
              hasArrow
              placement='top'
              bg='#242424'
              color='white'
            >
              <div className='w-[289px] h-[289px] flex justify-center items-center rounded-[27px]' style={{ background: "linear-gradient(180deg, #4570DD 0%, #6A61E1 100%)" }}>
                <Link to="NTC" spy={true} smooth={true} offset={-100} duration={500} className='z-10 font-bold text-[60px] text-transparent gotham px-5 cursor-pointer'>LINK LINK LINK LINK LNK LINK LINK LINK LINK LINK</Link>
                <NextImage
                  className='cursor-pointer w-auto md:w-[219px] md:h-[220px] absolute'
                  src="/images/team/ntc.png"
                  width='219'
                  height='220'
                  alt='Logo' />
              </div>
            </Tooltip>
          </Reveal>
        </div>
      </section>
      <section id='Team' className='h-full flex flex-col items-center justify-start '>
        <ProfileEPR />
      </section>
      <section className='h-full flex flex-col items-center justify-start'>
        <ProfileMEC />
      </section>
      <section id='Team' className='h-full flex flex-col items-center justify-start'>
        <ProfileNTC />
      </section>
    </section>
  )
}

export default Team