import React from 'react';
import { Button } from '@/components/ui/button';
import { VideoPlayer } from './Videoplayer';

const Introvideo = () => {
  return (
    <>
      <h1 className="my-10 font-bold capitalize text-4xl "> <span className='text-red-600' > Course</span> Intro</h1>
      <h2 className="text-2xl font-semibold">Welcome to the <span className='text-red-600' >Course!</span> </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-20 mt-10 mb-20  ">
        <div className="left-text order-1 md:order-none mt-16 lg:mt-0  space-y-4"> 
        
          <p className="text-lg  ">
            This course will take you through a comprehensive journey to master the subject. Whether you re a beginner or looking to brush up on your skills this course has something for everyone.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse architecto maxime aliquid adipisci tempora odio iste itaque modi laborum dolores corporis pariatur. Inventore quod quas eligendi qui corporis repellendus optio!
          </p>
          <Button className="mt-4" >Enroll Now </Button>
        </div>
        <div className="right">
          <VideoPlayer />
        </div>
      </div>
    </>
  );
};

export default Introvideo;
