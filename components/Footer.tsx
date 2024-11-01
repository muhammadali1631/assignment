import Image from 'next/image'
import React from 'react'
import logo from '@/images/Group 11 1.png'
import Link from 'next/link'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='bg-[#2C2C2C] text-white mt-24 p-10 flex justify-around flex-wrap gap-10 '>
        <div className='fade-in3'>
            <Link href={'/'}>
            <Image src={logo} alt=''/>
            </Link>
        </div>
        <div className='fade-in3'>
            <h3 className='font-semibold mb-5'>Information</h3>
            <ul className='flex flex-col gap-3'>
                <Link href={"/"}> <li>Main</li> </Link>
                <Link href={"/photo-gallery"}> <li>Gallery</li> </Link>
                <Link href={"/projects"}> <li>Projects</li> </Link>
                <Link href={"/certifications"}> <li>Certifications</li> </Link>
                <Link href={"/contact"}> <li>Contacts</li> </Link>
            </ul>
        </div>
        <div className='flex flex-col gap-3 fade-in3'>
            <h3 className='font-semibold mb-3'>Contacts</h3>
            <p className='flex text-lg items-center gap-2'><IoLocationOutline className='text-xl'/> 1234 Sample Street <br />
            Austin Texas 78704</p>
            <p className='flex text-lg items-center gap-2'><FiPhone className='text-xl'/> 1234567890</p>
            <p className='flex text-lg items-center gap-2'><MdOutlineMailOutline className='text-xl'/> samplemail@gmail.com</p>
            
        </div>
        <div className='fade-in3'>
        <h3 className='font-semibold mb-3'>Social Media</h3>
        <div className='flex gap-7'>
            <Link href={''}> <FaFacebookF/> </Link>
            <Link href={''}> <FaTwitter/> </Link>
            <Link href={''}> <FaLinkedin/> </Link>
            <Link href={''}> <FaPinterestP/> </Link>
        </div>
        </div>
    </div>
  )
}

export default Footer