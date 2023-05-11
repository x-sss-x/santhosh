import { VariantProps, cva } from "class-variance-authority";

export type ButtonProps = VariantProps<typeof buttonStyles>;

export const buttonStyles = cva("px-5 py-2 flex items-center justify-center text-lg shadow-sm rounded-xl", {
  variants: {
    intent: {
      primary:
        "bg-sky-600 text-black font-bold hover:bg-sky-800 hover:text-white transition-all duration-75 " ,
      disabled: "bg-gray-300 text-gray-900 hover:cursor-not-allowed",
      green:
        "bg-lime-800 text-white text-sm hover:bg-green-400 hover:text-black transition-all duration-75 font-medium",
      red:
        "bg-red-800 text-white text-sm hover:bg-red-400 hover:text-black transition-all duration-75 font-medium",
    },
    fullwidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export type ButtonExtendedProps = ButtonProps & {
  children: string;

};


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
