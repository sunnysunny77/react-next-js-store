"use client"
import {useRef, useEffect} from "react";
import {useAppContext} from "@/components/context";

const CarouselSlider = (props) => {

  const {children} = props;

  const {bootstrap} = useAppContext();

  const ref = useRef(null);

  useEffect(() => {

    if (bootstrap) {

      const {Carousel} = bootstrap;
      const inst = new Carousel(ref.current, {
        pause: false,
      });
      inst.cycle();
    };
  }, [bootstrap]);

  return (

    <div ref={ref} data-bs-ride="carousel" data-bs-pause="false" className="carousel slide col-6 col-md-4 mx-auto mx-xl-0">

      {children}

    </div>

  );
};

export default CarouselSlider;