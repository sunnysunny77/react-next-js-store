"use client"

import { useAppContext } from "@/components/context";
import Header from "@/components/header";

const Auth = () => {

  const { mainRef } = useAppContext();

  const heading = "STORE";

  const sing_in = async (e) => {

    const res = await fetch("http://localhost:3000/api/sign-in", {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: "danielgmail.com" }),
    });

    if (!res.ok) {

      throw new Error("error");
      return;
    };

    const json = await res.json();

    console.log(json);
  };

  return (

    <>

      <Header heading={heading} />

      <main ref={mainRef}>

        <button onClick={sing_in}>send</button>

      </main>

    </>

  );
};

export default Auth;