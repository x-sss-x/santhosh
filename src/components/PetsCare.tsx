import { cva } from 'class-variance-authority';
import Image from 'next/image';
import petsCareImage from '../../public/Images/Icons/pet-care.png';

const PetsCareButtonStyle = cva('flex flex-col items-center justify-center bg-zinc-300 h-107 w-107 py-4 px-4');

interface PetsCareProps {
  text: string;
}

const PetsCare: React.FC<PetsCareProps> = ({ text }) => {
  return (
    <button className={PetsCareButtonStyle()}>
      <div className="flex items-center justify-center">
        <Image src={petsCareImage} alt="Pets Care" width={64} height={64} />
      </div>
      <div className="mt-2 text-center text-sky-800">{text}</div>
    </button>
  );
};

export default PetsCare;
