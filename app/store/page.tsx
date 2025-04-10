import Cards from "@/components/cards";
import Header from "@/components/header";
import Paypal from "@/components/paypal";

const Store = () => {

  return (

    <>

      <Header heading="STORE" />

      <main className="d-flex flex-column">

        <Cards

          heading={`Vestibulum eu`}
          link={false}

        />

        <Paypal />

      </main>

    </>

  );
};

export default Store;