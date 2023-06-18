import * as React from 'react';
import Hamburger from 'hamburger-react'
import NextImage from '@/components/NextImage';

export const Navbar = () => {

  const [isOpen, setOpen] = React.useState(false)

  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Team", link: "/" },
    { name: "Achievment", link: "/" },
    { name: "Contact", link: "/" }
  ]

  return (
    <div className="w-full h-20 flex justify-between items-center bg-[#242424]">
      <div className="flex items-center justify-center mx-9">
        <NextImage
          className='cursor-pointer z-10'
          src='/images/logo.png'
          width='182'
          height='38'
          alt='Logo'
        />
        {/* <img src="/images/logo.png" alt="logo" className='w-[182px] h-[38px]'/> */}
      </div>
      {/* <div> */}
      <ul className={`gap-6 z-[0] flex h-[300px] md:h-10 md:mx-9 bg-[#242424] w-full md:w-auto flex-col absolute top-20 md:flex-row md:static text-right pr-2 transition-all duration-300 ease-in ${isOpen ? 'top-20' : 'top-[-400px]'}`}>
        {
          Links.map((link) => (
            <div key={link.name} className='hover:bg-[#383838] rounded-lg py-2 hover:scale-95 '>
              <li>
                <a href={link.link} className=' font-bold text-[20px] text-white  gotham px-5 cursor-pointer'>{link.name}</a>
              </li>
            </div>
          ))
        }
      </ul>
      <div className='absolute right-4 top-4 text-white md:hidden'>
        <Hamburger  onToggle={toggle=>{
          if(toggle) {
            setOpen(true)
          } else {
            setOpen(false)
          }
        }}/>
      </div>
      {/* </div> */}
    </div>
  )
}