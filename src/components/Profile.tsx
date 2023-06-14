import { VariantProps, cva } from "class-variance-authority";
import Image, { StaticImageData } from "next/image";

export type ProfileProps = VariantProps<typeof profileStyles>;

export const profileStyles = cva("mx-auto flex items-center w-96 h-28 xs:w-64 xs:h-20 bg-zinc-300 rounded-xl", {
  variants: {
    size: {
      default: "w-96 h-12",
    },
  },
});

interface ProfileExtendedProps extends ProfileProps {
  imageSrc: StaticImageData;
  text: string;
  id_no: number;
  onClick: () => void; 
}

const Profile = ({ imageSrc, text,id_no, ...props }: ProfileExtendedProps) => {
  return (
    <div className={profileStyles()}>
      <div className="w-76 h-76 py-2 px-2">
        <Image src={imageSrc} alt="Profile Image" className=" w-24 h-24 xs:w-16 xs:h-16" />
      </div>
      <div>
        <p className="text-center ml-8 text-gray-600 bold">{text} </p>
        <p className="text-center ml-8 text-gray-500">{id_no}</p>
      </div>
    </div>
   
  );
};

export default Profile;
