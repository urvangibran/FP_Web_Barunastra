import { Achievement } from '@/components/Achievement'
import { Midline } from '@/components/Midline'
import { Reveal } from '@/components/Reveal'
import ButtonLink from '@/components/links/ButtonLink'
import React from 'react'

function AchievementPage() {
  return (
    <div className='md:visible relative'>
      <section id='Achievement' className='h-full flex flex-col items-center'>
        <Reveal>
          <div className='h-[50px] '>
            <h1 className='text-[64px] mt-24 text-center gotham small-caps'>Our Achievement</h1>
          </div>
        </Reveal>
        <Midline />
        <div className="mt-[57px]">
          <Achievement
            tahun={22}
            textDesc='RoboBoat is an international student competition. Teams from around the world design autonomous, robotic boats (or ASVs) to navigate through a challenge course. '
            textAchievement={<span style={{ whiteSpace: 'pre-line' }}>Champion {'\n'} 2nd Place Design Communication Awards</span>}
            urlPhoto='juara.jpg'
          />
          <Achievement
            tahun={21}
            textDesc='RoboBoat is an international student competition. Teams from around the world design autonomous, robotic boats (or ASVs) to navigate through a challenge course. '
            textAchievement={<span style={{ whiteSpace: 'pre-line' }}>Champion {'\n'} 2nd Place Design Communication Awards</span>}
            urlPhoto='juara.jpg'
          />
          <Achievement
            tahun={20}
            textDesc='Kontes Kapal Cepat Tak Berawak (KKCTBN): is one of the competition agendas for innovation in design technology, prototype making, and prototype performance in the field of maritime-shipping technology. This competition is aimed at students, which is held annually by: Indonesian Talent Development Center-National Achievement Center-Indonesian Ministry of Education and Culture.'
            textAchievement={<span style={{ whiteSpace: 'pre-line' }}>1st Place Skills Video & Website {'\n'} 2nd Place Technical Design Report {'\n'} AUVSI 14th International Roboboat Competition
              (Conducted Online) </span>}
            urlPhoto='juara.jpg'
          />
        </div>
        <div className='gotham mt-5'>
          <Reveal>
            <ButtonLink
              size='xl'
              variant='dark'
              href='https://instagram.com/barunastra_its'
            > Show More</ButtonLink>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default AchievementPage