import React from 'react'
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
let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, ]

const page = () => {
  return (
    <div>
        <h1 className='pl-6 sm:pl-14 md:pl-28 lg:pl-40 text-2xl md:text-5xl mb-6'>Photo <br /> Gallery</h1>
        <div className='flex flex-wrap gap-5 lg:mx-14 justify-center py-6'>
            <div className='h-[3px] bg-gray-400 w-[90%]'></div>
            {images.map((items, idx)=>
                <Image key={idx} src={items} alt="image"/>
            )}
        </div>
    </div>
  )
}

export default page