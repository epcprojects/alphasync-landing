"use client"
import Image from 'next/image'
import React from 'react'
import { images } from '../ui'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules";
import "swiper/css"

export const CardsSwipperComponent = () => {
  return (
    <div className="px-5">
      <Swiper
  modules={[Autoplay]}
  spaceBetween={16}
  loop={true}
  slidesPerView={"auto"}
  speed={2500}
   autoplay={{
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  className="ease-linear! bg-white!"
>

        <SwiperSlide className="w-82.5! ">
          <div className='py-7.5 h-76  px-10 bg-linear-to-r from-[#E6DEE9] to-[#BDC2E8] rounded-[20px] shadow-[0_24px_54px_0_rgba(0,0,0,0.1)] backdrop-blur-2xl'>
            <p className='text-[42px]  font-regular leading-[120%] text-black'>
              Longevity & performance medicine
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-82.5!">
          <div className='rounded-[20px] bg-white/70 shadow-[0_24px_54px_0_rgba(0,0,0,0.1)] backdrop-blur-2xl'>
            <Image src={images.landingpageimages.SwiperCardTwo} alt='couple image' className='w-full h-76 rounded-[20px]'/>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-82.5!">
          <div className='py-7.5  h-76  px-10 bg-linear-to-r from-[#F5F7FA] to-[#C3CFE2] rounded-[20px] shadow-[0_24px_54px_0_rgba(0,0,0,0.1)] backdrop-blur-2xl'>
            <p className='text-[42px] font-regular leading-[120%] text-black'>
              Hormone optimization practices
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-82.5!">
          <Image src={images.landingpageimages.SwiperCardFour} alt='girl image' className='w-full h-76 rounded-[20px]'/>
        </SwiperSlide>

        <SwiperSlide className="w-82.5!">
          <div className='py-7.5  h-76  px-10 bg-linear-to-r from-[#C1DFC4] to-[#DEECDD] rounded-[20px] shadow-[0_24px_54px_0_rgba(0,0,0,0.1)] backdrop-blur-2xl'>
            <p className='text-[42px] font-regular leading-[120%] text-black'>
              Telehealth platforms
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-82.5!">
          <Image src={images.landingpageimages.SwiperCardSix} alt='man image' className='w-full h-76 rounded-[20px]'/>
        </SwiperSlide>
    <SwiperSlide className="w-82.5!">
          <div className='py-7.5  h-76  px-10 bg-linear-to-r from-[#DFD1C5] to-[#FFF6EB] rounded-[20px] shadow-[0_24px_54px_0_rgba(0,0,0,0.1)] backdrop-blur-2xl'>
            <p className='text-[42px] font-regular leading-[120%] text-black'>
              Functional & integrative clinics
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-82.5!">
          <Image src={images.landingpageimages.SwiperCardEight} alt='Girl Image' className='w-full h-76 rounded-[20px]'/>
        </SwiperSlide>
         <SwiperSlide className="w-82.5!">
          <div className='py-7.5  h-76  px-10 bg-linear-to-r from-[#FFD1FF] to-[#FAD0C4] rounded-[20px] shadow-[0_24px_54px_0_rgba(0,0,0,0.1)] backdrop-blur-2xl'>
            <p className='text-[42px] font-regular leading-[120%] text-black'>
              Concierge & membership-based care
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}