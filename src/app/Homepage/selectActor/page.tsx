import React from "react";
import Button from "@/components/Button";
import Background from "../../../../public/Images/Icons/BackGround.png";
import Image from "next/image";
import Link from "next/link";

const SelectOne = () => {
  return (
    <div style={{ position: "relative" }}>
      <Image src={Background} alt="background image" className="w-screen h-screen" />
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Link href="../login/serviceprovider"> {/* add link to login*/}
        <Button>Service Provider</Button>
        </Link>
        
      </div>
      <div style={{ position: "absolute", top: "35%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <h2 className="text-2xl font-bold">or</h2>
        <hr style={{ border: "none", borderTop: "2px solid #000" }} />
      </div>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      <Link href="../login/customer"> {/* add link to login*/}
        <Button>Customer</Button>
        </Link>
      </div>
    </div>
  );
};

export default SelectOne;
