import { cva } from 'class-variance-authority';
import Image from 'next/image';
import lockImage from '../../public/Images/Icons/lock.png';
import Button, { ButtonExtendedProps } from './Button';
import Input from './Input';
const ForgotButtonStyle = cva(' flex flex-col items-center justify-center bg-white h-screen w-screen py-4 px-4');

interface ForgotProps {
  text: string;
}
const buttonProps: ButtonExtendedProps = {
  intent: 'primary',
 width:35,
};

const Forgot: React.FC<ForgotProps> = ({ text }) => {
  return (
    <center>
   
     <div className="flex items-center justify-center">
     

        
      </div>
      <h1 className=" mt-2 text-center font-bold text-black">
             
      Forgot password?
                   
                               </h1>
      <Image src={lockImage} alt="lock image" width={104} height={104} />
      <h1 className=" mt-2 text-center font-light text-black">
             
        No worries, we'll send you a reset instructions
                   
                               </h1>
                               <h1 className=" mt-2  font-bold text-black">
                             Email
                             </h1>
                               <Input inputVariant="email" placeholder="Enter your email" />
                            
                               <div className='mx-auto mt-5'>
              <Button>Reset password</Button>

            </div>
   
    </center>
  );
};

export default Forgot;