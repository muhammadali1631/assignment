import Image from 'next/image'
import React from 'react'
import logo from '@/images/logo.svg'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div className='flex justify-between items-center py-5 px-12 mb-10'>
            <Image src={logo} alt='logo' height={0} width={0} className='w-[70px] object-contain'/>
        <nav>
            <ul className='hidden md:flex gap-7 '>
                <Link href={"/"} className='border-y-[1px] border-black px-3 '> <li>MAIN</li> </Link>
                <Link href={"/"} className='px-3'> <li>GALLERY</li> </Link>
                <Link href={"/"} className='px-3'> <li>PROJECTS</li> </Link>
                <Link href={"/"} className='px-3'> <li>CERTIFICATIONS</li> </Link>
                <Link href={"/"} className='px-3'> <li>CONTACT</li> </Link>
            </ul>
            <IoMenu className='block md:hidden text-3xl'/>
        </nav>
    </div>
  )
}

export default Header