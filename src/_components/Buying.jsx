"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Freecourse } from "@/Data";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Buying() {

  const notify = () => toast(`Sucessfully Enrolled ${item.title} Course! `);



  const params = useParams();
  const { id } = params;

  // Find the specific course by ID
  const item = Freecourse.find((item) => item.id === parseInt(id));

  if (!item) {
    return <p>No courses found</p>;
  }

  const description = item.description.slice(0, 105);


  return (
    <div className="mb-6 md:sticky z-[999] top-0">
      <Card className=" w-full md:w-[360px] px-4 py-2">
        <div key={item.id}>
          <CardTitle className="text-md font-serif my-2">{item.title}</CardTitle>
          <Image
            src={item.image}
            alt="course image"
            width={500}
            height={500}
            className="w-full object-cover h-[170px]"
          />
        </div>
        <CardHeader className="px-1 py-2">
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <span className="text-red-600 text-sm">Rating: {item.rating}</span>
        <div className="flex item-center flex-col px-1 mt-2 pb-2 gap-2">
          <Button className="w-full text-white bg-green-500 hover:bg-green-600">
            Pricing: {item.pricing}
          </Button>
          <Button onClick={notify}
            className="w-full text-white bg-blue-500 hover:bg-blue-600"
           
          >
            Enroll Now
          </Button>
          <ToastContainer />

        
  
  
         
        </div>
      </Card>
    </div>
  );
}
