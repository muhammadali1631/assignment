import React from 'react'
import { LiaSlashSolid } from "react-icons/lia";

import img1 from '@/images/Rectangle 22.png'
import img2 from '@/images/Rectangle 23.png'
import img3 from '@/images/Rectangle 24.png'
import img4 from '@/images/Rectangle 25.png'
import img5 from '@/images/Rectangle 26.png'
import img6 from '@/images/Rectangle 27.png'
import img7 from '@/images/Rectangle 28.png'
import img8 from '@/images/Rectangle 29.png'
import img9 from '@/images/Rectangle 30.png'
import img10 from '@/images/Rectangle 31.png'
import Image from 'next/image'
import { FaArrowLeft, FaArrowLeftLong, FaArrowRight, FaArrowRightLong } from 'react-icons/fa6';
import CountArrow from '@/components/CountArrow';
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, ]

const page = () => {
  return (
    <div>
        <h1 className='pl-6 sm:pl-14 md:pl-28 lg:pl-40 text-2xl md:text-5xl mb-6 text-gray-400'>Photo <br /> <span className='text-black font-semibold'>Gallery</span> </h1>
        <div className='flex flex-wrap gap-5 lg:mx-14 justify-center py-6'>
            <div className='h-[2px] bg-gray-400 w-[90%]'></div>
            {images.map((items, idx)=>
                <Image key={idx} src={items} alt="image"/>
            )}
        </div>
        <CountArrow/>
    </div>
  )
}

export default page