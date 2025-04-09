import Bootstrap from "@/components/bootstrap";
import localFont from 'next/font/local'
import type { Metadata } from "next";
import "@/styles/app.scss";

const poppins = localFont({
  display: "swap",
  variable: "--font-montserrat-regular",
  src: "/styles/fonts/Montserrat-Regular.ttf",
})

export const metadata: Metadata = {
  title: "Store App",
  description: "Store App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (

    <html lang="en">

      <body className={poppins.variable}>

        <main>
          
          {children}

        </main>
        
      </body>

      <Bootstrap />

    </html>

  );
};