import type { Metadata } from "next";
import { AppWrapper, CartWrapper } from "@/components/context";
import localFont from "next/font/local";
import Bootstrap from "@/components/bootstrap";
import Scroll from "@/components/scroll";
import "@/styles/app.scss";

const montserrat = localFont({
  display: "swap",
  variable: "--font-montserrat-regular",
  src: "../public/fonts/Montserrat-Regular.ttf",
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

      <body className={montserrat.variable}>

        <Bootstrap />

        <Scroll />

        <AppWrapper>

          <CartWrapper>

            {children}

          </CartWrapper>

        </AppWrapper>
        
      </body>

    </html>

  );
};

export default RootLayout;