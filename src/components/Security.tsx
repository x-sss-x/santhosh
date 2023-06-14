import { cva} from 'class-variance-authority';
import Image from 'next/image';
import securityImage from '../../public/Images/Icons/security.png';

const SecurityButtonStyle = cva('flex flex-col items-center justify-center bg-zinc-300 h-32 xs:w-32 w-80 xs:w-32 py-4 px-4');

interface SecurityProps {
  text: string;
}

const Security: React.FC<SecurityProps> = ({ text }) => {
  return (
    <button className={SecurityButtonStyle()}>
      <div className="flex items-center justify-center">
        <Image src={securityImage} alt="Security" width={64} height={64} />
      </div>
      <div className="mt-2 text-center text-sky-800">{text}</div>
    </button>
  );
};

export default Security;
