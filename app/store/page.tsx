"use client"
import { useEffect } from "react";
import { useAppContext } from "@/components/context";
import Cards from "@/components/cards";
import Paypal from "@/components/paypal";

const Store = () => {

  const { setHeading, setLarge } = useAppContext();

  const heading = "STORE";

  const large = false;

  useEffect(() => {

    setHeading(heading);
    setLarge(large);
  }, []);

  return (

    <>

      <Cards

        heading={`Vestibulum eu`}
        link={false}

      />

      <Paypal />

    </>

  );
};

export default Store;