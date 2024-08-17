"use client"
import { FaCartArrowDown } from "react-icons/fa";
import Image from "next/image"
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Freecourse } from "@/Data"
import { Button } from "@/components/ui/button"

export function Freecourses() {
  return (
    <>
    
    <h2 className="font-bold text-3xl my-10 " >Our Free Courses </h2>
    
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  mb-6 " >
      {
Freecourse.map((courses)=>(
  <Link key={courses.id} href={`/deatils/${courses.id}`} >
<Card className="  w-full md:w-[300px] border-none ">
      
        <div key={courses.id} >
          <Image
          src={courses.image}
          alt="freecoursesimage"
          width={500}
          height={500}
          className="w-full object-cover h-[170px] "
          
          />
        </div>
        <CardHeader className="px-1 py-2 " >
        <CardTitle className="text-md font-serif " >{courses.title}</CardTitle>
        <CardDescription>Pricing:   {courses.pricing}</CardDescription>
      </CardHeader>
    <div className="flex  item-center justify-between px-1 pb-2 " >
      <Button className='text-white w-full mb-1 ' >Enroll Now </Button>
    </div>
     
    </Card>
    </Link>
))
      }
    
    </div>
   
    </>
  )
}
