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
import { PaidCourses } from "@/Data";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Buying() {
  const params = useParams();
  const { id } = params;

  const notify = () => toast(`Sucessfully Enrolled ${item.title} Course! `);


  // Find the specific course by ID
  const item = PaidCourses.find((item) => item.id === parseInt(id));

  if (!item) {
    return <p>No courses found</p>;
  }

  const description = item.description.slice(0, 105);

  return (
    <div className="mb-6 md:sticky z-[999] top-0  ">
      <Card className=" w-[300px] md:w-[360px] px-4 py-2">
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
          <Popup
            trigger={
              <Button className="w-full text-white bg-blue-500 hover:bg-blue-600">
                Enroll Now
              </Button>
            }
            modal
            contentStyle={{
              width: "380px",
              padding: "20px",
              borderRadius: "10px",
              animation: "fadeIn 0.3s",
            }}
            overlayStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <div>
              <h3 className="text-lg font-bold">Enrollment Confirmation</h3>
              <p className="mt-2">
                Are you sure you want to enroll in the {item.title} course?
              </p>
              <Button
                className="mt-4 w-full text-white bg-green-500 hover:bg-green-600"
                onClick={notify}
              >
                Confirm Enrollment
              </Button>
              <ToastContainer/>
            </div>
          </Popup>
        </div>
      </Card>
    </div>
  );
}
