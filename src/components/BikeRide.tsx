import { cva } from 'class-variance-authority';
import Image from 'next/image';
import bikeRideImage from '../../public/Images/Icons/bike-ride.png';

const Style = cva('flex flex-col items-center justify-center bg-zinc-300 h-32 w-80 xs:w-32 py-4 px-4');

interface BikeRideProps {
  text: string; 
}

const BikeRide: React.FC<BikeRideProps> = ({ text}) => {
  return (
    <button className={Style()} >
      <div className="flex items-center justify-center">
        <Image src={bikeRideImage} alt="Bike Ride" width={64} height={64} />
      </div>
      <div className="mt-2 text-center text-sky-800">{text}</div>
    </button>
  );
};

export default BikeRide;
