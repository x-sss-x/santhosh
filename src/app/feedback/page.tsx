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
const FeedbackCategories = () => {
  return (
    <div>
      <div className="flex justify-center items-center m-4">
        <Link href="./feedback/FeedbackOnService/">
          <div className="m-4">
            <BikeRide text="Bike Ride" />
          </div>
        </Link>
        <Link href="./feedback/FeedbackOnService/">
          <div className="m-4">
            <TaxiRide text="Taxi Ride" />
          </div>
        </Link>

        <Link href="./feedback/FeedbackOnService/">
          <div className="m-4">
            <HomeCleaning text="Home Cleaning" />
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center m-4">
        <Link href="./feedback/FeedbackOnService/">
          <div className="m-4">
            <CourierService text="Courier Service" />
          </div>
        </Link>

        <Link href="./feedback/FeedbackOnService/">
          <div className="m-4">
            <FoodDelivery text="Food Delivery" />
          </div>
        </Link>

        <Link href="./feedback/FeedbackOnService/">
          <div className="m-4">
            <PetsCare text="Pets Care" />
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center m-4">
        <Link href="./feedback/FeedbackOnService/">
          <div className="m-4">
            <MedicineDelivery text="Medicine Delivery" />
          </div>
        </Link>

        <Link href="./feedback/FeedbackOnService/">
          <div className="m-4">
            <Security text="Security" />
          </div>
        </Link>

        <Link href="./feedback/FeedbackOnService/">
          <div className="m-4">
            <DogWalking text="Dog Walking" />
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center m-4">
        <Link href="./feedback/FeedbackOnService/">
          <div className="m-4">
            <WaterDelivery text="Water Delivery" />
          </div>
        </Link>

        <Link href="./feedback/FeedbackOnService/">
          <div className="m-4">
            <CouponDeals text="Coupon Deals" />
          </div>
        </Link>

        <Link href="./feedback/FeedbackOnService/">
          <div className="m-4">
            <LiquorDelivery text="Liquor Delivery" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeedbackCategories;
