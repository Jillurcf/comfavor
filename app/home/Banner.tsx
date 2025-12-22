// "use client";

// import * as React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// const images = [
//   "/website.jpg",
//   // "/BannerImg_2.jpg",
//   "/BannerImg_3.jpg",
//   "/digitalMarketing.jpg",
// ];
// const texts = [
//   "Website Development",
//   "Mobile App Development",
//   "Digital Marketing",
//   "Graphic Design",
// ];
// export default function CarouselDemo() {
//   const carouselRef = React.useRef<HTMLDivElement>(null);

//   // Auto play
//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       const nextButton = carouselRef.current?.querySelector(
//         "[data-carousel-next]"
//       ) as HTMLElement;
//       nextButton?.click();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div ref={carouselRef} className="relative z-10 w-full overflow-hidden">
//       <Carousel className="w-full">
//         <CarouselContent>
//           {images.map((img, index) => (
//             <CarouselItem key={index} className="basis-full">
//               <div className="w-full h-[60vh] relative">
//                 <img
//                   src={img}
//                   alt={`Banner ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//                 {/* <h1 className="absolute top-[50%] left-[15%] text-white text-2xl font-bold">
//                  {texts[index]}
//                 </h1> */}
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//         {/* Arrows */}
//         <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white rounded-full z-20" />
//         <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white rounded-full z-20" />
//       </Carousel>
//     </div>
//   );
// }

"use client"

import React from "react"
import { Carousel } from "antd"
import Image from "next/image"

const Banner: React.FC = () => {
  const desktopImages = [
    "/website.jpg",
  "/BannerImg_2.jpg",
  "/BannerImg_3.jpg",
  "/digitalMarketing.jpg",
]

const mobileImages = [
    "/website.jpg",
  "/BannerImg_2.jpg",
  "/BannerImg_3.jpg",
  "/digitalMarketing.jpg",
]

  return (
    <>
      {/* Desktop / Tablet */}
      <div className="hidden md:block">
        <Carousel arrows autoplay autoplaySpeed={5000}>
          {desktopImages.map((src, index) => (
            <div key={index} className="w-full h-[60vh] relative">
              <Image
                src={src}
                alt={`Banner ${index + 1}`}
                fill
                priority
                className="object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <Carousel autoplay autoplaySpeed={5000}>
          {mobileImages.map((src, index) => (
            <div key={index} className="w-full h-[40vh] relative">
              <Image
                src={src}
                alt={`Mobile Banner ${index + 1}`}
                fill
                priority
                className="object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default Banner
