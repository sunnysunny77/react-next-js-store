"use client"
import { useEffect } from "react";
import { useAppContext } from "@/components/context";
import Cards from "@/components/cards";
import Paypal from "@/components/paypal";

const Store = () => {

  const { setHeading, setLarge } = useAppContext();

  useEffect(() => {

    setHeading("STORE");
    setLarge(false);
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