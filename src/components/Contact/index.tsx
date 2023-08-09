import React from 'react'

import { Footer } from '@/components/Footer'
import NextImage from '@/components/NextImage'

function Contact() {
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
        </section>
      </div>
    </div>
  )
}

export default Contact