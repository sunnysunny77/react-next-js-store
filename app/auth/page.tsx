"use client";
import { useActionState, useEffect } from "react";
import { useAppContext } from "@/components/context";
import { GetSignIn } from "@/api/auth";
import { redirect } from 'next/navigation';
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const Auth = () => {

  const { mainRef, checkCookie } = useAppContext();

  const heading = "STORE";

  const [stateSignIn, actionSignIn, isPending] = useActionState(GetSignIn, {
    message: "",
    password: "",
    email: "",
    auth: false,
  });

  useEffect(() => {

    if (stateSignIn.auth) redirect("/store");
  }, [stateSignIn.auth]);

  useEffect(() => {

    checkCookie();
  }, []);

  return (

    <>

      <Navigation />

      <Header heading={heading} />

      <main ref={mainRef}>

        <div className="Auth-form-container w-100">

          <div className="accordion px-4 px-sm-0 py-5 my-5">

            <div className="accordion-item" id="auth-accordian">

              <h2 className="accordion-header">

                <button className="accordion-button" type="button"  data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapse-0" data-bs-target="#collapse-0">

                  Login

                </button>

              </h2>

              <div id="collapse-0" className="accordion-collapse collapse show" data-bs-parent="#auth-accordian">

                <div className="accordion-body p-5">

                  <form className="Auth-form" action={actionSignIn}>

                    <label>

                      Email address

                      <input className="rounded w-100 mt-1 mb-2 ps-2" defaultValue={stateSignIn?.email} type="email" required autoComplete="on" name="email" placeholder="Enter email" />

                    </label>

                    <label>

                      Password

                      <input className="rounded w-100 mt-1 mb-2 ps-2" defaultValue={stateSignIn?.password} type="password" required autoComplete="on" name="password" placeholder="Enter password" />

                    </label>

                    <button type="submit" className="btnn py-1 w-100 rounded mt-2">

                      Submit

                    </button>

                    <p className={`alert alert-secondary display ${isPending || stateSignIn?.message ?  "d-block" : "d-none"}`} role="alert">

                        {isPending ? "Loading..." : stateSignIn?.message}

                    </p>

                  </form>

                </div>

              </div>

            </div>

            <div className="accordion-item" id="auth-accordian">

              <h2 className="accordion-header">

                <button className="accordion-button" type="button"  data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapse-1" data-bs-target="#collapse-1">

                  Signup

                </button>

              </h2>

              <div id="collapse-1" className="accordion-collapse collapse" data-bs-parent="#auth-accordian">

                <div className="accordion-body p-5">


                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />

    </>

  );
};

export default Auth;