"use client"
import { FaHtml5, FaCss3Alt, FaJs,  FaJava } from 'react-icons/fa';

import { SiC, } from 'react-icons/si';
import { SiThealgorithms } from "react-icons/si";
import { IoLogoPython } from "react-icons/io";



const icons = {
  FaHtml5 : <FaHtml5/> , 
  FaCss3Alt : <FaCss3Alt/>,
  FaJs : <FaJs/> ,
  IoLogoPython: <IoLogoPython/>,
  FaJava : <FaJava/>,
  SiC : <SiC/>,
  SiThealgorithms : <SiThealgorithms/>

}


import { topics } from "@/Data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,

  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardWithForm() {
  return (
    <>
    <h2 className='font-bold text-3xl my-10 ' >Popular  <span  className='text-red-600' >Categories</span> </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 mb-8  ">
      {topics.map(({name , icon},  id) => (
        <Card key={id} className="w-[150px] bg-[#272E3F] text-white flex flex-col items-center  ">
          <CardHeader>
           
            <div className="flex items-center ">
              <div className='text-4xl text-white ' >{icons[icon]}</div> 
            </div>
          </CardHeader>
          <CardContent>
          <CardTitle className="text-md " >{name}</CardTitle>
          </CardContent>
         
        </Card>
      ))}
    </div>
    </>
  );
}
