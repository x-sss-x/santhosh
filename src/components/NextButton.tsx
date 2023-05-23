import React from "react";
import Image from "next/image";
import NextIcon from "../../public/Images/Icons/next-button.png"
interface NextButtonProps {
  onClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick }) => {
  return (
    <button
      className="w-28 h-24 xs:w-16 xs:h-12 bg-sky-800 rounded-full px-2 py-2 text-white flex items-center justify-center"
      onClick={onClick}
    >
        <Image src={NextIcon} alt="Custom Image" className="w-20 h-20 xs:w-12 xs:h-12" />
    </button>
  );
};

export default NextButton;
