import React from "react";
import LogoIcon from "../../public/Images/Header/Logo.png";
import Header from "./Header";
import Input from "./Input";
export default function EditProfile(){
    return(
        <div>
            <Header logo={LogoIcon} />
            <Input inputVariant="email" placeholder="email@gmail.com" />
        </div>
    )
};

