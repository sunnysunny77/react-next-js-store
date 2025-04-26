"use client"
import {useEffect} from "react";
import {useSubContext} from "@/components/context";
import {useAppContext} from "@/components/context";
import {ArrowRight} from "react-bootstrap-icons";
import Link from "next/link";
import Image from "next/image";

const CardsType = (props) => {

  const {auth} = useSubContext();

  const {cardsType, classes, onClick, data_value, children} = props;

  return cardsType ? (

    <Link
      className={classes}
      onClick={onClick}
      data-value={data_value}
      href={auth ? "/store" : "/authentication"}
    >
      {children}
    </Link>

  ) : (

    <button
        className={classes}
        onClick={onClick}
        data-value={data_value}
    >
      {children}
    </button>

  );
};

const Cards = (props) => {

  const {heading, cardsType, storeRef} = props;

  const {setOrder, options, items} = useSubContext();

  const {setScrollingRef, holdScrollCard, setHoldScrollCard} = useAppContext();

  const imageLoader = ({src, width}) => {

    return `${src}?w=${width}`;
  };

  const optionOrder = (e) => {

    setOrder(items[e.currentTarget.getAttribute("data-value")]);
    if(storeRef) {

      setScrollingRef(storeRef);
    } else {

      setHoldScrollCard(true);
    };
  };

  useEffect(()=>{

    if(holdScrollCard && storeRef) {

      setScrollingRef(storeRef);
      return () => {

        setHoldScrollCard(false);
      };
    };
  },[holdScrollCard, storeRef, setHoldScrollCard, setScrollingRef]);

  return (
    
    <section className="cards container-xl g-0">

      <div className="row justify-content-center g-0">
    
        <div className="col-11 col-lg-10">

          <h2 className="pt-4 ps-4 pb-sm-4 mb-0 mt-3">

            {heading}

          </h2>

        </div>

        <div className="col-12 col-sm-11 col-lg-12 d-flex flex-wrap justify-content-center justify-content-sm-between px-lg-5 px-xl-4 mw-1285">

          {Object.keys(items).map((index, i) => {

            return (

              <CardsType

                key={i}

                cardsType={cardsType}

                onClick={optionOrder}

                classes="card d-flex flex-column justify-content-between"

                data_value={options[i].value}

              >

                <div className="card-inner h-100">

                  <div className="overflow-hidden">

                  {items[index].image ? <Image src={items[index].image} loader={imageLoader}  alt={`${items[index].image_alt}`} width="399" height="265"/> : null}

                  </div>

                  <h3 className="mt-3 mb-2 ps-2">

                    {items[index].name}

                  </h3>

                  <b className="d-block ps-2">

                    {items[index].sub}

                  </b>

                  <p className="mt-3 mb-3 p-2">

                    {items[index].description}

                  </p>

                </div>

                <div className="div-button w-100 text-start ps-3 py-2">

                  {items[index].button}

                  <ArrowRight className="ms-2"/>

                </div>

              </CardsType>

            )

          })}

        </div>

      </div>

    </section>

  );

};

export default Cards;