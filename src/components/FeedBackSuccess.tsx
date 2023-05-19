import { VariantProps, cva } from "class-variance-authority";
import { RiCheckboxCircleFill } from "react-icons/ri";

export type FeedBackSuccessProps = VariantProps<typeof feedbackSuccessStyles>;

export const feedbackSuccessStyles = cva("flex flex-col w-1/2 h-60 xs:w-64 items-center rounded-xl justify-center bg-zinc-500", {
  variants: {
    size: {
      default: "",
    },
  },
});

interface FeedBackSuccessPropsExtended extends FeedBackSuccessProps {
  successText: string;
  descriptionText: string;
}

const FeedBackSuccess = ({ successText, descriptionText, ...props }: FeedBackSuccessPropsExtended): JSX.Element => {
  return (
    <div className={feedbackSuccessStyles()} {...props}>
      <div className="flex items-start">
        <RiCheckboxCircleFill className="text-black text-6xl" />
      </div>
      <div>
        <p className="text-2xl xs:text-lg text-center text-black font-semibold">{successText}</p>
        <p className="text-sm text-center text-gray-200">{descriptionText}</p>
      </div>
    </div>
  );
};

export default FeedBackSuccess;
