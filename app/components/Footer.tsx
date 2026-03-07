import Image from 'next/image'
import React from 'react'
import { images } from '../ui'
import { ThemeButton } from './ThemeButton'
import { Emailcon, PhoneIcon, RightArrowIcon } from '@/public/icons'

export const Footer = () => {
  return (
    <div className='py-8 px-4'>
        <div className=' relative container max-w-7xl mx-auto rounded-3xl lg:pt-16 lg:px-16 px-8  bg-linear-to-t from-[#ACCBEE] to-[#E7F0FD]'>
              <Image
    src={images.landingpageimages.FooterPicture}
    alt="footer picture"
    className="w-full   lg:absolute lg:right-0 lg:top-0 h-full lg:w-auto object-contain"
  />
                         <div className='flex  flex-row justify-start pt-10 lg:pt-0 pb-12'>
                                <div className='flex flex-col lg:items-start items-center gap-7.5 lg:w-123'>
                                      <div className='flex flex-col gap-5'>
                                        <Image src={images.landingpageimages.FooterLogo} alt={'alphasync logo'} />
                                        <p className='text-2xl text-center lg:text-start font-medium leading-[160%] font-jakarta-sans'>Deliver care directly. Operate efficiently. Scale confidently.</p>
                                      </div>
                                      <div>
                                      <ThemeButton label={'Get Started Now'} variant={'lightblue'} showIcon={'true'} />
                                      </div>
                                      <div className='flex flex-col lg:flex-row gap-6'>
                                            <div className='flex flex-row items-center gap-4'>
                                                <div className='w-8 h-8 rounded-full flex items-center justify-center border border-neutral-800 backdrop-blur-sm'>
                                                     <Emailcon/>
                                                </div>
                                                <p className='text-lg font-medium font-jakarta-sans text-neutral-800'>info@alphasync.com</p>
                                            </div>
                                            <div className='flex flex-row items-center gap-4'>
                                                <div className='w-8 h-8 rounded-full flex items-center justify-center border border-neutral-800 backdrop-blur-sm'>
                                                     <PhoneIcon/>
                                                </div>
                                                <p className='text-lg font-medium font-jakarta-sans text-neutral-800'>info@alphasync.com</p>
                                            </div>
                                      </div>
                                </div>
                         </div>
                         <div className='pb-6'>
                            <p className='text-neutral-700 text-base text-center lg:text-start font-normal font-jakarta-sans'>© {new Date().getFullYear()} AlphaSync. All rights reserved.</p>
                         </div>
        </div>

    </div>
  )
}
