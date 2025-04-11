"use client"
import { useCartContext } from "@/components/context";
import { ArrowRight } from 'react-bootstrap-icons';
import Link from "next/link";
import Image from "next/image";

const CardsType = (props) => {

  const { link, classes, onClick, data_value, children } = props;

  return link ? (

    <Link
      scroll={false}
      className={classes}
      onClick={onClick}
      data-value={data_value}
      href="/store"
    >
      {children}
    </Link>

  ) : (

    <div
        className={classes}
        onClick={onClick}
        data-value={data_value}
    >
      {children}
    </div>

  );
};

const Cards = (props) => {

  const { heading, link } = props;

  const { cartOrder, options, items, storeRef } = useCartContext();

  const scroll_to = (e) => {

    window.scrollTo(0, e);
  };

  const optionOrder = (e) => {

    cartOrder[e.currentTarget.getAttribute("data-value")]();

    if (storeRef.current) {

      scroll_to(storeRef.current.offsetTop);
    }
  };

  return (
    
    <section className="cards container-xl g-0">

      <div className="row justify-content-center g-0">
    
        <div className="col-11 col-lg-10">

          <h2 className="pt-4 ps-4 pb-sm-4 pb-lg-5 mb-0 mt-3">

            {heading}

          </h2>

        </div>

        <div className="col-12 col-sm-11 col-lg-12 d-flex flex-wrap justify-content-center justify-content-sm-between justify-content-lg-evenly px-lg-5 px-xl-4">

          <CardsType

            link={link}

            classes="card d-flex flex-column justify-content-between mt-5 mt-sm-4 mt-lg-3"

            onClick={(e)=>optionOrder(e)}

            data_value={options[0].value}

          >

            <div className="card-inner h-100">

              <div className="overflow-hidden">

                <Image src={items.cartOne.image} alt={items.cartOne.name} width="399" height="265"/>

              </div>

              <h3 className="mt-3 mb-2 ps-2">

                {items.cartOne.name}

              </h3>

              <b className="d-block ps-2">

                {items.cartOne.sub}

              </b>

              <p className="mt-3 mb-3 p-2">

                {items.cartOne.description}

              </p>

            </div>

            <div className="div-button w-100 text-start ps-3 py-2">

              Order

              <ArrowRight className="ms-2" />

            </div>

          </CardsType>

          <CardsType

            link={link}

            classes="card d-flex flex-column justify-content-between mt-5 mt-sm-4 mt-lg-3"

            onClick={(e)=>optionOrder(e)}

            data_value={options[1].value}

          >

            <div className="card-inner h-100">

              <div className="overflow-hidden">

                <Image src={items.cartTwo.image} alt={items.cartTwo.name} width="399" height="265"/>

              </div>

              <h3 className="mt-3 mb-2 ps-2">

                {items.cartTwo.name}

              </h3>

              <b className="d-block ps-2">

                {items.cartTwo.sub}

              </b>

              <p className="mt-3 mb-3 p-2">

                {items.cartTwo.description}

              </p>

            </div>

            <div className="div-button w-100 text-start ps-3 py-2">

              Order

              <ArrowRight className="ms-2" />

            </div>

          </CardsType>

          <CardsType

            link={link}

            classes="card d-flex flex-column justify-content-between mt-5 mt-sm-4 mt-lg-3"

            onClick={(e)=>optionOrder(e)}

            data_value={options[2].value}

          >

            <div className="card-inner h-100">

              <div className="overflow-hidden">

                <Image src={items.cartThree.image} alt={items.cartThree.name} width="399" height="265"/>

              </div>

              <h3 className="mt-3 mb-2 ps-2">

                {items.cartThree.name}

              </h3>

              <b className="d-block ps-2">

                {items.cartThree.sub}

              </b>

              <p className="mt-3 mb-3 p-2">

                {items.cartThree.description}

              </p>

            </div>

            <div className="div-button w-100 text-start ps-3 py-2">

              Order

              <ArrowRight className="ms-2" />

            </div>

          </CardsType>

          <CardsType

            link={link}

            classes="card d-flex flex-column justify-content-between mt-5 mt-sm-4 mt-lg-3"

            onClick={(e)=>optionOrder(e)}

            data_value={options[3].value}

          >

            <div className="card-inner h-100">

              <div className="overflow-hidden">

                <Image src={items.cartFour.image} alt={items.cartFour.name} width="399" height="265"/>

              </div>

              <h3 className="mt-3 mb-2 ps-2">

                {items.cartFour.name}

              </h3>

              <b className="d-block ps-2">

                {items.cartFour.sub}

              </b>

              <p className="mt-3 mb-3 p-2">

                {items.cartFour.description}

              </p>

            </div>

            <div className="div-button w-100 text-start ps-3 py-2">

              Order

              <ArrowRight className="ms-2" />

            </div>

          </CardsType>

          <CardsType

            link={link}

            classes="card d-flex flex-column justify-content-between mt-5 mt-sm-4 mt-lg-3"

            onClick={(e)=>optionOrder(e)}

            data_value={options[4].value}

          >

            <div className="card-inner h-100">

              <div className="overflow-hidden">

                <Image src={items.cartFive.image} alt={items.cartFive.name} width="399" height="265"/>

              </div>

              <h3 className="mt-3 mb-2 ps-2">

                {items.cartFive.name}

              </h3>

              <b className="d-block ps-2">

                {items.cartFive.sub}

              </b>

              <p className="mt-3 mb-3 p-2">

                {items.cartFive.description}

              </p>

            </div>

            <div className="div-button w-100 text-start ps-3 py-2">

              Order

              <ArrowRight className="ms-2" />

            </div>

          </CardsType>

          <CardsType

            link={link}

            classes="card d-flex flex-column justify-content-between mt-5 mt-sm-4 mt-lg-3"

            onClick={(e)=>optionOrder(e)}

            data_value={options[5].value}

          >

            <div className="card-inner h-100">

              <div className="overflow-hidden">

                <Image src={items.cartSix.image} alt={items.cartSix.name} width="399" height="265"/>

              </div>

              <h3 className="mt-3 mb-2 ps-2">

                {items.cartSix.name}

              </h3>

              <b className="d-block ps-2">

                {items.cartSix.sub}

              </b>

              <p className="mt-3 mb-3 p-2">

                {items.cartSix.description}

              </p>

            </div>

            <div className="div-button w-100 text-start ps-3 py-2">

              Order

              <ArrowRight className="ms-2" />

            </div>

          </CardsType>

        </div>

      </div>

    </section>

  );

};

export default Cards;