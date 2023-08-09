import * as React from 'react'

import { CardsAchievement } from '@/components/CardsAchievement'
import ArrowLink from '@/components/links/ArrowLink';
import { Reveal } from '@/components/Reveal';
import { RevealX } from '@/components/RevealX';
import { RevealXR } from '@/components/RevealXR';

type Text = {
  //   topValue: number; // 300, 650, 1050, 1450, 1800
  tahun?: number;
  textDesc?: string;
  textAchievement?: JSX.Element;
  //   rightValue?: number; // 173, 180
  //   num?: number;
  urlPhoto?: string;
}

export const Achievement = (props: Text) => {
  return (
    <div id='Achievement' className='mt-[87px] flex relative'>
      <div className='absolute -top-[75px] left-1/2 transform -translate-x-1/2'>
        {/* <Reveal> */}
        <p className='gotham text-white text-6xl'> {props.tahun} </p>
        {/* </Reveal> */}
      </div>

      {/* left */}
      <div className='gotham mr-9 w-[400px] text-end'>
        <RevealX>
          <h3 className='gotham w-[400px] mb-2 text-3xl'>Description</h3>
        </RevealX>
        <RevealX>
          <p className='text-lg'>{props.textDesc}</p>
        </RevealX>
      </div>
      <CardsAchievement url={props.urlPhoto} />
      {/* right */}
      <div className='gotham ml-9'>
        <RevealXR>
          <h3 className='gotham mb-2 text-3xl'>Achievement</h3>
        </RevealXR>
        <RevealXR>
          <p className='w-[400px] text-lg '> {props.textAchievement} </p>
        </RevealXR>
        <div className='mt-2'>
          <Reveal>
            <ArrowLink
              href=''
              direction='right'
            >Show More</ArrowLink>
          </Reveal>
        </div>
      </div>
    </div>
  )
}