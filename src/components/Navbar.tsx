import Hamburger from 'hamburger-react'
import * as React from 'react';
import { Link } from 'react-scroll'

import NextImage from '@/components/NextImage';

export const Navbar = () => {

  const [isOpen, setOpen] = React.useState(false)
  const [click, setClick] = React.useState(false)


  const Links = [
    { name: "Home", link: "Home", offset: -100 },
    { name: "About", link: "About", offset: -30 },
    { name: "Team", link: "Team", offset: -15 },
    { name: "Achievement", link: "Achievement", offset: 0 },
    { name: "Robots", link: "Robots", offset: 0 },
    { name: "Contact", link: "Contact", offset: 10 }
  ]

  return (
    <div className="w-full h-20 flex justify-between items-center bg-[#242424] fixed top-0 z-10 md:z-20">
      <div className="flex items-center justify-center mx-9">
        <NextImage
          className='cursor-pointer z-10'
          src='/images/logo.png'
          width='182'
          height='38'
          alt='Logo'
        />
      </div>
      <ul className={`gap-6 z-[0] flex h-[360px] bg-[#242424] text-right pr-2 transition-all duration-300 ease-in w-full flex-col absolute top-20 md:w-auto md:flex-row md:static md:h-10 md:mx-9 ${isOpen ? 'top-20' : 'top-[-400px]'}`}>
        {
          Links.map((link) => (
            <div key={link.name} className={`hover:bg-[#383838] rounded-lg py-2 hover:scale-95 ${click ? "active" : ""}`}>
              <li>
                <Link to={link.link} spy={true} smooth={true} offset={link.offset} duration={500} className=' font-bold text-[20px] text-white gotham px-5 cursor-pointer'>{link.name}</Link>
              </li>
            </div>
          ))
        }
      </ul>
      <div className='absolute right-4 top-4 text-white md:hidden'>
        <Hamburger onToggle={toggle => {
          if (toggle) {
            setOpen(true)
          } else {
            setOpen(false)
          }
        }} />
      </div>
    </div>
  )
}