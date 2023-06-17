import { cva } from 'class-variance-authority';
import Image from 'next/image';
import StartImage from '../../public/Images/Icons/happy.png';
import Button, { ButtonExtendedProps } from './Button';
import Link from 'next/link';

const StartingButtonStyle = cva(' flex flex-col items-center justify-center  bg-white w-screen h-screen py-5 px-5');

interface StartingProps {
  text: string;
}

const buttonProps: ButtonExtendedProps = {
  intent: 'primary',
 width:35,
};

const Starting: React.FC<Starting> = ({ text }) => {
  return (
 
   <div>
   <button className={StartingButtonStyle()}>
    <Image src={StartImage} alt="starting page" width={204} height={204} />
     <div className="flex items-center justify-center">
     <h1 className=" mt-2 text-center font-bold text-black">
      WE WORK TO MAKE YOU HAPPY
</h1>
      

      </div>
      <Link href="./Homepage/selectActor">
      <Button {...buttonProps}>Get started</Button>
      </Link>
  

      
    </button>
  
    </div>
  );
};

export default Starting;