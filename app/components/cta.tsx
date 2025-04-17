"use client"
import { useEffect } from "react";
import { useAppContext } from "@/components/context";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import Link from "next/link";

const CtaType = (props) => {

  const { ctaType, classes, children, onClick } = props;

  const { auth } = useAppContext();

  return ctaType ? (

    <Link
      className={classes}
      href={auth ? "/store" : "/auth"}
      onClick={onClick}
    >
      {children}
    </Link>

  ) : (

    <button
        className={classes}
        onClick={onClick}
    >
      {children}
    </button>

  );
};

const Cta = (props) => {

  const { ctaType, heading, bold, paragraph, button, itemsRef, navbarRef } = props;

  const { setScrollingRef, holdScrollCta, setHoldScrollCta, auth } = useAppContext();

  const scroll_to = () => {

    if(itemsRef) {

      setScrollingRef(itemsRef);
    } else if (!itemsRef && auth) {

      setHoldScrollCta(true);
    } else if (!auth) {

      setHoldScrollCta(true);
      setScrollingRef(navbarRef);
    }
  };

  useEffect(()=>{

    if(holdScrollCta && itemsRef) {

      setScrollingRef(itemsRef);

      return () => {

        setHoldScrollCta(false);
      };
    };
  },[holdScrollCta, itemsRef, setHoldScrollCta, setScrollingRef]);

  return (

    <>  

    <CtaType ctaType={ctaType} onClick={scroll_to} classes="cta row justify-content-center justify-content-lg-between g-0">

        <div className="col-10 col-md-4 col-lg-12 d-flex align-items-xl-center">

            <h2 className="w-100 text-center text-md-start py-3 px-md-4 py-md-5 p-lg-5 m-0">
                
              {heading}
                
            </h2>

        </div>

        <div className="col-10 col-md-8 col-lg-12 col-xl-8 d-flex align-items-center">

          <p className="py-3 ps-md-3 py-md-5 pe-md-5 ps-lg-5 m-0">

              {bold ? (

                <>

                  <b className="d-block mb-3">{bold}</b>

                  {paragraph} 

                </>

              ) : (

                <>

                  {paragraph} 
                
                </>
                
              )}

          </p>

        </div>

        <div className="col-11 col-lg-5 col-xl-4 d-flex align-items-end justify-content-md-center py-3 px-sm-2 py-sm-4 p-lg-4 px-xl-5">

            <div className="div-button w-100 d-flex justify-content-between  align-items-center text-start py-3 px-4">
                
                {button}  <ArrowRightCircleFill className="ms-3 me-1" />
                
            </div>

        </div>

      </CtaType>
      
    </>
    
  );
};

export default Cta;