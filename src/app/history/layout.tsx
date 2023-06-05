"use client"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className={"flex h-full w-full items-center justify-center"}>
      {children}
    </div>
  );
}