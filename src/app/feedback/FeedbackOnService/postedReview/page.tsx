import FemalePhoto from "../../../../../public/Images/Review/Female.png";
import Image from "next/image";
import Star from "@/components/Star";
import emptyStarImage from "../../../../../public/Images/Review/star-empty.png";
import fullStarImage from "../../../../../public/Images/Review/star-filled.png";
import halfStarImage from "../../../../../public/Images/Review/star-half-filled.png";
import Button from "@/components/Button";
import Link from "next/link";

var PostedReview = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src={FemalePhoto} alt="female" className="my-3 w-80 h-60" />
      <div className="my-3">
        <Star
          rating={5}
          emptyStar={emptyStarImage}
          fullStar={fullStarImage}
          halfStar={halfStarImage}
        />
      </div>

      <p className="text-left ml-10 text-sm">
        Amazing ride!!!! We rented one avenger and one impulse .... both the{" "}
        <br />
        bikes were in good condition....had an awsome experience in <br />
        jaisalmer.....just little bit expensive...but ....ride to sandunes will{" "}
        <br />
        not make u feel that u have made a wrong choice coming on bikes....shiva{" "}
        <br />
        bikes also provides help if u needed in between the way... .overall{" "}
        <br />
        wonderful experience....bike ride to sandunes is must.. <br />
      </p>
      <div className="my-5">
        <Link href="./feedback/FeedbackOnService/successfull">
          {" "}
          <Button>Submit</Button>
        </Link>
      </div>
    </div>
  );
};

export default PostedReview;
