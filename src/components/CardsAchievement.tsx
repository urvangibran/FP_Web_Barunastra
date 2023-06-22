import { Reveal } from '@/components/Reveal';
import * as React from 'react';

type Cards = {
  num?: number,
}

export const CardsAchievement = (props: Cards) => {
  return (
    <div className=" hidden md:flex md:items-center md:h-screen md:absolute md:right-[-19px] md:top-[-321px] md:z-[-1]">
      <Reveal>
        <div className={`box-${props.num || 0} md:relative md:w-[453px] md:h-[318px] md:bg-[#020223] md:overflow-hidden md:rounded-3xl`}></div>
      </Reveal>
    </div>
  );
};
