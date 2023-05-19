import React from "react";
import Image, { StaticImageData } from "next/image";
import { VariantProps, cva } from "class-variance-authority";

export type CustomerRequestProps = VariantProps<typeof customerRequestStyles>;

export const customerRequestStyles = cva(
  " bg-zinc-300 w-1/2 h-96 border border-black xs:w-full rounded-2xl",
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
  id: string;
  pickupTime: string;
  fromLocation: string;
  toLocation: string;
  date: string;
  status:string;
}

const CustomerRequest = ({
  imageSrc,
  name,
  id,
  pickupTime,
  fromLocation,
  toLocation,
  date,
  status,
  ...props
}: CustomerRequestExtendedProps) => {
  return (
    <div className={customerRequestStyles()} {...props}>
      <div className="my-4 flex flex-col items-center justify-center">
        <Image src={imageSrc} alt="Profile Image" />
      </div>
      <div className="my-4 flex flex-col items-center justify-center">
        <p className="text-xl font-bold">Name: {name}</p>
        <p className="text-lg font-bold">ID: {id}</p>
      </div>
      <div className="">
        <p className="m-3">Pick Up time: {pickupTime}</p>
        <p className="m-3">From: {fromLocation}</p>
        <p className="m-3">To: {toLocation}</p>
        <p className="m-3">Date: {date}</p>
        <p className="my-4 flex flex-col items-center justify-center text-lime-800">{status}</p>
      </div>
    </div>
  );
};

export default CustomerRequest;
