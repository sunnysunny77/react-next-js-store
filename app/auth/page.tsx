"use client"
import { useEffect } from "react";
import { useAppContext } from "@/components/context";

const Auth = () => {

  const { setHeading, setLarge } = useAppContext();

  useEffect(() => {

    setHeading("STORE");
    setLarge(false);
  }, []);

  return (

    <>


    </>

  );
};

export default Auth;