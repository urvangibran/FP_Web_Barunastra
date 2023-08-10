import NextImage from '@/components/NextImage';
import { RevealXR } from '@/components/Reveal/RevealXR';
import * as React from 'react';

export const Cards = () => {
  return (
    <div className="flex justify-center items-center mb-2">
      <div className="max-w-full">
        <RevealXR>
          <NextImage
            className='w-full h-auto border-[20px] rounded-lg border-[#242424] '
            src="/images/boat/kapalAbout.jpg"
            width='595'
            height='391'
            alt='Logo'
          />
        </RevealXR>
      </div>
    </div>
  );
};
