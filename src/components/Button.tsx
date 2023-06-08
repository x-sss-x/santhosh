import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

export type ButtonProps = VariantProps<typeof buttonStyles>;

export const buttonStyles = cva(
  'w-96 xs:w-48 px-5 py-2 flex items-center justify-center sm:text-lg md:text-xl lg:text-xl font-bold shadow-sm rounded-xl mx-auto',
  {
    variants: {
      intent: {
        primary:
          'bg-sky-600 text-black font-bold hover:bg-sky-800 hover:text-white transition-all duration-75 ',
        disabled: 'bg-gray-300 text-gray-900 hover:cursor-not-allowed',
        green:
          'bg-lime-800 text-white hover:bg-green-400 hover:text-black transition-all duration-75 ',
        red:
          'bg-red-800 text-white hover:bg-red-400 hover:text-black transition-all duration-75 ',
          feedback:
          'bg-stone-200 border-sky-600 border-2 rounded-xl font-bold text-neutral-400 p-3',

      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

export type ButtonExtendedProps = ButtonProps & {
  children: string;
};

export default function Button({
  intent,
  children,
  ...props
}: ButtonExtendedProps) {
  return (
    <button className={buttonStyles({ intent})} {...props}>
      {children}
    </button>
  );
}
