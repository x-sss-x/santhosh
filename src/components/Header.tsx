import Image, { StaticImageData } from "next/image";
import logoIcon from "../../public/Images/Header/Logo.png";
import backIcon from "../../public/Images/Header/back.png";

interface HeaderProps {
  logo: StaticImageData;
}

export default function Header({ logo }: HeaderProps) {
  return (
    <div className="w-393 mx-0 h-118 bg-blue-500 flex items-center justify-between">
      <div className="py-4 px-4">
        <Image src={logoIcon} alt="Logo" width={157} height={118} />
      </div>
      <div className="mr-4">
        <Image src={backIcon} alt="Back Icon" width={24} height={24} />
      </div>
    </div>
  );
}
