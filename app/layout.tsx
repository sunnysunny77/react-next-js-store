import type { Metadata } from "next";
import localFont from 'next/font/local'
import Bootstrap from "@/components/bootstrap";
import Footer from "@/components/footer";
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

const RootLayout = ({
  children,
}: {
  children: React.ReactNode,
}) => {

  return (

    <html lang="en">

      <body className={poppins.variable}>

        <main>
          
          {children}

        </main>

        <Footer />
        
      </body>

      <Bootstrap />

    </html>

  );
};

export default RootLayout;