import "./globals.css";
import Providers from "./Provider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-[100vw] h-[100vh]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}