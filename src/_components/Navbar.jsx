import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { IoMdPerson } from "react-icons/io";
import Image from 'next/image';
const Navbar = () => {
  return (
    <div className='bg-white shadow-md w-full h-auto ' >
      <div className="nav flex items-center justify-between md:px-36 px-6 py-4 ">
     <Link href={'/'} >  <div className='flex items-center
       gap-2' >
       <Image
          src='/logo.svg'
          alt="logo"
          width={40}
          height={40}
          className="w-full object-cover  "
          
          />
          <h2 className='font-bold text-3xl ' ><span className='text-red-600' >Edu</span>Hub </h2>
       </div>
       </Link>
        <div className="middtlecontent  flex items-center gap-8 ">
         
        <Link href='/singup' > <Button className="flex items-center gap-2 capitalize " > <IoMdPerson /> Singin</Button> </Link>
         
        </div>
        
        
      </div>
    </div>
  )
}

export default Navbar
