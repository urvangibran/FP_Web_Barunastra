import { Footer } from '@/components/Footer'
import NextImage from '@/components/NextImage'
import ButtonLink from '@/components/links/ButtonLink'
import React from 'react'

function LastPage() {
  return (
    <div>
      <div className='relative'>
        <section id='Contact' className='h-screen relative flex flex-col items-center'>
          <NextImage
            className='cursor-pointer w-auto'
            src="/images/footerPhotos.png"
            width='1925'
            height='850'
            alt='Logo' />
          <div className='bg-red-200'>
            <Footer />
          </div>
          <div>
            <ButtonLink
              className='bottom-[-1100px] left-[138px] absolute visible md:hidden
               '
              size='xl'
              variant='dark'
              href='https://instagram.com/barunastra_its'
            // href='/robot'
            > Know More About Barunastra!</ButtonLink>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LastPage