import BikeRide from "@/components/BikeRide";
import CouponDeals from "@/components/CouponDeals";
import CourierService from "@/components/CourierService";
import DogWalking from "@/components/DogWalking";
import FoodDelivery from "@/components/FoodDelivery";
import HomeCleaning from "@/components/HomeCleaning";
import LiquorDelivery from "@/components/LiquorDelivery";
import MedicineDelivery from "@/components/MedicineDelivery";
import PetsCare from "@/components/PetsCare";
import Security from "@/components/Security";
import TaxiRide from "@/components/TaxiRide";
import WaterDelivery from "@/components/WaterDelivery";
import Link from "next/link";

var ServicesByFeedback = () => {
  const mapServices = [
    { service: "BikeRide", name: "john", id: 1, rating: 3 },
    { service: "TaxiRide", name: "dawne", id: 2, rating: 2 },
    { service: "CouponDeals", name: "ryan", id: 3, rating: 0 },
    { service: "MedicineDelivery", name: "lincoln", id: 4, rating: 4.2 },
    { service: "HomeCleaning", name: "henry", id: 5, rating: 4 },
    { service: "FoodDelivery", name: "doe", id: 6, rating: 5 },
    { service: "PetsCare", name: "ryan", id: 7, rating: 2.5 },
    { service: "Security", name: "rokie", id: 8, rating: 3 },
    { service: "CourierService", name: "hmm", id: 9, rating: 1 },
    { service: "DogWalking", name: "Jim", id: 10, rating: 4 },
    { service: "WaterDelivery", name: "Jack", id: 11, rating: 1.5 },
    { service: "LiquorDelivery", name: "Joss", id: 12, rating: 0.3 },
  ];

  const renderComponentByService = (service: string) => {
    switch (service) {
      case "TaxiRide":
        return <TaxiRide text={"Taxi ride"} />;
      case "BikeRide":
        return <BikeRide text="Bike ride" />;
      case "CouponDeals":
        return <CouponDeals text="Coupon Deals" />;
      case "MedicineDelivery":
        return <MedicineDelivery text="Medicine Delivery" />;
      case "HomeCleaning":
        return <HomeCleaning text="Home Cleaning" />;
      case "FoodDelivery":
        return <FoodDelivery text="Food Delivery" />;
      case "PetsCare":
        return <PetsCare text="Pets Care" />;
        case "Security":
        return <Security text="Security" />;
        case "CourierService":
        return <CourierService text="Courier Service" />;
        case "DogWalking":
        return <DogWalking text="Dog Walking" />;
        case "WaterDelivery":
        return <WaterDelivery text="Water Delivery" />;
        case "LiquorDelivery":
        return <LiquorDelivery text="Liquor Delivery" />;
        
        
      default:
        return null;
    }
  };
  const filteredServices = mapServices.filter((service) => service.rating > 3);

  return (
    <div>
      <h2 className="font-bold text-center text-2xl"> Services ratings with 3 and more </h2>
      <div className="grid grid-cols-3 justify-between items-center">
      {filteredServices.map((service) => (
        <div key={service.id}>
          <div className="my-4 mx-6">
          <Link href={`/bookservice/serviceproviders/${service.service}`}>
          {renderComponentByService(service.service)}
          </Link>
          </div>
          
          </div> 
          
      ))}
      </div>
    </div>
  );
};

export default ServicesByFeedback;
