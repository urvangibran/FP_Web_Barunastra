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
    <div id='Achievement' className={`absolute top-[200px] md:right-[750px] right-[450px] md:top-[${props.topValue}px] `}>
      {/* < div id = 'Achievement' className = {`absolute top-[300px] `}> */}
      {/* <div id='Achievement' className={`absolute top-[650px] `}> */}
      {/* <div id='Achievement' className={`absolute top-[1050px] `}> */}
      {/* <div id='Achievement' className={`absolute top-[1450px] `}> */}
      {/* <div id='Achievement' className={`absolute top-[1800px] `}> */}
      <CardsAchievement />
      <div className='absolute md:static md:top-[-100px'>
        <p className={`gotham text-white absolute text-6xl md:right-[${props.rightValue || 165}px] top-[-86px] `}> {props.tahun} </p>
        {/* <p className= {`gotham text-white absolute text-6xl right-[165px] top-[-86px] `}> {props.tahun} </p> */}
        {/* <p className= {`gotham text-white absolute text-6xl right-[172px] top-[-86px] `}> {props.tahun} </p> */}
        <NextImage
          className='cursor-pointer w-[250px] z-10 md:w-[420px] md:h-[252px]'
          src="/images/juara.jpg"
          width='420'
          height='252'
          alt='Logo' />
      </div>
      <div className='gotham absolute w-[400px] left-[-433px] text-end top-[20px] hidden md:visible'>
        <h3 className='gotham '>Deskripsi Lomba</h3>
        <p className='hidden md:visible'>{props.textDesc}</p>
      </div>
      <div className='gotham absolute right-[-374px] md:right-[-174px] md:top-[20px]'>
        <h3 className='gotham'>Pencapaian</h3>
        <p className='absolute md:w-[250%] '> {props.textAchievement} </p>
        <div className='absolute bottom-[-365px] md:bottom-[-175px] '>
          <ArrowLink
            href='https://instagram.com/barunastra_its'
            direction='right'
          >Show More</ArrowLink>
        </div>
      </div>
    </div>
  )
}