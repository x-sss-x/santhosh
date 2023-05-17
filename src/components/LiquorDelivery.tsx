import { cva } from 'class-variance-authority';
import Image from 'next/image';
import liquorDeliveryImage from '../../public/Images/Icons/liquor-delivery.png';

const LiquorDeliveryButtonStyle = cva('flex flex-col items-center justify-center bg-zinc-300 h-107 w-107 py-4 px-4');

interface LiquorDeliveryProps {
  text: string;
}

const LiquorDelivery: React.FC<LiquorDeliveryProps> = ({ text }) => {
  return (
    <button className={LiquorDeliveryButtonStyle()}>
      <div className="flex items-center justify-center">
        <Image src={liquorDeliveryImage} alt="Liquor Delivery" width={64} height={64} />
      </div>
      <div className="mt-2 text-center text-sky-800">{text}</div>
    </button>
  );
};

export default LiquorDelivery;
