import Image from "next/image";
import Button from "@/components/Button";
import successImage from "../../../../public/Images/SuccessMessage/image 5.png";

const SuccessMessage = () => {
  return (
    <div>
      <Image
        src={successImage}
        className="w-50 h-50"
        alt="Successful"
      />
      <h3>Logged in Successfully</h3>
      <Button>Continue</Button>
    </div>
  );
};

export default SuccessMessage;
