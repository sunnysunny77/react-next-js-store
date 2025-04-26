import type {Metadata} from "next";
import {AppWrapper, SubWrapper} from "@/components/context";
import localFont from "next/font/local";
import "@/styles/app.scss";
import Init from "@/lib/init";

//csp for build in production
export const dynamic = "force-dynamic";

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

    <html data-overlayscrollbars-initialize lang="en">

      <body data-overlayscrollbars-initialize className={`${montserrat.variable}`}>

        <AppWrapper>

          <SubWrapper>

            {children}

          </SubWrapper>

        </AppWrapper>
        
      </body>

      <Init/>

    </html>

  );
};

export default RootLayout;