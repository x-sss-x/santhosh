"use client"
import { useParams } from "next/navigation";
import ProfileIcon from "../../../../../public/Images/Profile/profile.png";
import Profile from "@/components/Profile";
import Link from "next/link";
import { useState } from "react";

var ServiceProviders = () => {
  const { service } = useParams();
  const [selectedProvider, setSelectedProvider] = useState<{ name: string; id: number } | null>(null);


  const mapServices = [
    { service: "BikeRide", name: 'john', id: 1 },
    { service: "TaxiRide", name: 'dawne', id: 2 },
    { service: "CouponDeals", name: 'ryan', id: 3 },
    { service: "MedicineDelivery", name: 'lincoln', id: 4 },
    { service: "HomeCleaning", name: 'henry', id: 5 },
    { service: "FoodDelivery", name: 'doe', id: 6 },
    { service: "PetsCare", name: 'ryan', id: 7 },
    { service: "Security", name: 'rokie', id: 8 },
    { service: "CourierService", name: 'hmm', id: 9 },
    { service: "DogWalking", name: 'Jim', id: 10 },
    { service: "WaterDelivery", name: 'Jack', id: 11 },
    { service: "LiquorDelivery", name: 'Joss', id: 12 }
  ];

  const filteredServices = mapServices.filter((item) => item.service === service);


  const handleProviderClick = (name:string, id:number) => {
    setSelectedProvider({ name, id });
  };


  return (
    <div>
      <Link href='/bookservice/bookingdetails'>
      <h1 className="font-bold text-2xl m-3">{service}</h1>
      {filteredServices.map((item) => (
        <div key={item.id} className="m-3">
          <Profile
            id_no={item.id}
            text={item.name}
            imageSrc={ProfileIcon}
          />
        </div>
      ))}
        
        </Link>
    </div>
  );
};

export default ServiceProviders;
