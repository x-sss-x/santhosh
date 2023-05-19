import React from 'react';

interface PastServiceHistoryProps {
  taxiRide: string;
  rideCode: string;
  time: string;
  cost: string;
}

const PastServiceHistory: React.FC<PastServiceHistoryProps> = ({
  taxiRide,
  rideCode,
  time,
  cost,
}) => {
  return (
    <div className="bg-zinc-300 w-1/2 rounded-xl xs:w-full">
      <div className="text-sky-800 border rounded-xl xs:w-full border-sky-800 p-4 flex">
        <p className="text-xl m-auto xs:text-sm">{taxiRide}</p>
        <p className="text-sm m-auto xs:text-sm">{rideCode}</p>
        <p className="text-sm m-auto xs:text-sm">{time}</p>
        <p className="text-sm m-auto xs:text-sm">{cost}</p>
      </div>
    </div>
  );
};

export default PastServiceHistory;
