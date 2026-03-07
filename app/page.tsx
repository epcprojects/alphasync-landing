"use client"
import Image from "next/image";
import { CardsSwipperComponent, Footer, Header, InfoCard, NEWFAQ, ThemeButton } from "./components";
import { AdaptabilityIcon, AmberFlowerIcon, ArchitectureIcon, BloodIcon, CoordinateCardIcon, CrossCircle, CrossIcon, DeliverCardIcon, DiagnosticIcon, DispensaryIcon, ExpirationIcon, FertilityIcon, FilterIcon, FlowerIcon, FocusFlowerIcon, GearIcon, GridBoxesIcon, HormonesIcon, HospitalDeviceIcon, InfrastructureIcon, NoProductIcon, NoVendorIcon, PeptideIcon, PharmacyIcon, PrescriptionIcon, PrioritizeIcon, RecommendedCardIcon, RightArrowIcon, SecureIcon, ShippingIcon, StarIcon, StepperIcon, TherapiesIcon, TickCircleIcon, TickIcon, WorkflowIcon, YellowFlowerIcon } from "@/public/icons";
import { images } from "./ui";
export default function Home() {
  const cardData = [
    { numberText: "01", icon: <PeptideIcon />, text: "Peptides and regenerative compounds" },
    { numberText: "02", icon: <HormonesIcon />, text: "Hormone therapies" },
    { numberText: "03", icon: <FertilityIcon />, text: "Fertility medications" },
    { numberText: "04", icon: <PharmacyIcon />, text: "Pharmacy-grade vitamins and nutraceuticals" },
    { numberText: "05", icon: <BloodIcon />, text: "At-home blood collection kits" },
    { numberText: "06", icon: <DiagnosticIcon />, text: "Remote diagnostics and testing" },
    { numberText: "07", icon: <TherapiesIcon />, text: "Emerging longevity-focused therapies" },

  ];
  return (
    <main>
      <section className="  flex flex-col gap-2.5 bg-cover bg-[url('/images/HeroBgImage.png')]">
        <Header />
        <div className=" py-8 lg:py-24 px-14">
          <div className="container flex flex-col gap-5 lg:gap-14.5 max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 ">
              <div className="flex flex-col gap-2">
                <p className="font-normal text-white text-xl text-center lg:text-start lg:text-2xl">Next-Gen Dispensing Infrastructure</p>
                <p className="text-white font-semibold leading-[110%] tracking-[-0.02em] text-center lg:text-start text-5xl lg:text-100px">
                  Modern <span className="font-playfair italic font-normal">Dispensing,</span> Simplified.
                </p>
              </div>
              <div className="flex flex-col justify-end items-end">
                <div className="pt-8.5">
                  <p className="text-2xl text-white lg:text-3xl text-center lg:text-start font-semibold leading-[150%]">From clinical decision to patient delivery — seamlessly connected.<br />
                    <span className="font-normal text-white text-center lg:text-start text-lg lg:text-xl leading-[150%]">
                      AlphaSync enables physicians to coordinate dispensing through licensed pharmacy partners while maintaining full clinical independence.</span></p>
                </div>

              </div>
            </div>
            <div className="flex lg:justify-start justify-center">
              <ThemeButton label={"Learn More"} variant={"dark"} showIcon={"true"} icon={<RightArrowIcon fill="#021D43" />} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-24 ">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4">
                <FlowerIcon />
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
              <Image src={images.landingpageimages.SectionOneImage} alt={"section one image"} className="w-118 h-118" />
            </div>

          </div>
        </div>
      </section>
      <section className="bg-white flex flex-col gap-8 pb-24">
        <div className="flex flex-col lg:flex-row container max-w-7xl mx-auto items-center lg:items-end justify-between px-8">
          <div>
            <p className="font-extrabold lg:text-start text-center text-[64px] leading-[120%] tracking-[-0.02em]">How It <span className="italic font-playfair font-medium">Works</span></p>
            <p className="font-regular lg:text-start text-center text-2xl">Simple workflows. Seamless delivery.</p>
          </div>
          <div><ThemeButton label={"Request Access"} variant={"black"} showIcon={"true"} icon={<RightArrowIcon fill="black" />} /></div>
        </div>
        <div className=" container max-w-7xl mx-auto space-y-2 lg:space-y-0 px-8">
          <Image src={images.landingpageimages.LaptopImage} alt={"laptop image"} className="z-50" />
          <div className="flex flex-col lg:flex-row gap-8 lg:px-12.5 lg:-mt-20">
            <div className="bg-white/70 relative overflow-hidden shadow-[0_24px_54px_0_rgba(0,0,0,0.1)] backdrop-blur-2xl rounded-[20px] py-7.5 px-10 flex flex-col gap-5">
              <div className="bg-purple-700  rounded-full opacity-15 blur-[153px] -top-20 -rotate-19 absolute h-65 w-174"></div>
              <RecommendedCardIcon />
              <div className="flex flex-col gap-2  z-50">
                <p className="text-3xl text-black font-extrabold leading-[140%]">1. Recommend</p>
                <p className="text-gray-800 text-lg font-normal leading-[160%]">Select from a growing catalog of physician-grade therapies, diagnostics, and wellness products aligned with your care model.</p>
              </div>
            </div>
            <div className="bg-white/70 relative overflow-hidden shadow-[0_24px_54px_0_rgba(0,0,0,0.1)] backdrop-blur-2xl rounded-[20px] py-7.5 px-10 flex flex-col gap-5">
              <div className="bg-green-600 rounded-full opacity-15 blur-[153px] -top-20   -rotate-19 absolute h-65 w-174"></div>
              <CoordinateCardIcon />
              <div className="flex flex-col gap-2">
                <p className="text-3xl text-black font-extrabold leading-[140%]">1. Recommend</p>
                <p className="text-gray-800 text-lg font-normal leading-[160%]">Select from a growing catalog of physician-grade therapies, diagnostics, and wellness products aligned with your care model.</p>
              </div>
            </div>
            <div className="bg-white/70 relative overflow-hidden shadow-[0_24px_54px_0_rgba(0,0,0,0.1)] backdrop-blur-2xl rounded-[20px] py-7.5 px-10 flex flex-col gap-5">
              <div className="bg-pink-500 rounded-full opacity-15 blur-[153px] -top-20 -rotate-19 absolute h-65 w-174"></div>
              <DeliverCardIcon />
              <div className="flex flex-col gap-2">
                <p className="text-3xl text-black font-extrabold leading-[140%]">1. Recommend</p>
                <p className="text-gray-800 text-lg font-normal leading-[160%]">Select from a growing catalog of physician-grade therapies, diagnostics, and wellness products aligned with your care model.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white flex flex-col gap-8  pt-16 pb-24">
        <div className="flex flex-col container lg:px-0 px-4 max-w-7xl mx-auto items-center gap-4">
          <p className="font-extrabold text-black text-center lg:text-start text-[64px] leading-[120%] tracking-[-0.02em] ">Built for Modern <span className="font-playfair italic font-medium">Care Delivery</span></p>
          <p className="text-gray-800 font-normal text-center lg:text-start text-2xl leading-[160%]">AlphaSync supports a wide range of evolving practice models, including:</p>
        </div>
        <div>
          <CardsSwipperComponent />
        </div>
        <div className="container  lg:px-0 px-4 max-w-7xl mx-auto">
          <p className="text-gray-800 font-normal text-lg leading[160%] text-center">If your practice is evolving, your dispensing infrastructure should evolve with it.</p>
        </div>
      </section>
      <section className="relative w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/AlphasyncBgVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 container max-w-7xl mx-auto px-24 py-24 flex flex-col gap-12 lg:gap-19.5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <AmberFlowerIcon />
              <p className="text-neutral-100 text-center lg:text-start font-normal text-2xl leading-[150%]">Expanding access to physician-grade products.</p>
            </div>
            <p className=" text-3xl lg:text-[64px] text-center lg:text-start text-white font-extrabold leading-[110%] tracking-[-0.02em] ">A Growing Clinical <span className="text-medium-yellow font-medium italic font-playfair">Marketplace</span></p>
          </div>
          <div className="container max-w-7xl mx-auto flex flex-col gap-8">
            <p className="text-neutral-100 text-center lg:text-start font-normal text-[22px] leading-[150%]">AlphaSync’s catalog continues to grow, giving clinicians access to a curated and expanding range of offerings, including:</p>
            <div>
              {cardData.map((card, index) => (
                <InfoCard
                  key={index}
                  numberText={card.numberText}
                  icon={card.icon}
                  text={card.text}
                />
              ))}
            </div>
            <div className="container max-w-7xl mx-auto flex lg:flex-row flex-col justify-center">
              <div className="rounded-full bg-linear-to-r from-black/30 to-black/0  py-5 px-7.5  flex lg:flex-row flex-col items-center justify-center gap-4  backdrop-blur-[20px]">
                <GridBoxesIcon />
                <p className="text-xl font-normal text-center lg:text-start text-neutral-100">New integrations and product categories are added regularly.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container max-w-7xl mx-auto rounded-4xl bg-linear-to-t from-[#FFF1EB] to-[#ACE0F9]">
          <Image src={images.landingpageimages.PharmacistImage} alt={"parhamcist image"} />
          <div className="p-10  flex  flex-col gap-9">
            <div className="flex flex-col items-start  gap-2">
              <div className="flex items-center lg:items-start flex-col lg:flex-row shadow-[0_34px_34px_0_rgba(0,0,0,0.05)] backdrop-blur-2xl gap-4 py-3 px-6 rounded-4xl bg-white/40">
                <FocusFlowerIcon />
                <p className="text-neutral-900 text-center lg:text-start font-normal text-xl ">Focus on care — not logistics.</p>
              </div>
              <p className="text-black lg:text-[64px] text-4xl text-center lg:text-start font-extrabold leading-[120%] tracking-[-0.02em]  ">Reduce Operational <span className="text-medium-blue italic font-playfair font-medium">Complexity</span></p>
              <p className="text-2xl text-center lg:text-start font-normal text-gray-800">AlphaSync removes the need to manage operational complexities by shifting  fulfillment to licensed pharmacy partners.</p>
            </div>
            <p className="text-xl text-center lg:text-start  font-normal text-gray-800">AlphaSync removes the need to manage:</p>
            <div className="grid grid-cols-1 lg:grid-cols-4  gap-9">
              <div className="bg-white/40 p-10 flex flex-col items-center gap-7 rounded-4xl">
                <NoProductIcon />
                <p className="text-center font-jakarta-sans text-2xl font-normal text-black leading-[140%]">No Product inventory</p>
              </div>
              <div className="bg-white/40 p-10 flex flex-col items-center gap-7 rounded-4xl">
                <ExpirationIcon />
                <p className="text-center text-2xl font-jakarta-sans font-normal text-black leading-[140%]">No Expiration risk</p>
              </div>
              <div className="bg-white/40 p-10 flex flex-col items-center gap-7 rounded-4xl">
                <ShippingIcon />
                <p className="text-center text-2xl font-jakarta-sans font-normal text-black leading-[140%]">No Shipping coordination</p>
              </div>
              <div className="bg-white/40 p-10 flex flex-col items-center gap-7 rounded-4xl">
                <NoVendorIcon />
                <p className="text-center text-2xl font-jakarta-sans font-normal text-black leading-[140%]">No Vendor fragmentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="flex flex-col gap-8 container max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <p className="text-black lg:text-[64px] text-4xl text-center lg:text-start font-extrabold leading-[120%] tracking-[-0.02em] ">Built for <span className="italic text-medium-blue font-medium font-playfair">Programmatic</span> Medicine</p>
            <p className="text-2xl text-center lg:text-start font-normal leading-[160%] text-gray-800">Infrastructure for scalable care models.</p>
          </div>
          <div className=" flex flex-col  py-4 items-center px-5">
            <div className="bg-rock-blue rotate-[1.72deg] md:w-225 rounded-4xl py-5 px-6 flex items-center flex-col md:flex-row gap-5 backdrop-blur-2xl">
              <div className="w-17.5 h-17.5 flex items-center justify-center bg-white rounded-full">
                <SecureIcon />
              </div>
              <p className="text-white text-center md:text-start text-2xl md:text-3xl font-normal leading-[120%]">Secure pharmacy integrations</p>
            </div>
            <div className="bg-steal-blue -rotate-[0.96deg] md:w-225 rounded-4xl py-5 px-6 flex items-center flex-col md:flex-row gap-5 backdrop-blur-2xl">
              <div className="w-17.5 h-17.5 flex items-center justify-center bg-white rounded-full">
                <WorkflowIcon />
              </div>
              <p className="text-white text-center md:text-start text-2xl md:text-3xl font-normal leading-[120%]">Embedded dispensing workflows</p>
            </div>
            <div className="bg-cool-blue rotate-2 md:w-225 rounded-4xl py-5 px-6 flex items-center flex-col md:flex-row gap-5 backdrop-blur-2xl">
              <div className="w-17.5 h-17.5 flex items-center justify-center bg-white rounded-full">
                <InfrastructureIcon />
              </div>
              <p className="text-white text-center md:text-start text-2xl md:text-3xl font-normal leading-[120%]">Programmatic coordination infrastructure</p>
            </div>
            <div className="bg-dusk-blue -rotate-[2.27deg] md:w-225 rounded-4xl py-5 px-6 flex items-center flex-col md:flex-row gap-5 backdrop-blur-2xl">
              <div className="w-17.5 h-17.5 flex items-center justify-center bg-white rounded-full">
                <ArchitectureIcon />
              </div>
              <p className="text-white text-center md:text-start text-2xl md:text-3xl font-normal leading-[120%]">API-ready architecture for digital health platforms</p>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-gray-800 text-xl text-center lg:text-start font-normal leading-[160%]">Whether you are an independent physician or building a care platform, AlphaSync scales with your model.</p>
          </div>
        </div>
      </section>
      <section className="pb-24 container max-w-7xl mx-auto ">
        <div className="px-8">
          <div className="rounded-4xl relative bg-linear-to-r from-[#A7A6CB] to-[#8989BA] p-15 flex flex-col gap-12 ">
            <div className="absolute inset-0 bg-[url('/images/GridAlphaImages.png')] bg-cover bg-center"></div>
            <div className="grid grid-cols-1 lg:grid-cols-10 items-center z-20">
              <Image src={images.landingpageimages.Laptop} alt={"Laptop"} className="lg:col-span-4" />
              <div className="lg:col-span-6 flex items-center">
                <p className=" text-4xl text-center lg:text-start lg:text-[72px] font-extrabold text-white leading-[120%] tracking-[-0.02em]  ">Supporting <span className="font-medium italic font-playfair">Sustainable</span> Practice Models</p>
              </div>

            </div>
            <div className="flex flex-col items-start gap-5">
              <div className="flex flex-col gap-5">
                <p className="text-white text-center lg:text-start  text-2xl font-normal leading-[150%]">AlphaSync helps modern practices operate more efficiently by reducing operational burden and enabling streamlined care coordination across the patient journey.</p>
                <p className="text-white text-center lg:text-start text-2xl font-normal leading-[150%]">Physicians maintain discretion over how dispensing fits within their clinical and business models, including how professional services are structured within applicable regulatory frameworks.</p>
              </div>
              <ThemeButton label={"Request Access"} variant={"primary"} showIcon={"true"} />
            </div>
          </div>
        </div>
      </section>
     <section className="bg-cover min-h-screen flex items-end bg-[url('/images/PhysicianImage.png')] p-8 lg:p-24  ">
             <div className="  container max-w-7xl mx-auto  lg:px-8 flex flex-col lg:flex-row  gap-16">
                       <div className="flex flex-col lg:items-start gap-12">
                               <div className="flex flex-col gap-9.5">
                                <div className="flex flex-col items-start gap-2">
                                      <div className="flex flex-col lg:flex-row items-center gap-3.25 backdop-blur-[20px] py-4 px-7.25 bg-black/34 rounded-full ">
                                          <StarIcon/>
                                          <p className="lg:text-lg text-base text-center lg:text-start font-normal text-neutral-100">Clinical independence comes first.</p>
                                      </div>
                                      <p className="lg:text-[64px] text-4xl text-center lg:text-start font-extrabold leading-[110%] tracking-[-0.02em] text-neutral-100 ">Physician-<span className="font-medium font-playfair italic">Centered</span> by Design</p>
                                </div>
                                 <p className="text-neutral-100 text-center lg:text-start text-2xl font-normal ">AlphaSync is built to support — not influence — clinical decision-making.</p>
                               </div>
                               <ThemeButton label={"Request Access"} variant={"bluish"} showIcon={"true"}/>
                       </div>
                       <div className="flex flex-col justify-end">
                            <div className="flex flex-row  gap-6 py-4.5 px-5 border-b border-b-white/18">
                                      <div className="w-15 h-15 shrink-0 flex justify-center items-center rounded-full bg-black/34 backdrop-blur-[20px]">
                                            <FilterIcon/>
                                      </div>
                                      <p className="text-xl font-normal text-neutral-100 leading-[150%]">Physicians retain full control over medical necessity and treatment plans</p>
                            </div>
                              <div className="flex flex-row  gap-6 py-4.5 px-5 border-b border-b-white/18">
                                      <div className="w-15 h-15 flex shrink-0 justify-center items-center rounded-full bg-black/34 backdrop-blur-[20px]">
                                            <PrescriptionIcon/>
                                      </div>
                                      <p className="text-xl font-normal text-neutral-100 leading-[150%]">No prescribing requirements or exclusivity</p>
                            </div>
                              <div className="flex flex-row  gap-6 py-4.5 px-5 border-b border-b-white/18">
                                      <div className="w-15 h-15 flex shrink-0 justify-center items-center rounded-full bg-black/34 backdrop-blur-[20px]">
                                            <HospitalDeviceIcon/>
                                      </div>
                                      <p className="text-xl font-normal text-neutral-100 leading-[150%]">Flexible workflows aligned with diverse practice models</p>
                            </div>
                              <div className="flex flex-row  gap-6 py-4.5 px-5 border-b border-b-white/18">
                                      <div className="w-15 h-15 flex shrink-0 justify-center items-center rounded-full bg-black/34 backdrop-blur-[20px]">
                                            <DispensaryIcon/>
                                      </div>
                                      <p className="text-xl font-normal text-neutral-100 leading-[150%]">Designed to support compliant dispensing structures</p>
                            </div>
    
                       </div>
             </div>
     </section>
     <section className="bg-linear-to-r from-[#E9DEFA] to-[#FFF6EB] py-24 px-4">
           <div className="container max-w-7xl mx-auto flex flex-col gap-12">
                       <div className="flex flex-col items-center gap-1.5">
                         <p className="text-black text-center lg:text-start text-2xl font-normal leading-[160%]">Built with healthcare realities in mind.</p>
                         <p className="lg:text-[64px] text-4xl  font-extrabold leading-[120%] tracking-[-0.02em] text-center lg:text-start text-black">Compliance-Minded <span className="text-voilet-500 italic font-bold font-playfair">Infrastructure</span></p>
                       </div>
                       <div className="flex flex-col items-center gap-10">
                              <div className="flex flex-col items-center gap-5">
                              <p className="text-gray-800 text-2xl font-normal text-center leading-[160%]">AlphaSync is designed with regulatory awareness across key areas of healthcare delivery, including:</p>
                               <div className="grid grid-cols-1 lg:grid-cols-4 gap-9">
                                     <div className="rounded-4xl flex flex-col items-center gap-7 py-10 px-7.5 bg-linear-to-b from-white from-100% to-white to-0% border border-white shadow-[0px_34px_34px_0px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
                                            <GearIcon/>
                                            <p className="text-center text-xl font-jakarta-sans font-normal text-black leading-[140%]">Physician autonomy and clinical independence</p>
                                     </div>
                                     <div className="rounded-4xl flex flex-col items-center gap-7 py-10 px-7.5 bg-linear-to-b from-white from-100% to-white to-0% border border-white shadow-[0px_34px_34px_0px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
                                            <YellowFlowerIcon/>
                                            <p className="text-center text-xl font-jakarta-sans font-normal text-black leading-[140%]">Pharmacy fulfillment separation</p>
                                     </div>
                                     <div className="rounded-4xl flex flex-col items-center gap-7 py-10 px-7.5 bg-linear-to-b from-white from-100% to-white to-0% border border-white shadow-[0px_34px_34px_0px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
                                            <StepperIcon/>
                                            <p className="text-center text-xl font-jakarta-sans font-normal text-black leading-[140%]">Transparent workflow design</p>
                                     </div>
                                     <div className="rounded-4xl flex flex-col items-center gap-7 py-10 px-7.5 bg-linear-to-b from-white from-100% to-white to-0% border border-white shadow-[0px_34px_34px_0px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
                                            <AdaptabilityIcon/>
                                            <p className="text-center text-xl font-jakarta-sans font-normal text-black leading-[140%]">Adaptability across state-specific practice environments</p>
                                     </div>
                               </div>
                               <div className="flex flex-col items-center lg:flex-row justify-center gap-5">
                                         <PrioritizeIcon/>
                                         <p className="text-xl text-center lg:text-start font-normal text-gray-800 leading-[160%]">We prioritize infrastructure that supports compliant, scalable growth.</p>
                               </div>
                              </div>
                       </div>
           </div>
     </section>
     <section className=" bg-cover min-h-screen flex items-end bg-[url('/images/ExcercisingGirl.png')] px-4">
                             <div className="pt-24 container max-w-7xl mx-auto pb-14">
                                 <div className=" grid grid-cols-1 lg:grid-cols-2">
                                  <div className="flex flex-col lg:items-start gap-6">
                                            <p className="text-4xl lg:text-[72px] text-black text-center lg:text-start font-extrabold leading-[110%] tracking-[-0.02em]">Designed for the <span className="text-white italic font-playfair font-bold">Future</span> of Care</p>
                                            <p className="text-2xl text-center lg:text-start font-normal text-black  leading-[150%]">Healthcare is moving toward more direct, digitally enabled care models. AlphaSync provides the infrastructure to support that evolution — helping physicians modernize dispensing workflows without sacrificing control or simplicity.</p>
                                            <p className="text-2xl text-center lg:text-start font-normal text-black  leading-[150%]">This is dispensing infrastructure built for where medicine is going.</p>
                                            <ThemeButton label={"Request Access"} variant={"primary"} showIcon={"true"}/>
                                  </div>
                                  </div>
                             </div>
     </section>
     <section className="py-24 px-4">
          <div className="container max-w-7xl mx-auto flex flex-col items-center gap-8">
            <p className="text-4xl lg:text-[64px] text-center lg:text-start font-extrabold leading-[120%] tracking-[-0.02em] ">The <span className="text-green-600 italic font-playfair font-bold">AlphaSync</span> Difference</p>
              <div className="grid w-full grid-cols-1 lg:grid-cols-2 font-jakarta-sans gap-9">
                         <div className="flex flex-col items-start gap-14.5 py-10 px-7.5 bg-linear-to-b from-[#FEE2E2] to-[#FFFFFF] rounded-4xl">
                                               <div className="flex flex-row gap-4.5 items-center bg-red-200 py-4 px-7.5 rounded-full">
                                                 <CrossIcon/>
                                                 <p className="text-[26px] font-normal text-black font-jakarta-sans leading-[140%]"><b>Before</b> AlphaSync</p>
                                               </div>
                                               <div className="flex flex-col gap-4">
                                                    <div className="flex flex-row gap-3.5">
                                                       <CrossCircle/>
                                                       <p className="text-xl font-normal leading-[140%] text-black ">Manual fulfillment workflows</p>
                                                    </div>
                                                    <div className="flex flex-row gap-3.5">
                                                       <CrossCircle/>
                                                       <p className="text-xl font-normal leading-[140%] text-black ">Inventory overhead</p>
                                                    </div>
                                                    <div className="flex flex-row gap-3.5">
                                                       <CrossCircle/>
                                                       <p className="text-xl font-normal leading-[140%] text-black ">Fragmented vendor coordination</p>
                                                    </div>
                                                    <div className="flex flex-row gap-3.5">
                                                       <CrossCircle/>
                                                       <p className="text-xl font-normal leading-[140%] text-black ">Operational friction</p>
                                                    </div>
                                               </div>
                         </div>
                         <div className="flex flex-col items-start gap-14.5 py-10 px-7.5 bg-linear-to-b from-[#DCFCE7] to-[#FFFFFF] rounded-4xl">
                                               <div className="flex flex-row gap-4.5 items-center bg-green-200 py-4 px-7.5 rounded-full">
                                                 <TickIcon/>
                                                 <p className="text-[26px] font-normal text-black font-jakarta-sans leading-[140%]"><b>With</b> AlphaSync</p>
                                               </div>
                                               <div className="flex flex-col gap-4">
                                                    <div className="flex flex-row gap-3.5">
                                                       <TickCircleIcon/>
                                                       <p className="text-xl font-normal leading-[140%] text-black ">Streamlined dispensing workflows</p>
                                                    </div>
                                                    <div className="flex flex-row gap-3.5">
                                                       <TickCircleIcon/>
                                                       <p className="text-xl font-normal leading-[140%] text-black ">Pharmacy-managed fulfillment</p>
                                                    </div>
                                                    <div className="flex flex-row gap-3.5">
                                                       <TickCircleIcon/>
                                                       <p className="text-xl font-normal leading-[140%] text-black ">Simplified infrastructure</p>
                                                    </div>
                                                    <div className="flex flex-row gap-3.5">
                                                       <TickCircleIcon/>
                                                       <p className="text-xl font-normal leading-[140%] text-black ">Scalable care delivery</p>
                                                    </div>
                                               </div>
                         </div>
              </div>
          </div>
     </section>
     <section className="relative min-h-screen flex lg:items-center items-end py-8 pt-105 lg:py-24 bg-linear-to-r from-[#A6C0FE] to-[#FFEAF6]">
                   <Image src={images.landingpageimages.TabletLaptop} alt={"tablet laptop"} className="w-80 h-80 lg:h-152 lg:w-194 absolute lg:top-24 z-10 lg:right-10 top-10"/> 
                   <Image src={images.landingpageimages.DottedCircle} alt={"Dotted Circle"} className="absolute w-100 h-100 lg:h-187.5 lg:w-187 lg:top-8 lg:right-5  top-5"/> 

                  <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 ">
                            <div className="flex flex-col gap-10">
                                  <p className="lg:text-[64px] text-4xl text-center lg:text-start font-extrabold leading-[120%] tracking-[-0.02em] ">For <span className="text-purple-500 font-bold italic font-playfair">Physicians</span> Building Forward</p>
                                  <div className="flex flex-col gap-2.5">
                                  <p className="text-2xl text-center lg:text-start font-normal leading-[160%] text-gray-800">AlphaSync is built for clinicians who are shaping modern care delivery — those embracing new models while maintaining the fundamentals of good medicine.</p>
                                  <p className="text-2xl text-center lg:text-start font-normal leading-[160%] text-gray-800">If you’re focused on delivering high-quality care through more efficient systems, AlphaSync is built for you.</p>
                                  </div>
                            </div>
                  </div>
     </section>
     <section className="py-24 flex flex-col gap-16 px-4">
          <div className="container max-w-7xl mx-auto rounded-[20px] p-16 bg-linear-to-t from-[#FFF1EB] to-[#ACE0F9] ">
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div className="flex flex-col lg:items-start gap-10">
                                <div className="flex flex-col gap-2">
                                   <p className="text-2xl font-normal text-center lg:text-start leading-[160%] text-black">Streamline care delivery with AlphaSync.</p>
                                   <p className="lg:text-[64px] text-4xl text-center lg:text-start font-extrabold leading-[120%] tracking-[-0.02em] ">Modernize your Dispensing <span className="text-medium-blue font-bold italic font-playfair">Infrastructure.</span></p>
                                </div>
                                <ThemeButton label={"Request Access"} variant={"primary"} showIcon={"true"}/>
                            </div>
                            <div className="flex items-center justify-center">
                              <Image src={images.landingpageimages.ModernizeImage} alt={"Modernize image"} className="w-83 h-83"/>
                            </div>
                     </div>
          </div>
          <div className="container max-w-7xl mx-auto px-4 lg:px-25">
            <div className="flex flex-col lg:text-start text-center gap-13.5">
            <h2 className=" lg:text-center  text-[52px] font-extrabold leading-[120%] tracking-[-0.02em]">Frequent Asked Question?</h2>
                    <NEWFAQ/>
                    </div>
          </div>
     </section>
     <section>
         <Footer/>
     </section>
    </main>
  );
}
