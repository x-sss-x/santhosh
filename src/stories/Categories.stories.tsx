import type { Meta, StoryObj } from '@storybook/react';
import Categories, { CategoryProps } from '../components/Categories';
import bikeRideIcon from '../../public/Images/Icons/bike-ride.png';
import taxiRideIcon from '../../public/Images/Icons/taxi-ride.png';
import homeCleaningIcon from '../../public/Images/Icons/home-cleaning.png';
import courierServiceIcon from '../../public/Images/Icons/courier-service.png';
import foodDeliveryIcon from '../../public/Images/Icons/food-delivery.png';
import petCareIcon from '../../public/Images/Icons/pet-care.png';
import medicineDeliveryIcon from '../../public/Images/Icons/medicine-delivery.png';
import securityIcon from '../../public/Images/Icons/security.png';
import dogWalkingIcon from '../../public/Images/Icons/dog-walking.png';
import waterDeliveryIcon from '../../public/Images/Icons/water-delivery.png';
import couponDealsIcon from '../../public/Images/Icons/coupon-deals.png';
import liquorDeliveryIcon from '../../public/Images/Icons/liquor-delivery.png';

const meta: Meta<typeof Categories> = {
  title: 'Components/Categories',
  component: Categories,
};

export default meta;

type Story = StoryObj<typeof Categories>;

export const BikeRide: Story = {
  args: {
    categories: [
      { name: "Bike Ride", icon: bikeRideIcon },
    ],
  },
};

export const TaxiRide: Story = {
  args: {
    categories: [
      { name: "Taxi Ride", icon: taxiRideIcon },
    ],
  },
};

export const HomeCleaning: Story = {
  args: {
    categories: [
      { name: "Home Cleaning", icon: homeCleaningIcon },
    ],
  },
};

export const CourierService: Story = {
  args: {
    categories: [
      { name: "Courier Service", icon: courierServiceIcon },
    ],
  },
};

export const FoodDelivery: Story = {
  args: {
    categories: [
      { name: "Food Delivery", icon: foodDeliveryIcon },
    ],
  },
};

export const PetCare: Story = {
  args: {
    categories: [
      { name: "Pet Care", icon: petCareIcon },
    ],
  },
};

export const MedicineDelivery: Story = {
  args: {
    categories: [
      { name: "Medicine Delivery", icon: medicineDeliveryIcon },
    ],
  },
};

export const Security: Story = {
  args: {
    categories: [
      { name: "Security", icon: securityIcon },
    ],
  },
};

export const DogWalking: Story = {
  args: {
    categories: [
      { name: "Dog Walking", icon: dogWalkingIcon },
    ],
  },
};

export const WaterDelivery: Story = {
  args: {
    categories: [
      { name: "Water Delivery", icon: waterDeliveryIcon },
    ],
  },
};

export const CouponDeals: Story = {
  args: {
    categories: [
      { name: "Coupon Deals", icon: couponDealsIcon },
    ],
  },
};

export const LiquorDelivery: Story = {
  args: {
    categories: [
      { name: "Liquor Delivery", icon: liquorDeliveryIcon },
    ],
  },
};
export const Default: Story = {
  args: {
    categories: [
      { name: "Bike Ride", icon: bikeRideIcon },
      { name: "Taxi Ride", icon: taxiRideIcon },
      { name: "Home Cleaning", icon: homeCleaningIcon },
      { name: "Courier Service", icon: courierServiceIcon },
      { name: "Food Delivery", icon: foodDeliveryIcon },
      { name: "Pet Care", icon: petCareIcon },
      { name: "Medicine Delivery", icon: medicineDeliveryIcon },
      { name: "Security", icon: securityIcon },
      { name: "Dog Walking", icon: dogWalkingIcon },
      { name: "Water Delivery", icon: waterDeliveryIcon },
      { name: "Coupon Deals", icon: couponDealsIcon },
      { name: "Liquor Delivery", icon: liquorDeliveryIcon },
    ],
  },
};
