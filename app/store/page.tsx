"use client"
import { useAppContext } from "@/components/context";
import Cards from "@/components/cards";
import Header from "@/components/header";
import Paypal from "@/components/paypal";

const Store = () => {

  const { mainRef } = useAppContext();

  const heading = "STORE";

  return (

    <>

      <Header heading={heading} />

      <main ref={mainRef}>

        <Cards

          heading={`Vestibulum eu`}
          cardsType={false}

        />

        <Paypal />

      </main>

    </>

  );
};

export default Store;