import * as React from 'react';

export const CardSpesification = () => {
  return (
    <div className='w-[280px] h-[200px] bg-[#eaeaea] gotham shadow-2xl rounded-xl absolute bottom-[-300px] flex flex-col items-center'>
      <div className='w-[80%]'>
        <h3 className='text-start py-3 text-[#2E3FA2] gotham'>Spesification</h3>
      </div>
      <hr
        className='w-[80%] items-center border-black'
      />
      <div className='w-[80%] flex justify-between mt-5 '>
        <h5 className='mr-[50px]'>Weight</h5>
        <h5>8.48kg</h5>
      </div>
      <div className='w-[80%] flex justify-between mt-5'>
        <h5 className='mr-[50px]'>Height</h5>
        <h5>53 cm</h5>
      </div>
    </div>
  );
};
