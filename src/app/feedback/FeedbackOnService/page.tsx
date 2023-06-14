import Button from "@/components/Button";
import Link from "next/link";

const Rating = () => {
  return (
    <div>
      <div className="my-8">
      <Link href="./feedback/FeedbackOnService/RateYourExperience">
        <Button intent="feedback"> Rate Your Experience</Button>
        </Link>
      </div>
      <div className="my-8">
        <Link href="./feedback/FeedbackOnService/describeYourExperience">
        <Button intent="feedback"> Describe your Experience</Button>
        </Link>
        
       
      </div>
    </div>
  );
};

export default Rating;
