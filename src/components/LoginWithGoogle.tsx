import React from "react";
import Image from "next/image";

import GoogleLogo from "../../public/Images/Icons/google-icon.png";

const LoginWithGoogle = () => {
  const handleLogin = () => {
    // Implement your login with Google logic here
    console.log("Login with Google");
  };

  return (
    <button className=" w-64 xs:w-56 xs:text-sm bg-neutral-200 text-black font-bold py-2 px-6 border border-black hover:bg-neutral-400 rounded-xl flex items-center mx-auto">
      <div className="mr-2">
        <Image src={GoogleLogo} alt="Google Logo" width={24} height={24} />
      </div>
      Login with Google
    </button>
  );
};

export default LoginWithGoogle;
