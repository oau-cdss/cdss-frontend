import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "../context/sessionContext";
//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CDSS",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className="">
     
      <SessionProvider>

      <div className="">
        <div className="">
        {children}
      
        </div>
      </div>
      </SessionProvider>
     
        </body>
    </html>
  );
}
