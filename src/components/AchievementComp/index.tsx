import * as React from 'react'

import ArrowLink from '@/components/links/ArrowLink';
import { CardsAchievement } from '@/components/Cards/CardsAchievement';
import { RevealX } from '@/components/Reveal/RevealX';
import { RevealXR } from '@/components/Reveal/RevealXR';
import { Reveal } from '@/components/Reveal/Reveal';

type Text = {
  tahun?: number;
  textDesc?: string;
  textAchievement?: JSX.Element;
  urlPhoto?: string;
}

export const Achievement = (props: Text) => {
  return (
    <div id='Achievement' className='mt-[87px] grid grid-cols-[2fr,1fr,2fr] relative'>
      {/* left */}
      <div className='gotham mr-9 text-end flex flex-col items-end'>
        <RevealX>
          <h3 className='gotham mb-2 text-3xl text-end w-full'>Description</h3>
        </RevealX>
        <RevealX>
          <p className='text-lg max-w-[400px] '>{props.textDesc}</p>
        </RevealX>
      </div>
      <CardsAchievement url={props.urlPhoto} tahun={props.tahun} />
      {/* right */}
      <div className='gotham ml-9 '>
        <RevealXR>
          <h3 className='gotham mb-2 text-3xl'>Achievement</h3>
        </RevealXR>
        <RevealXR>
          <p className='text-lg '> {props.textAchievement} </p>
        </RevealXR>
        <div className='mt-2'>
          <Reveal>
            <ArrowLink
              href='https://barunastra-its.vercel.app'
              direction='right'
            >Show More</ArrowLink>
          </Reveal>
        </div>
      </div>
    </div>
  )
}