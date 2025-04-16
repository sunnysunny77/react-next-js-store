"use client"
import { useEffect, useRef } from "react";
import { useAppContext } from "@/components/context";
import Cards from "@/components/cards";
import Header from "@/components/header";
import Paypal from "@/components/paypal";
import DynamicAccordian from "@/components/dynamic-accordian";
import Cta from "@/components/cta";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const Store = () => {

  const { checkCookie } = useAppContext();

  const navbarRef = useRef(null);

  const itemsRef = useRef(null);

  const storeRef = useRef(null);

  const mainRef = useRef(null);

  const footerRef = useRef(null);

  const heading = "STORE";

  useEffect(() => {

    checkCookie();
  }, [checkCookie]);

  return (

    <>

      <Navigation mainRef={mainRef} footerRef={footerRef} />

      <Header heading={heading} />

      <main className="d-flex flex-column" ref={mainRef}>

        <div ref={itemsRef}></div>

        <div className="container-fluid pt-4 mt-lg-4 pb-lg-5">

          <Cards

            heading={`Vestibulum eu`}
            cardsType={false}
            obj={storeRef}

          />

        </div>

        <div className="container-md g-0">

          <div className="row justify-content-center w-100 mt-5 px-3 px-md-0  g-0">

            <div className="col-10 col-sm-11 col-md-10">

              <DynamicAccordian

                content={[
                  {
                    heading: "Donec integer",
                    body: [
                      "Potenti magna porta ac sit lectus cubilia fringilla nulla tempor. Per libero eleifend sapien elementum pretium mauris felis eros amet.",
                      "Curabitur fermentum neque sagittis lacus commodo finibus dictum.",
                    ],
                  },
                  {
                    heading: "Felis aliquam malesuada",
                    body: [
                      "Scelerisque tortor placerat conubia eleifend luctus. Platea laoreet est scelerisque.",
                      "Maximus libero primis sapien quisque ultricies. Commodo ipsum tempor pellentesque ex pulvinar iaculis.",
                    ],
                  },
                  {
                    heading: "Aenean malesuada parturient",
                    body: [
                      "Primis lectus viverra pulvinar sit nullam nisl? Adipiscing mauris lacinia parturient ornare sagittis.",
                      "Consectetur diam pulvinar sagittis mus, orci laoreet. Donec sed ante, quis enim lectus semper.",
                      "Quisque habitasse neque fames rutrum dis tempus. Finibus platea neque sollicitudin; commodo taciti id eleifend. Orci nisl dui ex sociosqu facilisis ipsum maecenas.",
                    ],
                  },
                ]}

              />

            </div>

          </div>

        </div>

        <div ref={storeRef}></div>

        <Paypal />

        <div className="container-xl px-4 pb-5 px-sm-5 px-xl-0 mb-lg-5  pt-5 mt-lg-5 g-0">

          <Cta

            ctaType={false}

            heading={`Lobor Kenean`}

            bold={`Mollis dui`}

            paragraph={
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique tincidunt dui, vel
              rhoncus sapien congue non. Aenean lobortis lorem eu commodo consequat.`
            }

            button={`Vestibulum eu`}

            obj={itemsRef}

          />

        </div>

      </main>

      <div ref={footerRef}></div>

      <Footer obj={navbarRef} />

    </>

  );
};

export default Store;