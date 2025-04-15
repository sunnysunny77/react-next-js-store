import type { Metadata } from "next";
import { AppWrapper, CartWrapper } from "@/components/context";
import localFont from "next/font/local";
import Register from "@/lib/register";
import "@/styles/app.scss";

//csp for build in production
export const dynamic = 'force-dynamic';

const montserrat = localFont({
  display: "swap",
  variable: "--font-montserrat-regular",
  src: "../public/fonts/Montserrat-Regular.ttf",
});

export const metadata: Metadata = {
  title: "Store App",
  description: "Store App",
  icons: {
    icon: ["images/favicon.ico"],
    apple: ["images/apple-icon.png"],
  },
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode,
}) => {

  return (

    <html lang="en">

      <Register />

      <body className={montserrat.variable}>

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