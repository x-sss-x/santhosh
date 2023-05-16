import { cva } from 'class-variance-authority';
import Image from 'next/image';
import courierServiceImage from '../../public/Images/Icons/courier-service.png';

const CourierServiceButtonStyle = cva('flex flex-col items-center justify-center bg-zinc-300 h-107 w-107 py-4 px-4');

interface CourierServiceProps {
  text: string;
}

const CourierService: React.FC<CourierServiceProps> = ({ text }) => {
  return (
    <button className={CourierServiceButtonStyle()}>
      <div className="flex items-center justify-center">
        <Image src={courierServiceImage} alt="Courier Service" width={64} height={64} />
      </div>
      <div className="mt-2 text-center text-sky-800">{text}</div>
    </button>
  );
};

export default CourierService;
