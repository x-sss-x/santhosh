"use client"
import { useRef } from "react";
import UploadPicture from "@/components/UploadPicture";
import Button from "@/components/Button";
import Link from "next/link";

var DescribeYourExperience = () => {
  const fileInputRef = useRef(null);

  
  return (
    <div>
      <div className="flex items-center xs:block">
        <div className="my-8 mx-16">
          <label htmlFor="text">
            <h1 className="text-2xl font-bold mx-3 xs:m-1">
              Describe Your Experience
            </h1>
            <br />
            <textarea
              name="text"
              placeholder="Describe your experience"
              rows={11}
              cols={60}
              className="bg-zinc-300 mx-3 xs:m-auto p-2 xs:w-60"
            />
          </label>
        </div>
        <div className="my-8 mx-20">
          <h1 className="m-3 xs:m-1">Add Images [optional]</h1>
          <UploadPicture />
          <input type="file" ref={fileInputRef} />

        </div>
      </div>
      <Link href="./feedback/FeedbackOnService/postedReview">
      <Button>POST</Button></Link>
    </div>
  );
};

export default DescribeYourExperience;
