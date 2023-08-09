import * as React from 'react'

import { CardsAchievement } from '@/components/CardsAchievement'
import ArrowLink from '@/components/links/ArrowLink';
import NextImage from '@/components/NextImage'
import { Reveal } from '@/components/Reveal';
import { RevealX } from '@/components/RevealX';
import { RevealXR } from '@/components/RevealXR';

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
  const { topValue, num, tahun, rightValue = 173, urlPhoto, textDesc, textAchievement } = props;
  const numSecond = [300, 650, 1050, 1450, 1800, 173, 180]

  return (
    <div id='Achievement' className={`md:block hidden absolute top-[${topValue}px] `}>
      <CardsAchievement num={num} />
      <div className='absolute md:static top-[-100px]'>
        {/* <Reveal> */}
        <p className={`gotham text-white absolute text-6xl right-[${rightValue || 173}px] top-[-86px] `}> {tahun} </p>
        {/* </Reveal> */}
        <Reveal>
          <NextImage
            className='cursor-pointer w-auto z-10 md:w-[420px] md:h-[294px]'
            src={urlPhoto ? `/images/achievement/${urlPhoto}` : '/images/achievement/juara.jpg'}
            width='420'
            height='294'
            alt='LogoJuara' />
        </Reveal>

      </div>
      <div className='gotham absolute w-[400px] left-[-433px] text-end top-[20px]'>
        <RevealX>
          <h3 className='gotham w-[400px]'>Description</h3>
        </RevealX>
        <RevealX>
          <p className=''>{textDesc}</p>
        </RevealX>
      </div>
      <div className='gotham absolute right-[-444px] top-[20px] '>
        <RevealXR>
          <h3 className='gotham'>Achievement</h3>
        </RevealXR>
        <RevealXR>
          <p className='w-[400px] '> {textAchievement} </p>
        </RevealXR>
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