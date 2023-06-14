import { cva,} from 'class-variance-authority';
import Image from 'next/image';
import homeCleaningImage from '../../public/Images/Icons/home-cleaning.png';

const HomeCleaningButtonStyle = cva('flex flex-col items-center justify-center bg-zinc-300 xs:w-32 h-32 w-80 py-4 px-4');

interface HomeCleaningProps {
  text: string;
}

const HomeCleaning: React.FC<HomeCleaningProps> = ({ text }) => {
  return (
    <button className={HomeCleaningButtonStyle()}>
      <div className="flex items-center justify-center">
        <Image src={homeCleaningImage} alt="Home Cleaning" width={64} height={64} />
      </div>
      <div className="mt-2 text-center text-sky-800">{text}</div>
    </button>
  );
};

export default HomeCleaning;
