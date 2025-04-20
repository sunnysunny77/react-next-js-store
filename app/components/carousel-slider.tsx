"use client"
import {useRef, useEffect} from "react";
import {useAppContext} from "@/components/context";
import Image from "next/image";
import Finance from "@/images/finance.webp";
import Transport from "@/images/transport.webp";
import Warehouse from "@/images/warehouse.webp";

const CarouselSlider = () => {

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

        <div className="carousel-inner">

          <div className="carousel-item active">

            <Image className="d-block w-100" src={Finance} alt="Finance" width="150" height="150"/>

          </div>

          <div className="carousel-item">

            <Image className="d-block w-100" src={Transport} alt="Transport" width="150" height="120"/>

          </div>

          <div className="carousel-item">

            <Image className="d-block w-100" src={Warehouse} alt="Warehouse" width="150" height="150"/>

          </div>

        </div>

      </div>
      
    );
};

export default CarouselSlider;