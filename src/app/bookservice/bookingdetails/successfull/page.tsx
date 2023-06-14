import SuccessTick from "../../../../../public/Images/SuccessMessage/Tick.png"
import Image from "next/image"
import React from "react";
import Button from "@/components/Button";
const SuccessMessage=()=>{
    return(
        <div className="m-10">
            <Image src={SuccessTick} alt="Successfull" className="mx-auto my-4"></Image>
            <h1 className="font-bold text-center text-2xl">Hired Successfully</h1>
            <div className="m-4">
            <Button>Continue</Button>
            </div>

        </div>
    )
}
export default SuccessMessage;