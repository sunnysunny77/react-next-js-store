"use client"
import { useAppContext } from "@/components/context";
import Carousel from "@/components/carousel";
import Cards from "@/components/cards";
import Header from "@/components/header";
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
import Store from "@/images/store.webp";
import Lemons from "@/images/lemons.webp";
import Vegies from "@/images/vegies.webp";
import Greens from "@/images/greens.webp";
import Platter from "@/images/platter.webp";
import Roast from "@/images/roast.webp";
import Aus from "@/images/australian-made.svg";

const Home = () => {

  const { mainRef } = useAppContext();

  const heading = "HOME";

  const children = (

    <div className="col-12 bg-11 p-4 p-sm-5 ps-md-5 pt-md-5 pb-md-5 pe-md-0 pe-xl-5">

      <div className="row align-items-center justify-content-between g-0">

        <div className="col-12 col-md-7 col-xl-5">

          <p className="p-4 p-xxl-5">

            <span className="d-flex row align-items-center justify-content-between g-0">

              <span className="col-11 col-lg-9 p-2 ps-sm-0">

                Ut enim ad ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.

              </span>

              <Link scroll={false} href="/store" className="col-auto align-self-lg-end border rounded mt-4 mb-3 px-2 py-1">

                store

              </Link>

            </span>

          </p>

        </div>

        <Carousel />

      </div>

    </div>
  );

  return (

    <>

      <Header heading={heading}>

        {children}

      </Header>

      <main ref={mainRef}>

        <TwoColText

          heading={
            `Lorem
            ipsum dolor`
          }

          paragraph={
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique tincidunt dui, vel rhoncus sapien congue non. Aenean lobortis lorem eu commodo consequat. Etiam scelerisque mollis dui at suscipit. Donec ac diam rhoncus, porta velit at, faucibus velit.

            Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris iaculis varius lectus auctor pharetra. Cras risus odio, dignissim et viverra non, aliquam eget ligula. Maecenas convallis eget felis sit amet commodo.

            Integer euilgod eros ex, id posuere lorem aliquam eget. Lorem ipsum dolor sit amet.`
          }

        />

        <TwoColCurve

          heading={`Adipiscing elit`}

          paragraph={
            `Fusce vulputate eleifend lacus ut pharetra, integer eleifend ligula at tortor hendrerit, sed consectetur magna gravida sed purus nisl.

            Posuere eget nunc non interdum laoreet dui maecenas lobortis gravida magna auctor venenatis, nunc sit amet massa hendrerit lobortis purus in iaculis augue.

            Etiam tincidunt ex eget felis rhoncus, eget tristique metus rutrum.`
          }

        >

          <Image src={Store} alt="store"  width="920" height="839" />

        </TwoColCurve>

        <TwoRowFeature

          heading_top={`Lorem Ipsum id posuere lorem aliquam eget. Lorem ipsum dolor sit amet.`}
          heading_bottom={`Consectetur adipiscing elit.`}
          paragraph={
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu gravida velit. Vestibulum eu posuere
            elit. Cras bibendum velit dui, eget tincidunt lectus eleifend eu. Mauris et dolor magna. In accumsan
            scelerisque lorem nec rutrum. Phasellus et turpis posuere.`
          }
          items={[
            {
              heading: "Eu suscipit",
              content: [
                {
                  item: "himenaeos consequat",
                },
                {
                  item: "latea bibendum",
                },
                {
                  item: "finibus lacinia lacus",
                },
                {
                  item: "convallis inceptos placerat",
                },
              ]
            },
            {
              heading: "Nunc proin",
              content: [
                {
                  item: "aliquet augue",
                },
                {
                  item: "nec libero euismod",
                },
                {
                  item: "curae mollis",
                },
              ]
            },
            {
              heading: "Convallis nec",
              content: [
                {
                  item: "rhoncus tellus habitant",
                },
                {
                  item: "fames eleifend finibus",
                },
                {
                  item: "Nunc lobortis turpis",
                },
              ]
            },
          ]}

        >

          <Image src={Lemons} alt="lemons" width="400" height="400" />

        </TwoRowFeature>

        <Slider

          paragraph={
            `Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris iaculis varius lectus auctor pharetra. Cras risus odio, dignissim et viverra non, aliquam eget ligula. Maecenas convallis eget felis sit amet commodo.

            Integer euilgod eros ex, id posuere lorem aliquam eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique tincidunt dui, vel rhoncus sapien congue non.`
          }

        >

          <Image className="has-current counters" src={Vegies} width="847" height="565" alt="Vegies" />

          <Image className="counters" src={Greens} width="847" height="565" alt="Greens" />

          <Image className="counters" src={Platter} width="847" height="565" alt="Platter" />

        </Slider>

        <TwoColImage

          heading={`Lorem ipsum`}

          paragraph={
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu gravida velit. Vestibulum eu posuere
            elit. Cras bibendum velit dui, eget tincidunt lectus eleifend eu. Mauris et dolor magna. In accumsan
            scelerisque lorem nec rutrum. Phasellus et turpis posuere.`
          }

        >

          <Image src={Roast} alt="Roast" width="929" height="619"/>

        </TwoColImage>

        <OneColLarge

          heading={`Lorem Ipsum`}
          paragraph={`Ut enim ad ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.`}
          bold={`Ut enim ad minim veniam quis nostrud exercitation.`}

        >

          <Image src={Aus} alt="Australian Made" width="150" height="150" />

        </OneColLarge>

        <div className="container-fluid pt-5 mb-5 mb-5 mt-lg-5">

          <Cards

            heading={`Vestibulum eu`}
            cardsType={true}

          />

        </div>

        <ButtonSlider

          items={[
            {
              heading: "Tristique mus",
              bold: "venenatis ad",
              paragraph:
                `Ex varius nullam sociosqu erat congue aptent. Maecenas aliquam lobortis tempus, ultrices maecenas auctor ultrices.

                Tincidunt eros lobortis; nam libero nisl viverra. Ex dapibus finibus leo fames class non lobortis non. Sociosqu posuere congue imperdiet nunc maecenas`,
            },
            {
              heading: "Ut nisl laoreet ",
              bold: "himenaeos libero",
              paragraph:

                `Maecenas rutrum senectus vitae lacinia, tempor senectus malesuada? Sapien mollis class aptent convallis lobortis amet fermentum class aptent.

                Montes nulla gravida ultrices in tortor arcu purus. Id ligula porttitor congue sociosqu faucibus viverra.`,
            },
            {
              heading: "Auctor massa",
              bold: "cras accumsan",
              paragraph:

                `Ultricies tortor velit consectetur nisi netus erat ullamcorper mollis fringilla. Conubia nullam eu efficitur purus tincidunt iaculis.

                Dui ad dictum ridiculus ultrices proin, mollis praesent. Aliquam luctus ipsum libero eleifend aliquam. Ligula euismod feugiat interdum ante accumsan congue.`,
            },
            {
              heading: "Interdum in ex",
              bold: "eque accumsan",
              paragraph:

                `Nullam class nisi imperdiet tincidunt egestas id nibh ornare orci. Mus nulla primis, curae nisi nunc ornare. Sagittis posuere lorem ornare urna consectetur tellus.

                Cubilia montes ex efficitur ut, consequat convallis? Adipiscing volutpat arcu sed auctor ultrices aliquet?`,
            },
            {
              heading: "Torquent malesuada",
              bold: "primis rhoncus",
              paragraph:

                `Aliquam nulla habitant vitae euismod viverra penatibus congue potenti. Ipsum eros odio sollicitudin feugiat leo montes magnis quis.

                Dignissim aenean nec; blandit hac in cras integer tincidunt. Accumsan magna neque venenatis senectus curabitur penatibus velit. Litora fames rhoncus elementum; sollicitudin aliquet consectetur.`,
            },
          ]}

        />

        <div className="container-xl py-5 px-sm-5 px-xl-0 my-lg-5 g-0">

          <Cta

            ctaType={true}

            heading={`Lobor Kenean`}

            paragraph={
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique tincidunt dui, vel
              rhoncus sapien congue non. Aenean lobortis lorem eu commodo consequat. Etiam scelerisque mollis dui at
              suscipit. Donec ac diam rhoncus, porta velit at, faucibus velit.`
            }

            button={`Vestibulum eu`}

          />

        </div>

        <Enquiry />

      </main>

    </>

  );
};

export default Home;