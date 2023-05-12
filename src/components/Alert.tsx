import { VariantProps, cva } from "class-variance-authority";
<<<<<<< HEAD
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineExclamationCircle } from "react-icons/ai";
=======
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
>>>>>>> master

export type AlertProps = VariantProps<typeof AlertBoxStyle>;

export const AlertBoxStyle = cva(
  "flex items-center justify-center bg-white shadow-lg rounded-3xl py-2 w-fit px-3",
  {
    variants: {
<<<<<<< HEAD
      variant: {
=======
      varient: {
>>>>>>> master
        success: "border-2 bg-green-600  border-gray-400 text-black",
        error: "border-2 bg-red-600  border-gray-400 text-black",
        warning: "border-2  bg-blue-400  border-gray-400 text-black",
      },
    },
    defaultVariants: {
<<<<<<< HEAD
      variant: "success",
=======
      varient: "success",
>>>>>>> master
    },
  }
);

<<<<<<< HEAD
interface AlertExtendedProps extends AlertProps {
=======
interface ButtonExtendedProps extends AlertProps {
>>>>>>> master
  children: string;
}

export default function Alert({
  children,
<<<<<<< HEAD
  variant,
  ...props
}: AlertExtendedProps) {
  return (
    <div className={AlertBoxStyle({ variant })} {...props}>
      <div className="px-2 text-lg">
        {variant === "success" && <AiOutlineCheckCircle />}
        {variant === "warning" && <AiOutlineExclamationCircle />}
        {variant === "error" && <AiOutlineCloseCircle />}
=======
  varient,
  ...props
}: ButtonExtendedProps) {
  return (
    <div className={AlertBoxStyle({ varient })} {...props}>
      <div className="px-2 text-lg">
        {varient == "success" && <AiOutlineCheckCircle />}
        {varient == "warning" && <AiOutlineExclamationCircle />}
        {varient == "error" && <AiOutlineCloseCircle />}
>>>>>>> master
      </div>
      {children}
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> master
