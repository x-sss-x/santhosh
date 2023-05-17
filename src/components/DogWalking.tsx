import { cva} from 'class-variance-authority';
import Image from 'next/image';
import dogWalkingImage from '../../public/Images/Icons/dog-walking.png';

const DogWalkingButtonStyle = cva('flex flex-col items-center justify-center bg-zinc-300 h-107 w-107 py-4 px-4');

interface DogWalkingProps {
  text: string;
}

const DogWalking: React.FC<DogWalkingProps> = ({ text }) => {
  return (
    <button className={DogWalkingButtonStyle()}>
      <div className="flex items-center justify-center">
        <Image src={dogWalkingImage} alt="Dog Walking" width={64} height={64} />
      </div>
      <div className="mt-2 text-center text-sky-800">{text}</div>
    </button>
  );
};

export default DogWalking;
