"use client";
import React from "react";

type InfoCardProps = {
  numberText: string | number;
  icon: React.ReactNode;
  text: string;
};

export const InfoCard = ({numberText,icon,text}:InfoCardProps)=>{
return (
      <div className="py-5  px-7.5  flex lg:flex-row flex-col items-center border-b border-b-white/18  gap-2  lg:gap-12.5">
        <p className="text-lg font-normal leading-[37.5px] text-neutral-100">
          {numberText}
        </p>
        <div className="border flex items-center justify-center p-3 gap-2.5 border-white/30 rounded-full">
          {icon}
        </div>
        <p className="text-3xl text-center lg:text-start font-normal leading-[37.5px] text-white/70">
          {text}
        </p>
    </div>
  );
}