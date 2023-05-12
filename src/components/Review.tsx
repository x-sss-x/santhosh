import Image, { StaticImageData } from "next/image";
import star from "../../public/Images/Review/star.png";

interface ReviewProps {
  icon: StaticImageData;
  name: string;
  id: string;
  date: string;
  rating: number;
  reviewText: string;
}

export default function Review({ icon, name, id, date, rating, reviewText }: ReviewProps) {
  return (
    <div className=" border border-blue-500 rounded-2xl w-360 h-230 bg-stone-200">
      <div className="flex justify-between px-4 py-2">
        <div className="flex items-center">
          <Image src={icon} alt="Review Icon" width={35} height={35} />
          <div className="mx-2">
            <p>{name}</p>
            <p>ID: {id}</p>
          </div>
        </div>
        <div>{date}</div>
      </div>
      <div className="flex mx-5">
        <h1 className="text-sky-800 text-xl mr-2">5.0</h1>
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-5 h-5">
            <Image
              src={star}
              alt="star"
              width={20}
              height={20}
              className={index < rating ? "opacity-100" : "opacity-50"}
            />
          </div>
        ))}
      </div>
      <div className="text-sm mx-5">{reviewText}</div>
    </div>
  );
}
