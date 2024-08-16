"use client";

import { useParams } from 'next/navigation';
import React from 'react';
import { Freecourse } from '@/Data';
import Image from 'next/image';

import { Buying } from '@/_components/Buying';
import { Freecourses } from '@/_components/Freecourse';

export default function FreeCourseDetails() {
  const params = useParams();
  const { id } = params;

  // Find the specific course by ID
  const item = Freecourse.find((item) => item.id === parseInt(id));

  if (!item) {
    return <p>Course not found for ID: {id}</p>;
  }

  return (
    <div className='px-6 md:px-20 py-10' >
    <div className=' grid  grid-cols-1 md:grid-cols-2 gap-6 md:gap-20'>
      <div >
        <h2 className='font-bold text-md md:text-4xl font-serif leading-6 md:leading-none mb-6'>
          {item.title}
        </h2>
        <Image
            src={item.image}
            alt="course image"
            width={500}
            height={500}
            className="w-full object-cover h-[170px]"
          />        <p className='text-sm font-mono text-black py-10 leading-6  '>
          {item.description}
        </p>
        <div className='bg-gray-100 p-4 rounded-md font-mono '>
          <h3 className='text-xl font-semibold mb-2'>Features:</h3>
          <ul className='list-disc pl-5 mb-4'>
            {item.features.map((feature, index) => (
              <li key={index} className='text-gray-600'>{feature}</li>
            ))}
          </ul>
          <h3 className='text-xl font-semibold mb-2'>Benefits:</h3>
          <p className='text-gray-600 mb-4'>{item.benefits}</p>
          <h3 className='text-xl font-semibold mb-2'>Conclusion:</h3>
          <p className='text-gray-600'>{item.conclusion}</p>
        </div>
      </div>
      <div className='mt-6 md:mt-0 md:ml-6 flex-shrink-0'>
        <Buying />
      </div>
     
    </div>
     <Freecourses/>
     </div>
  );
}
