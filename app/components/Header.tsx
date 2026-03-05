import React from 'react'
import Image from 'next/image'
import { images } from '../ui'
import { ThemeButton } from './ThemeButton'
export const Header = () => {
  return (
    <div className='py-5 flex items-center'>
                <div className=' w-full flex flex-col md:flex-row items-center justify-between px-8'>
                      <div className='flex items-center justify-center py-4 px-5 h-15 '>
                          <Image src={images.landingpageimages.Logo} alt={'logo'}/>
                      </div>
                      <div className='flex flex-col md:flex-row justify-end gap-3'>
                       <ThemeButton label={'Login'} variant={'outline'} showIcon={'false'}/>
                       <ThemeButton label={'Request Access'} variant={'primary'} showIcon={'true'}/>
                      </div>
                      
                </div>
    </div>
  )
}
