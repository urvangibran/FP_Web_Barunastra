import * as React from 'react';
// import "./fonts/GothamBold.ttf"

type Text = {
  text: string
}


export const TextNavbar = (props: Text) => {
  return (
    <div className='hover:bg-[#383838] rounded-lg'>
      <p className='font-bold text-[20px] text-white gotham p-2 px-5 cursor-pointer hover:sca'  >{props.text}</p>
    </div>
  )
}