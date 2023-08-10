import NextImage from '@/components/NextImage';
import { Reveal } from '@/components/Reveal/Reveal';
import * as React from 'react';

type Cards = {
  url?: string,
  tahun?: number,
}

export const CardsAchievement = (props: Cards) => {
  return (
    <div className="">
      <div className='absolute -top-[75px] left-1/2 transform -translate-x-1/2'>
        <Reveal>
          <p className='gotham text-white text-6xl'> {props.tahun} </p>
        </Reveal>
      </div>
      <Reveal>
        <div className=" flex justify-center items-center md:relative md:w-[453px] md:h-[318px] md:bg-[#020223] md:overflow-hidden md:rounded-3xl">
          <NextImage
            className='cursor-pointer w-auto z-10 md:w-[420px] md:h-[294px]'
            src={`/images/achievement/${props.url}`}
            width='420'
            height='294'
            alt='LogoJuara' />
        </div>
      </Reveal>
    </div>
  );
};
