import { RightArrowIcon } from '@/public/icons'
import React from 'react'

type buttonProps = {
    label: string;
    variant: 'primary' | 'dark' | 'outline' | 'black' | 'bluish'| 'lightblue'; 
    icon?: React.ReactNode; 
    showIcon: string;
    onBtnClick?: ()=>void;
}

const variants = {
  primary: {
    btn: 'bg-white',
    text: 'text-neutral-900',
    arrowBg: 'bg-black',
  },
  dark: {
    btn: 'bg-black/40',
    text: 'text-white',
    arrowBg: 'bg-white',
  },
  black : {
    btn: 'bg-gray-950',
    text: 'text-white',
     arrowBg: 'bg-white',

  },
  outline: {
    btn: 'bg-transparent border border-white',
    text: 'text-white',
    arrowBg: 'bg-white',
  },
  bluish:{
 btn: 'bg-white',
    text: 'text-neutral-900',
    arrowBg: 'bg-medium-blue',
  },
 lightblue:{
    btn: 'bg-white',
    text: 'text-neutral-900',
    arrowBg: 'bg-light-blue',
  },
};

export const ThemeButton = ({ label, variant, icon,showIcon,onBtnClick }: buttonProps) => {
  const activeVariant = variants[variant];

  return (
    <button onClick={onBtnClick} className={`${activeVariant.btn} ${variant!="outline" ? "py-3 pr-3 pl-6" : " py-3.5 px-8"} backdrop-blur-[66px] flex flex-row items-center justify-center gap-2.5 rounded-full`}>
      <span className={`${activeVariant.text}  font-semibold text-sm lg:text-lg`}>{label}</span>
    {
        showIcon ==="true" && (
              <div className={`${activeVariant.arrowBg} rounded-full w-7.5 h-7.5 flex items-center justify-center`}>
        {icon ? icon : <RightArrowIcon />}
      </div>
        )
    }
      
    </button>
  )
}
