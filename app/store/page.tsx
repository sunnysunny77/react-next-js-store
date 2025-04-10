import Cards from "@/components/cards";
import Header from "@/components/header";
import Paypal from "@/components/paypal";

const Store = () => {

  return (

    <>

      <Header heading="STORE" />

      <Cards

        heading={`Vestibulum eu`}
        link={false}

      />

      <Paypal />

    </>

  );
};

export default Store;