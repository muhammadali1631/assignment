import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import contactImg from '@/images/image 12.png'
const Contact = () => {
  return (
   
    <div className='flex flex-wrap md:flex-col lg:flex-row justify-around items-center mt-20 gap-7'>
        <div className='flex flex-col gap-7'>

            <h1 className='text-5xl text-[#BDBDBD]'>Contact Us</h1>
            <div className='flex flex-col gap-3'>
                <input className='bg-gray-200 h-10 w-[80vw] lg:w-72 px-5' type="text" placeholder='Name' />
                <input className='bg-gray-200 h-10 lg:w-72 px-5' type="text" placeholder='Phone Number' />
                <input className='bg-gray-200 h-10 lg:w-72 px-5' type="text" placeholder='email' />
                <input className='bg-gray-200 h-10 lg:w-72 px-5' type="text" placeholder='Interested in' />
                <textarea name="" id="" className='bg-gray-200 px-5 py-2 h-32' placeholder='Message'></textarea>
            </div>
            <button className='flex items-center bg-black w-40 text-white py-4 justify-center gap-3'>SEND EMAIL <FaArrowRightLong/></button>
        </div>
        <div>
            <Image src={contactImg} alt='' className='w-[300px] sm:w-[450px] md:w-[600px] lg:w-[700px]'/>
        </div>
    </div>
  )
}

export default Contact