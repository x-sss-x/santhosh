import { cva} from 'class-variance-authority';
import Image from 'next/image';
import taxiRideImage from '../../public/Images/Icons/taxi-ride.png';

const TaxiRideButtonStyle = cva('flex flex-col items-center justify-center h-32 bg-zinc-300 xs:w-32 w-80 py-4 px-4');

interface TaxiRideProps {
  text: string;
}

const TaxiRide: React.FC<TaxiRideProps> = ({ text }) => {
  return (
    <button className={TaxiRideButtonStyle()}>
      <div className="flex items-center justify-center">
        <Image src={taxiRideImage} alt="Taxi Ride" width={64} height={64} />
      </div>
      <div className="mt-2 text-center text-sky-800">{text}</div>
    </button>
  );
};

export default TaxiRide;
