import { cva} from 'class-variance-authority';
import Image from 'next/image';
import medicineDeliveryImage from '../../public/Images/Icons/medicine-delivery.png';

const MedicineDeliveryButtonStyle = cva('flex flex-col items-center justify-center bg-zinc-300 h-107 w-107 py-4 px-4');

interface MedicineDeliveryProps {
  text: string;
}

const MedicineDelivery: React.FC<MedicineDeliveryProps> = ({ text }) => {
  return (
    <button className={MedicineDeliveryButtonStyle()}>
      <div className="flex items-center justify-center">
        <Image src={medicineDeliveryImage} alt="Medicine Delivery" width={64} height={64} />
      </div>
      <div className="mt-2 text-center text-sky-800">{text}</div>
    </button>
  );
};

export default MedicineDelivery;
