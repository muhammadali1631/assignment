import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { LiaSlashSolid } from 'react-icons/lia'

const CountArrow = () => {
  return (
        <div className='flex gap-7 justify-center sm:justify-start'>
          <div className='flex text-3xl gap-10 pl-6 sm:pl-14 md:pl-28 lg:pl-40'>
          <p>0 <br />1</p>
          <p className='text-gray-400 flex gap-8'><LiaSlashSolid className='text-4xl'/> 05</p>
          </div>
          <div className='flex gap-5'>
          <FaArrowLeftLong className=' py-2 shad w-10 h-10 text-xl'/>
          <FaArrowRightLong className=' py-2 shad w-10 h-10 text-xl bg-gray-100'/>
          </div>
        </div>
  )
}

export default CountArrow