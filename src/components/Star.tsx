import { VariantProps, cva } from "class-variance-authority";
import Image,{StaticImageData} from "next/image";

export type StarProps = VariantProps<typeof starStyles>;

export const starStyles = cva("flex w-10 h-10 items-center", {
  variants: {
    size: {
      default: "w-6 h-6",
    },
  },
});

interface StarPropsExtended extends StarProps {
  rating: number;
  emptyStar: StaticImageData;
  fullStar: StaticImageData;
  halfStar: StaticImageData;
}

const Star = ({ rating, emptyStar, fullStar, halfStar, ...props }: StarPropsExtended): JSX.Element => {
  const renderStar = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <div key={`full-${i}`} className={starStyles()} {...props}>
          <Image src={fullStar} alt="Full Star" className="w-full h-full" />
        </div>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className={starStyles()} {...props}>
          <Image src={halfStar} alt="Half Star" className="w-full h-full" />
        </div>
      );
    }

    const remainingStars = 5 - stars.length;

    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <div key={`empty-${i}`} className={starStyles()} {...props}>
          <Image src={emptyStar} alt="Empty Star" className="w-full h-full" />
        </div>
      );
    }

    return stars;
  };

  return <div className="flex">{renderStar()}</div>;
};

export default Star;
