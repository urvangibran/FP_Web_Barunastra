import React from 'react'

import NextImage from '@/components/NextImage'
import { Footer } from '@/components/Footer'

function Contact() {
  return (
    <div>
      <div className='relative'>
        <section id='Contact' className='h-screen relative flex flex-col items-center'>
          <NextImage
            className='cursor-pointer w-auto'
            src="/images/logo/footerPhotos.png"
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