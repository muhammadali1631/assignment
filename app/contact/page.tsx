import React from 'react'
import img1 from '@/images/image 14.png'
import Image from 'next/image'
const page = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 text-xl'>
        <div className='flex flex-col gap-9 items-start md:pl-[12vw] px-4'>
        <h1 className='text-3xl md:text-5xl text-gray-400'>Contact<br /> <span className='text-black font-semibold'>Information</span> </h1>
        <p><span className='font-semibold'>Company Name</span> <br />1234 Sample Street Austin Texas 76401 </p>
        <p className='font-semibold'>512.333.2222</p>
        <p>sampleemail@gmail.com</p>
        <button>CONTACT US</button>
        </div>
        <Image src={img1} alt='map' className='w-[330px] sm:w-[450px] object-contain flex px-2 '/>
    </div>
  )
}

export default page