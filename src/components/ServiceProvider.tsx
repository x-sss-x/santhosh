import React from "react";
import Image, { StaticImageData } from "next/image";
import { VariantProps, cva } from "class-variance-authority";

export type CustomerRequestProps = VariantProps<typeof customerRequestStyles>;

export const customerRequestStyles = cva(
  "bg-zinc-300 w-1/2 h-96 border border-black xs:w-full rounded-2xl",
  {
    variants: {
      size: {
        default: "",
      },
    },
  }
);

interface CustomerRequestExtendedProps extends CustomerRequestProps {
  imageSrc: StaticImageData;
  name: string;
  id_no: string;
  service: string;
  date: string;
  time: string;
  fromLocation: string;
  toLocation: string;
  Amount: string;
}

const CustomerRequest = ({
  imageSrc,
  name,
  id_no,
  service,
  date,
  time,
  fromLocation,
  toLocation,
  Amount,
  ...props
}: CustomerRequestExtendedProps) => {
  return (
    <div className={customerRequestStyles()} {...props}>
      <div className="flex justify-end m-3">
        <Image src={imageSrc} alt="Profile Image" />
      </div>
      <div className="">
        <p className="text-xl m-3 font-semi-bold">Name: {name}</p>
        <p className="text-xl m-3 font-semi-bold">ID: {id_no}</p>
      </div>
      <div className="">
        <p className="text-xl m-3 font-semi-bold">Time: {time}</p>
        <p className="text-xl m-3 font-semi-bold">Date: {date}</p>
        <p className="text-xl m-3 font-semi-bold">From: {fromLocation}</p>
        <p className="text-xl m-3 font-semi-bold">To: {toLocation}</p>
        <p className="text-xl m-3 font-semi-bold">Amount Charged: {Amount}</p>
      </div>
    </div>
  );
};

export default CustomerRequest;
