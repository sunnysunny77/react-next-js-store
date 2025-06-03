"use client"
import {useRef} from "react";
import {useAppContext, useSubContext} from "@/components/context";
import CarouselSlider from "@/components/carousel-slider";
import Cards from "@/components/cards";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import TwoColText from "@/components/two-col-text";
import TwoColCurve from "@/components/two-col-curve";
import TwoRowFeature from "@/components/two-row-feature";
import TwoColImage from "@/components/two-col-image";
import Slider from "@/components/slider";
import OneColLarge from "@/components/one-col-large";
import ButtonSlider from "@/components/button-slider";
import Cta from "@/components/cta";
import Enquiry from "@/components/enquiry";
import Link from "next/link";
import Image from "next/image";

const Home = () => {

  const {auth} = useAppContext();

  const {fieldsLoad, setFieldsLoad, fields} = useSubContext();

  const navbarRef = useRef(null);

  const mainRef = useRef(null);

  const footerRef = useRef(null);

  const imageLoader = ({src, width}) => {

    return `${src}?w=${width}`;
  };

  if (!fieldsLoad.fields) return;

  if (!fieldsLoad.navigation || !fieldsLoad.slider) return (

      <div className="hidden">

        <Image onLoad={()=>{setFieldsLoad(prevState => ({...prevState, navigation: true}))}} loader={imageLoader} src={fields.options?.logo} alt={`${fields.options?.logo_alt}`} width="50" height="50"/>

        <Image onLoad={()=>{setFieldsLoad(prevState => ({...prevState, slider: true}));}} loader={imageLoader} src={fields.front?.header_first_carousel} alt={`${fields.front?.header_first_carousel_alt}`} width="150" height="150"/>

      </div>
  );

  return (

    <>

      <div ref={navbarRef}></div>

      <Navigation mainRef={mainRef} footerRef={footerRef}/>

      <Header heading={fields.front?.title}>

        <div className="col-12 bg-11 scrolled-init up p-4 p-sm-5 ps-md-5 pt-md-5 pb-md-5 pe-md-0 pe-xl-5">

          <div className="row align-items-center justify-content-between g-0">

            <div className="col-12 col-md-7 col-xl-5">

              <p className="p-4 p-xxl-5">

                <span className="d-flex row align-items-center justify-content-between g-0">

                  <span className="col-11 col-lg-9 p-2 ps-sm-0">

                    {fields.front?.header_paragraph}

                  </span>

                  <Link scroll={false} href={auth ? "/store" : "/authentication"} className="col-auto align-self-lg-end border rounded mt-4 mb-3 px-2 py-1">

                    {fields.options?.cart_page}

                  </Link>

                </span>

              </p>

            </div>

            <CarouselSlider>

              <div className="carousel-inner">

                <div className="carousel-item active">

                  <Image loader={imageLoader} className="d-block w-100" src={fields.front?.header_first_carousel} alt={`${fields.front?.header_first_carousel_alt}`} width="150" height="150"/>

                </div>

                <div className="carousel-item">

                  <Image loader={imageLoader} className="d-block w-100" src={fields.front?.header_second_carousel} alt={`${fields.front?.header_second_carousel_alt}`} width="150" height="120"/>

                </div>

                <div className="carousel-item">

                  <Image loader={imageLoader} className="d-block w-100" src={fields.front?.header_third_carousel} alt={`${fields.front?.header_third_carousel_alt}`} width="150" height="150"/>

                </div>

              </div>

            </CarouselSlider>

          </div>

        </div>

      </Header>

      <main className="d-flex flex-column" ref={mainRef}>

        <TwoColText

          heading={fields.front?.introduction_heading}
          paragraph={fields.front?.introduction_paragraph}

        />

        <TwoColCurve

          heading={fields.front?.sub_introduction_heading}
          paragraph={fields.front?.sub_introduction_paragraph}

        >

         {fields.front?.sub_introduction_image ? <Image src={fields.front?.sub_introduction_image} loader={imageLoader} alt={`${fields.front?.sub_introduction_image_alt}`}  width="920" height="839"/> : null}

        </TwoColCurve>

        <TwoRowFeature

          heading_top={fields.front?.table_feature_heading}
          heading_bottom={fields.front?.table_feature_sub_heading}
          paragraph={fields.front?.table_feature_paragraph}
          table={[
            {
              heading: fields.front?.table_feature_firstColumn_heading,
              content: [
                {
                  item: fields.front?.table_feature_firstColumn_firstRow,
                },
                {
                  item: fields.front?.table_feature_firstColumn_secondRow,
                },
                {
                  item: fields.front?.table_feature_firstColumn_thirdRow,
                },
                {
                  item: fields.front?.table_feature_firstColumn_fourthRow,
                },
              ]
            },
            {
              heading: fields.front?.table_feature_secondColumn_heading,
              content: [
                {
                  item: fields.front?.table_feature_secondColumn_firstRow,
                },
                {
                  item: fields.front?.table_feature_secondColumn_secondRow,
                },
                {
                  item: fields.front?.table_feature_secondColumn_thirdRow,
                },
                {
                  item: fields.front?.table_feature_secondColumn_fourthRow,
                },
              ]
            },
            {
              heading: fields.front?.table_feature_thirdColumn_heading,
              content: [
                {
                  item: fields.front?.table_feature_thirdColumn_firstRow,
                },
                {
                  item: fields.front?.table_feature_thirdColumn_secondRow,
                },
                {
                  item: fields.front?.table_feature_thirdColumn_thirdRow,
                },
                {
                  item: fields.front?.table_feature_thirdColumn_fourthRow,
                },
              ]
            },
          ]}
          tags={[
              {
                super_tag: fields.front?.table_feature_firstTag_super_tag,
                sub_tag:  fields.front?.table_feature_firstTag_sub_tag,
              },
              {
                super_tag: fields.front?.table_feature_secondTag_super_tag,
                sub_tag:  fields.front?.table_feature_secondTag_sub_tag,
              },
              {
                super_tag: fields.front?.table_feature_thirdTag_super_tag,
                sub_tag:  fields.front?.table_feature_thirdTag_sub_tag,
              },
          ]}

        >

          {fields.front?.table_feature_image ? <Image className="scrolled-init left" src={fields.front?.table_feature_image} loader={imageLoader} alt={`${fields.front?.table_feature_image_alt}`} width="400" height="400"/> : null}

        </TwoRowFeature>

        <Slider

          paragraph={fields.front?.slider_paragraph}

        >

          {fields.front?.slider_first_image? <Image className="has-current counters" src={fields.front?.slider_first_image} loader={imageLoader} alt={`${fields.front?.slider_first_image_alt}`} width="847" height="565"/> : null}

          {fields.front?.slider_second_image? <Image className="counters" src={fields.front?.slider_second_image} loader={imageLoader} alt={`${fields.front?.slider_second_image_alt}`} width="847" height="565"/> : null}

          {fields.front?.slider_third_image? <Image className="counters" src={fields.front?.slider_third_image} loader={imageLoader} alt={`${fields.front?.slider_third_image_alt}`} width="847" height="565"/> : null}

        </Slider>

        <TwoColImage

          heading={fields.front?.feature_image_heading}
          paragraph={fields.front?.feature_image_paragraph}

        >

          {fields.front?.feature_image_image? <Image className="counters" src={fields.front?.feature_image_image} loader={imageLoader} alt={`${fields.front?.feature_image_image_alt}`} width="929" height="619"/> : null}

        </TwoColImage>

        <OneColLarge

          heading={fields.front?.sub_feature_image_heading}
          paragraph={fields.front?.sub_feature_image_sub_heading}
          bold={fields.front?.sub_feature_image_bold}

        >

          {fields.front?.sub_feature_image_image? <Image className="scrolled-init up" src={fields.front?.sub_feature_image_image} loader={imageLoader} alt={`${fields.front?.sub_feature_image_image_alt}`} width="150" height="150"/> : null}

        </OneColLarge>

        <div className="container-fluid pt-5 mb-5 mb-5 mt-lg-5">

          <Cards

            heading={fields.front?.post_items_heading}
            cardsType={true}

          />

        </div>

        <ButtonSlider

          items={fields.slider}

        />

        <div className="container-xl scrolled-init up py-5 px-sm-5 px-xl-0 my-lg-5 g-0">

          <Cta

            ctaType={true}

            heading={fields.front?.cta_heading}

            paragraph={fields.front?.cta_paragraph}

            button={fields.front?.cta_button}

          />

        </div>

        <Enquiry

          heading={fields.front?.form_heading}
          paragraph={fields.front?.form_paragraph}
          button={fields.front?.form_button}

        />

      </main>

      <div ref={footerRef}></div>

      <Footer/>

    </>

  );
};

export default Home;