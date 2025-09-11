"use client"
import {useRef} from "react";
import {useSubContext} from "@/components/context";
import Cards from "@/components/cards";
import Header from "@/components/header";
import Paypal from "@/components/paypal";
import DynamicAccordian from "@/components/dynamic-accordian";
import Cta from "@/components/cta";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";

const Store = () => {

  const {obsLoad, setImages, fieldsLoad, fields} = useSubContext();

  const navbarRef = useRef(null);

  const storeRef = useRef(null);

  const itemsRef = useRef(null);

  const mainRef = useRef(null);

  const footerRef = useRef(null);

  const imageLoader = ({src, width}) => {

    return `${src}?w=${width}`;
  };

  if (!fieldsLoad) return;

  if (!obsLoad) {

    return (

      <>

        {fields.options?.logo ? <Image priority onLoad={() => setImages(prevImages => ({ ...prevImages, navigation: true }))} onError={() => setImages(prevImages => ({ ...prevImages, navigation: true }))} className="d-flex hidden" src={fields.options?.logo} loader={imageLoader} alt={`${fields.options?.logo_alt}`} width="50" height="50"/> : null}

      </>

    );

  };

  return (

    <>

      <div ref={navbarRef}></div>

      <Navigation mainRef={mainRef} footerRef={footerRef} />

      <Header heading={fields.cart?.title}/>

      <main className="d-flex flex-column" ref={mainRef}>

        <div ref={itemsRef}></div>

        <div className="container-fluid pt-4 mt-lg-4 pb-lg-5">

          <Cards

            heading={fields.cart?.post_items_heading}
            cardsType={false}
            storeRef={storeRef}

          />

        </div>

        <div className="container-md scrolled-init up g-0">

          <div className="row justify-content-center w-100 mt-5 px-3 px-md-0  g-0">

            <div className="col-10 col-sm-11 col-md-10">

              <DynamicAccordian

                content={[
                  {
                    heading: fields.cart?.first_accordian_heading,
                    body: [
                      fields.cart?.first_accordian_first_row,
                      fields.cart?.first_accordian_second_row,
                      fields.cart?.first_accordian_third_row,
                    ],
                  },
                  {
                    heading: fields.cart?.second_accordian_heading,
                    body: [
                      fields.cart?.second_accordian_first_row,
                      fields.cart?.second_accordian_second_row,
                      fields.cart?.second_accordian_third_row,
                    ],
                  },
                  {
                    heading: fields.cart?.third_accordian_heading,
                    body: [
                      fields.cart?.third_accordian_first_row,
                      fields.cart?.third_accordian_second_row,
                      fields.cart?.third_accordian_third_row,
                    ],
                  },
                ]}

              />

            </div>

          </div>

        </div>

        <div ref={storeRef}></div>

        <Paypal/>

        <div className="container-xl scrolled-init up px-4 pb-5 px-sm-5 px-xl-0 mb-lg-5 pt-5 mt-lg-5 g-0">

          <Cta

            ctaType={false}
            heading={fields.cart?.cta_heading}
            bold={fields.cart?.cta_bold}
            paragraph={fields.cart?.cta_paragraph}
            button={fields.cart?.cta_button}
            itemsRef={itemsRef}

          />

        </div>

      </main>

      <div ref={footerRef}></div>

      <Footer/>

    </>

  );
};

export default Store;