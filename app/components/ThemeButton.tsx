import { RightArrowIcon } from '@/public/icons'
import React from 'react'

type buttonProps = {
    label: string;
    variant: 'primary' | 'dark' | 'outline'; 
    icon?: React.ReactNode; 
    showIcon: string;
}

const variants = {
  primary: {
    btn: 'bg-white',
    text: 'text-neutral-900',
    arrowBg: 'bg-black',
    arrowColor: 'white'
  },
  dark: {
    btn: 'bg-black/40',
    text: 'text-white',
    arrowBg: 'bg-white',
    arrowColor: 'black'
  },
  outline: {
    btn: 'bg-transparent border border-white',
    text: 'text-white',
    arrowBg: 'bg-white',
    arrowColor: 'black'
  }
};

export const ThemeButton = ({ label, variant, icon,showIcon }: buttonProps) => {
  const activeVariant = variants[variant];

  return (
    <button className={`${activeVariant.btn} ${variant!="outline" ? "py-3 pr-3 pl-6" : " py-3.5 px-8"} backdrop-blur-[66px] flex flex-row items-center justify-center gap-2.5 rounded-full`}>
      <span className={`${activeVariant.text} shadow-[0_0.4px_0.6px_0_rgba(0,0,0,0.14)] font-semibold text-lg`}>{label}</span>
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
