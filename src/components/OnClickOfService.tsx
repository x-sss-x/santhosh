"use client"
import "../../utils/supabase";
import ServiceButton from './BikeRide';



const YourComponent: React.FC = () => {
  const handleServiceClick = (serviceName: string) => {

    console.log(`Clicked on ${serviceName}`);
  };

  return (
    <div>
      <ServiceButton text="Bike Ride" onClick={() => handleServiceClick('Bike Ride')} />
      <ServiceButton text="Car Rental" onClick={() => handleServiceClick('Car Rental')} />
      {}
    </div>
  );
};

export default YourComponent;
