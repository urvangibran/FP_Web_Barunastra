import React from 'react'

import ButtonLink from '@/components/links/ButtonLink'
import { Midline } from '@/components/Midline'
import { Achievement } from '@/components/AchievementComp/index'
import { Reveal } from '@/components/Reveal/Reveal'

function AchievementPage() {
  return (
    <div className='md:visible relative mt-10'>
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
            textAchievement={<span style={{ whiteSpace: 'pre-line' }}>Champion {'\n'} 1st Place Autonomy Challenge Awards {'\n'} 1st Place Design Documentation AUVSI 15th International Roboboat Competition, 2022, Florida, USA</span>}
            urlPhoto='Champion22.jpg'
          />
          <Achievement
            tahun={21}
            textDesc='RoboBoat is an international student competition. Teams from around the world design autonomous, robotic boats (or ASVs) to navigate through a challenge course. '
            textAchievement={<span style={{ whiteSpace: 'pre-line' }}>Champion {'\n'} 1st Place Skills Video & Website {'\n'} 2nd Place Technical Desgin Report AUVSI 14th International Roboboat Competition, 2019, Florida, USA</span>}
            urlPhoto='Champion21.png'
          />
          <Achievement
            tahun={20}
            textDesc='Kontes Kapal Cepat Tak Berawak (KKCTBN): is one of the competition agendas for innovation in design technology, prototype making, and prototype performance in the field of maritime-shipping technology.'
            textAchievement={<span style={{ whiteSpace: 'pre-line' }}>1st Place Kompetisi Kapal Cepat Tak Berawak nasional (KKCTBN) 2020, Malang, Indonesia {'\n'} 3rd Place FERC Sub-Competition Kompetisi Kapal Cepat Tak Berawak Nasional (KKCTBN) 2021, Malang, Indonesia {'\n'}
              (Conducted Online) </span>}
            urlPhoto='Champion20.jpg'
          />
        </div>
        <div className='gotham my-5'>
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