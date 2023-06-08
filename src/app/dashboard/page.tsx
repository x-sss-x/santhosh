import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Dashboard = () => {
  // Dummy data for analytics
  const analyticsData = {
    views: 1500,
    comments: 300,
    serviceProviders: 25,
    earnings: 10000,
  };

  // Dummy data for earnings graph
  const earningsGraphData = [
    { day: "Mon", earnings: 200 },
    { day: "Tue", earnings: 400 },
    { day: "Wed", earnings: 600 },
    { day: "Thu", earnings: 800 },
    { day: "Fri", earnings: 1000 },
    { day: "Sat", earnings: 1200 },
    { day: "Sun", earnings: 1400 },
  ];

  // Dummy data for comments
  const commentsData = [
    { id: 1, comment: "Great service!" },
    { id: 2, comment: "I'm satisfied with the quality." },
    { id: 3, comment: "Could be better." },
  ];

  return (
    <div className="p-8 bg-stone-200">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-500 p-4 rounded-md text-white">
          <h2 className="text-lg font-bold mb-2">Views</h2>
          <p>{analyticsData.views}</p>
        </div>
        <div className="bg-green-500 p-4 rounded-md text-white">
          <h2 className="text-lg font-bold mb-2">Comments</h2>
          <p>{analyticsData.comments}</p>
        </div>
        <div className="bg-yellow-500 p-4 rounded-md text-white">
          <h2 className="text-lg font-bold mb-2">Service Providers</h2>
          <p>{analyticsData.serviceProviders}</p>
        </div>
        <div className="bg-purple-500 p-4 rounded-md text-white">
          <h2 className="text-lg font-bold mb-2">Earnings</h2>
          <p>{analyticsData.earnings}</p>
        </div>
      </div>
      <h2 className="text-lg font-bold mb-4">Earnings Graph (Last 7 Days)</h2>
      <LineChart width={500} height={300} data={earningsGraphData}>
        <XAxis dataKey="day" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="earnings" stroke="purple" />
      </LineChart>
      <h2 className="text-lg font-bold mt-8 mb-4">Comments</h2>
      <div className="space-y-4">
        {commentsData.map((comment) => (
          <div key={comment.id} className="bg-white p-4 rounded-md">
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
