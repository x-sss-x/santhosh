import { VariantProps, cva } from "class-variance-authority";

export type ButtonProps = VariantProps<typeof buttonStyles>;

export const buttonStyles = cva("px-5 py-2 flex items-center justify-center text-lg shadow-sm rounded-xl", {
  variants: {
    intent: {
      primary:
        "bg-blue-500 text-black font-medium hover:bg-blue-800 hover:text-white transition-all duration-75 " ,
      disabled: "bg-gray-300 text-gray-900 hover:cursor-not-allowed",
      green:
        "bg-green-500 text-black hover:bg-green-800 hover:text-white transition-all duration-75 font-medium",
      red:
        "bg-red-500 text-black hover:bg-red-800 hover:text-white transition-all duration-75 font-medium",
    },
    fullwidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface ButtonExtendedProps extends ButtonProps {
  children: string;
}

export default function Button({
  intent,
  fullwidth,
  children,
  ...props
}: ButtonExtendedProps) {
  return (
    <button className={buttonStyles({ intent, fullwidth })} {...props}>
      {children}
    </button>
  );
}
