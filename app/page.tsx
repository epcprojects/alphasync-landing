"use client"
import Image from "next/image";
import { Header, ThemeButton } from "./components";
import { FlowerIcon, RightArrowIcon } from "@/public/icons";
import { images } from "./ui";
export default function Home() {
  return (
    <main>
      <section className="  flex flex-col gap-2.5 bg-cover bg-[url('/images/HeroBgImage.png')]">
        <Header />
        <div className=" py-8 lg:py-24 px-14">
          <div className="container flex flex-col gap-5 lg:gap-14.5 max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 ">
              <div className="flex flex-col gap-2">
                <p className="font-normal text-xl text-center lg:text-start lg:text-2xl">Next-Gen Dispensing Infrastructure</p>
                <p className="text-white font-semibold leading-[110%] tracking-[-0.02em] text-center lg:text-start text-5xl lg:text-100px">
                  Modern <span className="font-playfair italic font-normal">Dispensing,</span> Simplified.
                </p>
              </div>
              <div className="flex flex-col justify-end items-end">
                <div className="pt-8.5">
                  <p className="text-2xl lg:text-3xl text-center lg:text-start font-semibold leading-[150%]">From clinical decision to patient delivery — seamlessly connected.<br/>
                    <span className="font-normal text-center lg:text-start text-lg lg:text-xl leading-[150%]">
                      AlphaSync enables physicians to coordinate dispensing through licensed pharmacy partners while maintaining full clinical independence.</span></p>
                </div>

              </div>
            </div>
            <div className="flex lg:justify-start justify-center">
                 <ThemeButton label={"Learn More"} variant={"dark"} showIcon={"true"} icon={<RightArrowIcon fill="#021D43"/>}/>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-24 ">
        <div className="container max-w-7xl mx-auto px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                          <div className="flex flex-col gap-4">
                                <div className="flex flex-row gap-4">
                                  <FlowerIcon/>
                                  <p className="font-normal text-black text-2xl">What is <span className="font-bold">AlphaSync?</span></p>
                                </div>
                                <p className="text-black font-extrabold text-4xl lg:text-54px leading-[120%] tracking-[-0.02em]">A dispensing infrastructure built for <span className="italic font-playfair font-semibold">Modern Medicine</span>.</p>
                                <p className="text-xl font-normal text-gray-800 leading-[150%]">AlphaSync allows physicians to coordinate product dispensing directly to patients without managing inventory or fulfillment logistics. Through secure integrations with licensed pharmacies, clinicians can streamline how treatments move from recommendation to delivery.</p>
                                <p className="text-xl font-normal text-gray-800 leading-[150%]">The result is a more efficient care experience for both physicians and patients — powered by infrastructure designed for modern practice models.</p>
                             <div className="flex flex-wrap gap-4">
                              <div className="rounded-full flex flex-row items-center justify-center gap-3 bg-amber-100 py-3 px-5">
                                       <div className="bg-amber-500 w-3 h-3 rounded-full">
                                       </div>
                                       <span className="text-black text-lg font-normal">No inventory.</span>

                              </div>
                               <div className="rounded-full flex flex-row items-center justify-center gap-3 bg-blue-100 py-3 px-5">
                                       <div className="bg-blue-500 w-3 h-3 rounded-full">
                                       </div>
                                       <span className="text-black text-lg font-normal">No fulfillment burden.</span>

                              </div>
                              <div className="rounded-full flex flex-row items-center justify-center gap-3 bg-voilet-100 py-3 px-5">
                                       <div className="bg-voilet-500 w-3 h-3 rounded-full">
                                       </div>
                                       <span className="text-black text-lg font-normal">No fragmented vendors</span>

                              </div>
                              
                             </div>
                          </div>
                          <div className="flex flex-col justify-center items-center lg:items-end">
                            <Image src={images.landingpageimages.SectionOneImage} alt={"section one image"} className="w-118 h-118"/>
                          </div>

                        </div>
        </div>
      </section>
    </main>
  );
}
