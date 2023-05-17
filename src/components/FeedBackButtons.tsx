import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="w-500 h-377 bg-stone-200 border-sky-600 border-2 rounded-xl font-bold text-neutral-400 p-3">
      {text}
    </button>
  );
};

export default Button;
