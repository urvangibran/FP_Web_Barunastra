import * as React from 'react'

import { CardsAchievement } from '@/components/CardsAchievement'
import ArrowLink from '@/components/links/ArrowLink';
import NextImage from '@/components/NextImage'

type Text = {
  topValue: number;
  tahun?: number;
  textDesc?: string;
  textAchievement?: string;
  rightValue?: number;
}

export const Achievement = (props: Text) => {
  return (
    <div id='Achievement' className={`absolute top-[${props.topValue}px] `}>
      <CardsAchievement />
      <div className='absolute md:static top-[-100px]'>
        <p className= {`gotham text-white absolute text-6xl right-[${ props.rightValue || 173 }px] top-[-86px] `}> {props.tahun} </p>
        <NextImage
          className='cursor-pointer w-auto z-10 md:w-[420px] md:h-[252px]'
          src="/images/juara.jpg"
          width='420'
          height='252'
          alt='Logo' />
      </div>
      <div className='gotham absolute w-[400px] left-[-433px] text-end top-[20px]'>
        <h3 className='gotham '>Deskripsi Lomba</h3>
        <p className=''>{props.textDesc}</p>
      </div>
      <div className='gotham absolute right-[-174px] top-[20px] '>
        <h3 className='gotham'>Pencapaian</h3>
        <p className='absolute w-[250%] '> {props.textAchievement} </p>
        <div className='absolute bottom-[-175px] '>
          <ArrowLink
            href=''
            direction='right'
          >Show More</ArrowLink>
        </div>
      </div>
    </div>
  )
}