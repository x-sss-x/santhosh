import { VariantProps, cva } from "class-variance-authority";
import { AiOutlineCamera } from "react-icons/ai";

export type UploadPictureProps = VariantProps<typeof uploadPictureStyles>;

export const uploadPictureStyles = cva("flex items-center border border-blue-500 bg-stone-200 w-96 h-64 xs:w-64 xs:h-44", {
  variants: {
    size: {
      default: "",
    },
  },
});

interface UploadPictureExtendedProps extends UploadPictureProps {
  color?: string;
}

const UploadPicture = ({ color = "stone-200", ...props }: UploadPictureExtendedProps) => {
  return (
    <div className={uploadPictureStyles()}>
      <div className={`m-auto w-40 h-20 bg-${color} rounded-2xl border border-blue-500 flex items-center justify-center`}>
        <AiOutlineCamera className="text-black text-5xl" />
      </div>
    </div>
  );
};

export default UploadPicture;
