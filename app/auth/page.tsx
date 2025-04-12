"use client"
import { useActionState } from "react";
import { useAppContext } from "@/components/context";
import { GetSignIn } from "@/api/auth";
import Header from "@/components/header";

const Auth = () => {

  const { mainRef } = useAppContext();

  const heading = "STORE";

  const [stateSignIn, actionSignIn, isPending] = useActionState(GetSignIn, {
    message: "",
    password: "",
    email: "",
    auth: false
  });

  return (

    <>

      <Header heading={heading} />

      <main ref={mainRef}>

        {!stateSignIn.auth ? (

          <form action={actionSignIn}>

            <input defaultValue={stateSignIn.email as string} type="email" required autoComplete="" name="email" placeholder="Email:" />

            <input defaultValue={stateSignIn.password as string} type="password" required autoComplete="" name="password" placeholder="Password:" />

            <button type="submit">Send</button>

            {isPending ? "Loading..." : stateSignIn.message}

          </form>

        ) : (

          <p>hi</p>

        )}

      </main>

    </>

  );
};

export default Auth;