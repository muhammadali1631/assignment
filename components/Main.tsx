import Image from 'next/image'
import React from 'react'
import main from "@/images/Rectangle 6.png";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';



const Main = () => (
  <div className='flex flex-wrap justify-around gap-20'>
    <div className='flex flex-col justify-center px-10 fade-in-left'>
      <h1 className='text-5xl text-gray-400'>PROJECT</h1>
      <h2 className='text-5xl font-semibold'>Lorum</h2>
      <div className='flex mt-32 gap-2 justify-center md:justify-start'>
        <FaArrowLeft className='text-black bg-gray-200 w-10 h-10 py-2 ' />
        <FaArrowRight className='text-black bg-gray-200 w-10 h-10 py-2 ' />
      </div>
    </div>
    <div className=' w-[320px] sm:w-[450px] md:w-[550px] relative fade-in'>
      <Image src={main} alt='main' height={0} width={0} />
      <Link href={'/projects'}>
        <button className='absolute bottom-0 bg-white py-3 px-5 flex items-center gap-1'>VIEW PROJECT <FaArrowRight /> </button>
      </Link>
    </div>
  </div>
)

export default Main