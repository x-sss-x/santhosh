import React from 'react'


const Button = ({ children }) => {
  return (
    <button className="bg-0F87C7 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
      {children}
    </button>
  );
};

export default Button;
