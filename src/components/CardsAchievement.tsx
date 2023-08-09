import NextImage from '@/components/NextImage';
import { Reveal } from '@/components/Reveal';
import * as React from 'react';

type Cards = {
  url?: string,
}

export const CardsAchievement = (props: Cards) => {
  return (
    <div className="">
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
