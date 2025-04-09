"use client"
import { useRef, useEffect } from "react";
import Image from "next/image";
import Finance from "../../public/finance.webp";
import Transport from "../../public/transport.webp";
import Warehouse from "../../public/warehouse.webp";

const Carousel = () => {

    const ref = useRef(null);

    useEffect(() => {
  
      const { Carousel } = require("bootstrap");
      const carousel = new Carousel(ref.current, {
        pause: false,
      });
      carousel.cycle();
    }, []);

    return (

      <div ref={ref} className="carousel slide col-6 col-md-4 mx-auto mx-xl-0">

        <div className="carousel-inner">

          <div className="carousel-item active">

            <Image src={Finance} alt="Finance" width="150" height="150" />

          </div>

          <div className="carousel-item">

            <Image src={Transport} alt="Transport" width="150" height="120" />

          </div>

          <div className="carousel-item">

            <Image src={Warehouse} alt="Warehouse" width="150" height="150" />

          </div>

        </div>

      </div>
      
    );
};

export default Carousel;