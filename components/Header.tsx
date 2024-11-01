'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/images/logo.svg'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Header = () => {
  const [attr, setAttr] = useState('hidden')
  const [attr2, setAttr2] = useState('block')
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () =>{
    setIsOpen(!isOpen)
    setAttr(isOpen ? 'hidden': 'block')
    setAttr2(isOpen ? 'block': 'hidden')
  }
  return (
    <header className='mb-10 fade-in'>
    <div className='flex justify-between items-center py-5 px-6 sm:px-12'>
            <Link href={'/'}>
            <Image src={logo} alt='logo' height={0} width={0} className='w-[70px] object-contain'/>
            </Link>
        <nav>
            <ul className='hidden md:flex gap-7 '>
                <Link href={"/"} className='hover:border-y-[1px] hover:border-black px-3 '> <li>MAIN</li> </Link>
                <Link href={"/photo-gallery"} className='hover:border-y-[1px] hover:border-black px-3'> <li>GALLERY</li> </Link>
                <Link href={"/projects"} className='hover:border-y-[1px] hover:border-black px-3'> <li>PROJECTS</li> </Link>
                <Link href={"/certifications"} className='hover:border-y-[1px] hover:border-black px-3'> <li>CERTIFICATIONS</li> </Link>
                <Link href={"/contact"} className='hover:border-y-[1px] hover:border-black px-3'> <li>CONTACT</li> </Link>
            </ul>
            <IoMenu onClick={openMenu} className={`${attr2} md:hidden text-3xl`}/>
            <RxCross2 onClick={openMenu} className={`${attr} text-3xl`}/>
        </nav>
    </div>
    <div className={`${attr} md:hidden`}>
      <ul className='grid justify-center text-center gap-4'>
        <Link href={"/"} className=''> <li>MAIN</li> </Link>
        <Link href={"/photo-gallery"} className=''> <li>GALLERY</li> </Link>
        <Link href={"/projects"} className=''> <li>PROJECTS</li> </Link>
        <Link href={"/certifications"} className=''> <li>CERTIFICATIONS</li> </Link>
        <Link href={"/contact"} className=''> <li>CONTACT</li> </Link>
      </ul>
    </div>
    </header>
  )
}

export default Header