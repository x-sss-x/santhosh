import react from "react"
import Categories from '../components/Categories';
import bikeRideIcon from '../../public/Images/Icons/bike-ride.png';
import TaxiRideIcon from '../../public/Images/Icons/taxi-ride.png';

const categories = [
  { name: "Bike Ride", icon: bikeRideIcon },
  { name: "Taxi Ride", icon: TaxiRideIcon }
];

const BikeRideComponent = () => {
  const filteredCategories = categories.filter(category => category.name === "Bike Ride");
  const filteredCategories1 = categories.filter(category => category.name === "Bike Ride");

  return <div><Categories categories={filteredCategories} />  <Categories categories={filteredCategories} />;
  </div>
};

export default BikeRideComponent;