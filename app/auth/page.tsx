"use client"
import { useEffect } from "react";
import { useAppContext } from "@/components/context";

const Auth = () => {

  const { setHeading, setLarge } = useAppContext();

  const heading = "STORE";

  const large = false;

  useEffect(() => {

    setHeading(heading);
    setLarge(large);
  }, []);

  return (

    <>


    </>

  );
};

export default Auth;