import { cva} from 'class-variance-authority';
import Image from 'next/image';
import foodDeliveryImage from '../../public/Images/Icons/food-delivery.png';

const FoodDeliveryButtonStyle = cva('flex flex-col items-center justify-center bg-zinc-300 xs:w-32 h-32 w-80 py-4 px-4');

interface FoodDeliveryProps {
  text: string;
}

const FoodDelivery: React.FC<FoodDeliveryProps> = ({ text }) => {
  return (
    <button className={FoodDeliveryButtonStyle()}>
      <div className="flex items-center justify-center ">
        <Image src={foodDeliveryImage} alt="Food Delivery" width={64} height={64} />
      </div>
      <div className="mt-2 text-center text-sky-800">{text}</div>
    </button>
  );
};

export default FoodDelivery;
