"use client"
import { useAppContext } from "@/components/context";
import Header from "@/components/header";

const Auth = () => {

  const { mainRef } = useAppContext();

  const heading = "STORE";

  return (

    <>

      <Header heading={heading} />

      <main ref={mainRef}>


      </main>

    </>

  );
};

export default Auth;