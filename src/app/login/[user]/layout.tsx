"use client"
import Header from "@/components/Header";
import Logo from "../../../../public/Images/Header/Logo.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div className="w-full">
        <Header logo={Logo} />
      {children}
    </div>
  );
}