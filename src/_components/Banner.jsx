
import { Button } from '@/components/ui/button'

import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
const Banner = () => {
  return (
    <div>
   

<section
  className="relative bg-[url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] md:bg-cover bg-center bg-no-repeat"
>


  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="  bg-white rounded-md px-4 py-4 max-w-xl space-y-4 ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Discover Your Skills

        <strong className="block font-extrabold text-rose-700"> Frome Here. </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

     <Button className="flex item-center gap-2 " >Get Started <FaLongArrowAltRight  className='text-white' />
     </Button>
    </div>
  </div>
</section>
    </div>
  )
}

export default Banner
