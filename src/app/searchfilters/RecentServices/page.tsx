import BikeRide from "@/components/BikeRide";
import Link from "next/link";

var RecentServices = () =>{
    const service="BikeRide"
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
  return (
    <div>
        <div className="grid grid-cols-3 justify-between items-center">
      {filteredServices.map((service) => (
        <div key={service.id}>
          <div className="my-4 mx-6">
          <Link href="/bookservice/serviceproviders/BikeRide">
          <BikeRide text="Bike ride"/> 
          </Link>
          </div>
    </div>))}
    </div>
    </div>
)}
export default RecentServices;
