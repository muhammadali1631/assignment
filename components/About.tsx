import Image from 'next/image'
import React from 'react'
import img1 from '@/images/Rectangle 8.png'
import img2 from '@/images/Rectangle 9.png'
import img3 from '@/images/Rectangle 10.png'
import { FaLongArrowAltRight } from "react-icons/fa";


const About = () => {
  return (
    <div className="flex justify-center mt-16">
    <div className='flex w-[90%] flex-wrap justify-around py-10 gap-5 h-full bg-a-50'>
        <div className='flex gap-3 items-center fade-in-left2'>
            <div className=''>
            <Image src={img1} alt='' className='w-[150px] md:w-[250px]'/>
            <Image src={img3} alt='' className='w-[150px] md:w-[250px]'/>
            </div>
            <Image src={img2} alt='' className='w-[150px] md:w-[270px] object-contain'/>
        </div>
        <div className=' w-[500px] flex flex-col justify-center gap-10 px-5 fade-in-right2'>
            <h3 className='text-gray-500 text-5xl '>About</h3>
            <p className='text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            
            <button className='flex justify-center bg-white w-40 py-5 items-center gap-2 '>READ MORE <FaLongArrowAltRight className='text-3xl font-extralight'/></button>
        </div>
    </div>
    </div>
  )
}

export default About
