"use client";
import React from "react";
import profilePhoto from "../../../public/Images/Profile/profile.png";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

var analytics = [
  {
    views: "465k",
    comments: 100,
    customers: 90,
    revenue: "$789",
  },
];

var data = [
  { name: "Week 1", customers: 20 },
  { name: "Week 2", customers: 28 },
  { name: "Week 3", customers: 40 },
  { name: "Week 4", customers: 47 },
  { name: "Week 5", customers: 60 },
];

var Page = () => {
  return (
    <div>
      <div>
        <h1 className="mx-12 font-bold text-xl mt-4">Dashboard</h1>
        <div className="flex">
          

        <Image
          src={profilePhoto}
          alt="profile"
          className="my-3 ml-10 w-28 h-28"
        />
         <div className="my-12 ml-1">
          <p>Hi</p>
          <p>Santhosh</p>{" "}
          </div>
        
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-stone-200 p-4 rounded-xl text-2xl hover:bg-stone-400 xs:text-sm">Today</button>
        <button className="bg-stone-200 p-4 ml-12 rounded-xl text-2xl hover:bg-stone-400 xs:text-sm ">Last 6 days</button>
        <button className="bg-stone-200 p-4 ml-12 rounded-xl text-2xl hover:bg-stone-400 xs:text-sm">Month</button>
        <button className="bg-stone-200 p-4 ml-12 rounded-xl text-2xl hover:bg-stone-400 xs:text-sm">Year</button>
      </div>
      <div className="container mx-auto p-4 w-full h-60 bg-stone-200 p-4 my-2 rounded-xl">
        <h1 className="text-xl font-bold mb-4">Analytics</h1>
        {analytics.map((item, index) => (
          <div key={index} className="">
            <div className="flex justify-between my-2">
              <p className="text-left">Views:</p>
              <p className="text-right">{item.views}</p>
            </div>
            <div className="flex justify-between my-2">
              <p className="text-left">Comments:</p>
              <p className="text-right">{item.comments}</p>
            </div>
            <div className="flex justify-between my-2">
              <p className="text-left">Customers:</p>
              <p className="text-right">{item.customers}</p>
            </div>
            <div className="flex justify-between my-2">
              <p className="text-left">Revenue:</p>
              <p className="text-right">{item.revenue}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="container mx-auto p-4 w-full h-96 bg-stone-200 p-4 my-2 rounded-xl ">
        <h1 className="text-xl font-bold mb-4 xs:text-lg">Customers</h1>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="customers"
              stroke="black"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="container mx-auto p-4 w-full h-96 bg-stone-200 p-4 my-2 rounded-xl mt-5">
        <h1 className="mx-12 font-bold text-xl">Comments</h1>
        <div className="flex">
          

        <Image
          src={profilePhoto}
          alt="profile"
          className="my-3 ml-10 w-28 h-28 xs:w-20 xs:h-20"
        />
         <div className="my-12 ml-4 xs:my-3">
          <p className="font-bold ">Santhosh</p>
          <p>This service is awesome</p>{" "}
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Page;
