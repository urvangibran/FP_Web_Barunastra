import { Achievement } from '@/components/Achievement'
import { Midline } from '@/components/Midline'
import { Reveal } from '@/components/Reveal'
import ButtonLink from '@/components/links/ButtonLink'
import React from 'react'

function AchievementPage() {
  return (
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
  )
}

export default AchievementPage