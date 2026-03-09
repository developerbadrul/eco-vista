import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { LocationProvider } from "@/providers/LocationProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eco Vista",
  description: "Weather Condition",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        {/* <LocationProvider> */}
          {children}
        {/* </LocationProvider> */}
      </body>
    </html>
  );
}
