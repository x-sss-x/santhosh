import { cva} from 'class-variance-authority';
import Image from 'next/image';
import waterDeliveryImage from '../../public/Images/Icons/water-delivery.png';

const WaterDeliveryButtonStyle = cva('flex flex-col items-center justify-center bg-zinc-300 h-107 w-107 py-4 px-4');

interface WaterDeliveryProps {
  text: string;
}

const WaterDelivery: React.FC<WaterDeliveryProps> = ({ text }) => {
  return (
    <button className={WaterDeliveryButtonStyle()}>
      <div className="flex items-center justify-center">
        <Image src={waterDeliveryImage} alt="Water Delivery" width={64} height={64} />
      </div>
      <div className="mt-2 text-center text-sky-800">{text}</div>
    </button>
  );
};

export default WaterDelivery;
