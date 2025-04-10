import type { Metadata } from "next";
import { AppWrapper, CartWrapper } from "@/components/context";
import localFont from "next/font/local";
import Bootstrap from "@/components/bootstrap";
import Navigation from "@/components/navigation";
import Header from "@/components/header";
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

        <Bootstrap />

          <AppWrapper>

            <Navigation />

            <Header />

            <main className="d-flex flex-column">

              <CartWrapper>

                {children}

              </CartWrapper>

            </main>

            <Footer />

          </AppWrapper>
        
      </body>

    </html>

  );
};

export default RootLayout;