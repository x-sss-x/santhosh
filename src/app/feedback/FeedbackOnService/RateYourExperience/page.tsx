"use client";
import Star from "@/components/Star";
import emptyStarImage from "../../../../../public/Images/Review/star-empty.png";
import fullStarImage from "../../../../../public/Images/Review/star-filled.png";
import halfStarImage from "../../../../../public/Images/Review/star-half-filled.png";
import Button from "@/components/Button";
import { useState } from "react";

const YourComponent: React.FC = () => {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const handleButtonClick = (buttonName: string) => {
    if (selectedButtons.includes(buttonName)) {
      setSelectedButtons(selectedButtons.filter((name) => name !== buttonName));
    } else {
      setSelectedButtons([...selectedButtons, buttonName]);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-2xl m-3">Rate Your Experience</h1>
      <p className="m-3">Are you Satisfied with our Service?</p>
      <div className="m-3">
        <Star
          rating={4.5}
          emptyStar={emptyStarImage}
          fullStar={fullStarImage}
          halfStar={halfStarImage}
          size="default"
        />
      </div>
      <hr className="h-px my-8 bg-gray-200 border-3 dark:bg-gray-700" />
      <div>
        <h2 className="m-3">Tell us what can be improved?</h2>
        <div className="grid grid-cols-2">
          <button
            className={`w-96 xs:w-48 bg-stone-200 border-sky-600 border-2 rounded-2xl font-bold text-neutral-400 px-5 py-2 m-auto my-2 ${
              selectedButtons.includes("Overall Service")
                ? "bg-sky-500 text-white"
                : ""
            }`}
            onClick={() => handleButtonClick("Overall Service")}
          >
            Overall Service
          </button>
          <button
            className={`w-96 xs:w-48 bg-stone-200 border-sky-600 border-2 rounded-2xl font-bold text-neutral-400 px-5 py-2 m-auto my-2 ${
              selectedButtons.includes("Customer Support")
                ? "bg-sky-500 text-white"
                : ""
            }`}
            onClick={() => handleButtonClick("Customer Support")}
          >
            Customer Support
          </button>
          <button
            className={`w-96 xs:w-48 bg-stone-200 border-sky-600 border-2 rounded-2xl font-bold text-neutral-400 px-5 py-2 m-auto my-2 ${
              selectedButtons.includes("Speed and efficiency")
                ? "bg-sky-500 text-white"
                : ""
            }`}
            onClick={() => handleButtonClick("Speed and efficiency")}
          >
            Speed and efficiency
          </button>
          <button
            className={`w-96 xs:w-48 bg-stone-200 border-sky-600 border-2 rounded-2xl font-bold text-neutral-400 px-5 py-2 m-auto my-2 ${
              selectedButtons.includes("Repair Quality")
                ? "bg-sky-500 text-white"
                : ""
            }`}
            onClick={() => handleButtonClick("Repair Quality")}
          >
            Repair Quality
          </button>
          <button
            className={`w-96 xs:w-48 bg-stone-200 border-sky-600 border-2 rounded-2xl font-bold text-neutral-400 px-5 py-2 m-auto my-2 ${
              selectedButtons.includes("Pickup and Delivery")
                ? "bg-sky-500 text-white"
                : ""
            }`}
            onClick={() => handleButtonClick("Pickup and Delivery")}
          >
            Pickup and Delivery
          </button>
          <button
            className={`w-96 xs:w-48 bg-stone-200 border-sky-600 border-2 rounded-2xl font-bold text-neutral-400 px-5 py-2 m-auto my-2 ${
              selectedButtons.includes("Transparency")
                ? "bg-sky-500 text-white"
                : ""
            }`}
            onClick={() => handleButtonClick("Transparency")}
          >
            Transparency
          </button>
        </div>
        <div>
          <label>
            <br />
            <textarea
              name="postContent"
              placeholder="Tell us what to improve"
              rows={4}
              cols={40}
              className="mx-auto block bg-stone-200 m-3 p-2"
            />
          </label>
        </div>
        <Button>POST</Button>
      </div>
    </div>
  );
};

export default YourComponent;
