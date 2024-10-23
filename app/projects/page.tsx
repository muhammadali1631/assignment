import Image from 'next/image'
import React from 'react'
import img1 from '@/images/image 30.png'
import img2 from '@/images/image 33.png'
import img3 from '@/images/image 32.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import CountArrow from '@/components/CountArrow'
const page = () => {
  return (
    <div>
        <h1 className='pl-6 sm:pl-14 md:pl-28 lg:pl-40 text-2xl md:text-5xl mb-6 text-gray-400'>Our<br /> <span className='text-black font-semibold'>Projects</span> </h1>
        <div className='flex flex-col  items-center gap-10 w-[100%]'>
        <div className='h-[2px] bg-gray-400 w-[90%]'></div>

            <div className='flex justify-center w-[90%] flex-wrap'>
                <Image src={img1} alt='Image' className='w-[100%] sm:w-[500px]'/>
                <div className='w-[100%] sm:w-[500px] py-7 lg:py-0 gap-3 px-4 md:px-10 flex flex-col items-start justify-evenly bg-gray-200'>
                    <h1 className='text-3xl text-gray-400'>Sample Project</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className='py-4 px-7 bg-white flex items-center gap-3'>VIEW MORE <FaArrowRightLong/></button>
                </div>
            </div>
            <div className='flex justify-center w-[90%] flex-wrap'>
                <Image src={img2} alt='Image' className='w-[100%] sm:w-[500px]'/>
                <div className='w-[100%] sm:w-[500px] py-7 lg:py-0 gap-3 px-4 md:px-10 flex flex-col items-start justify-evenly bg-gray-200'>
                    <h1 className='text-3xl text-gray-400'>Sample Project 2</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className='py-4 px-7 bg-white flex items-center gap-3'>VIEW MORE <FaArrowRightLong/></button>
                </div>
            </div>
            <div className='flex justify-center w-[90%] flex-wrap'>
                <Image src={img3} alt='Image' className='w-[100%] sm:w-[500px]'/>
                <div className='w-[100%] sm:w-[500px] py-7 lg:py-0 gap-3 px-4 md:px-10 flex flex-col items-start justify-evenly bg-gray-200'>
                    <h1 className='text-3xl text-gray-400'>Sample Project 3</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className='py-4 px-7 bg-white flex items-center gap-3'>VIEW MORE <FaArrowRightLong/></button>
                </div>
            </div>
        </div>
        <div className=''>
        <CountArrow/>
        </div>
    </div>
  )
}

export default page