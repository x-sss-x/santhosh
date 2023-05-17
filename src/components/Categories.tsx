import BikeRide from './BikeRide';
import TaxiRide from './TaxiRide';
import HomeCleaning from './HomeCleaning';
import CourierService from './CourierService';
import MedicineDelivery from './MedicineDelivery';
import Security from './Security';
import DogWalking from './DogWalking';
import WaterDelivery from './WaterDelivery';
import CouponDeals from './CouponDeals';
import LiquorDelivery from './LiquorDelivery';
import FoodDelivery from './FoodDelivery';
import PetsCare from './PetsCare';
const ServiceCategories: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <BikeRide text="Bike Ride" />
      <TaxiRide text="Taxi Ride" />
      <HomeCleaning text="Home Cleaning" />
      <CourierService text="Courier Service" />
        <FoodDelivery text="Food Delivery" />
        <PetsCare text="Pets Care" />
      <MedicineDelivery text="Medicine Delivery" />
      <Security text="Security" />
      <DogWalking text="Dog Walking" />
      <WaterDelivery text="Water Delivery" />
      <CouponDeals text="Coupon Deals" />
      <LiquorDelivery text="Liquor Delivery" />
    </div>
  );
};

export default ServiceCategories;
