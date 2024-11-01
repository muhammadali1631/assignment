import React from 'react'
import  Main  from '@/components/Main'
import About from '@/components/About'
import Mission from '@/components/Mission'
import Project from '@/components/Project'
import Contact from '@/components/Contact'
const page = () => {
  return (
    <div >
      {/* <BackGround/> */}
      <Main/>
      <About/>
      <Mission/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default page
