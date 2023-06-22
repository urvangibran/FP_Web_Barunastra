import * as React from 'react'

import { CardsAchievement } from '@/components/CardsAchievement'
import ArrowLink from '@/components/links/ArrowLink';
import NextImage from '@/components/NextImage'
import { Reveal } from '@/components/Reveal';

type Text = {
  topValue: number; // 300, 650, 1050, 1450, 1800
  tahun?: number;
  textDesc?: string;
  textAchievement?: JSX.Element;
  rightValue?: number; // 173, 180
  num?: number;
  urlPhoto?: string;
}

export const Achievement = (props: Text) => {
  return (
    <div id='Achievement' className={`absolute top-[${props.topValue}px] `}>
      <CardsAchievement num={props.num} />
      <div className='absolute md:static top-[-100px]'>
        {/* <Reveal> */}
          <p className={`gotham text-white absolute text-6xl right-[${props.rightValue || 173}px] top-[-86px] `}> {props.tahun} </p>
        {/* </Reveal> */}
        <Reveal>
          <NextImage
            className='cursor-pointer w-auto z-10 md:w-[420px] md:h-[294px]'
            src={props.urlPhoto ? `/images/achievement/${props.urlPhoto}` : '/images/achievement/juara.jpg'}
            width='420'
            height='294'
            alt='LogoJuara' />
        </Reveal>

      </div>
      <div className='gotham absolute w-[400px] left-[-433px] text-end top-[20px]'>
        <Reveal>
          <h3 className='gotham w-[400px]'>Description</h3>
        </Reveal>
        <Reveal>
          <p className=''>{props.textDesc}</p>
        </Reveal>
      </div>
      <div className='gotham absolute right-[-444px] top-[20px] '>
        <Reveal>
          <h3 className='gotham'>Achievement</h3>
        </Reveal>
        <Reveal>
          <p className='w-[400px] '> {props.textAchievement} </p>
        </Reveal>
        <div className='absolute bottom-[-30px] '>
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