import Image, { StaticImageData } from "next/image";
import starFilled from "../../public/Images/Review/star-filled.png";
import starHalfFilled from "../../public/Images/Review/star-half-filled.png";
import starEmpty from "../../public/Images/Review/star-empty.png";

interface ReviewProps {
  icon: StaticImageData;
  name: string;
  id: string;
  date: string;
  rating: number;
  reviewText: string;
}

export default function Review({ icon, name, id, date, rating, reviewText }: ReviewProps) {
  const renderStar = (index: number) => {
    const starIndex = index + 1;
    if (starIndex <= rating) {
      return <Image src={starFilled} alt="Filled Star" width={35} height={35} />;
    } else if (starIndex === Math.ceil(rating) && rating % 1 !== 0) {
      return <Image src={starHalfFilled} alt="Half-filled Star" width={35} height={35} />;
    } else {
      return <Image src={starEmpty} alt="Empty Star" width={35} height={35} />;
    }
  };

  return (
    <div className="border border-blue-500 rounded-2xl w-360 h-230 bg-stone-200">
      <div className="flex justify-between px-4 py-2">
        <div className="flex items-center">
          <Image src={icon} alt="Review Icon" width={20} height={20} />
          <div className="mx-2">
            <p>{name}</p>
            <p>ID: {id}</p>
          </div>
        </div>
        <div>{date}</div>
      </div>
      <div className="flex mx-5">
        <h1 className="text-sky-800 text-xl mr-2">{rating}</h1>
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-5 h-5">
            {renderStar(index)}
          </div>
        ))}
      </div>
      <div className="text-sm mx-5">{reviewText}</div>
    </div>
  );
}
