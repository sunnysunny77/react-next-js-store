"use client";
import { useActionState, useEffect, useState, useRef } from "react";
import { useAppContext } from "@/components/context";
import { GetSignIn } from "@/api/auth";
import { GetFactor, SetFactor } from "@/api/factor";
import { redirect } from 'next/navigation'
import { SetCaptcha, GetCaptcha } from "@/api/captcha";
import Image from "next/image";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Spinner from "@/images/load.gif";

const Auth = () => {

  const { mainRef, checkCookie } = useAppContext();

  const captchaRef = useRef(null);

  const heading = "STORE";

  const spinner = <Image className="spinner" width="40" height="40" src={Spinner} alt="Spinner"  />

  const [stateSignIn, actionSignIn, isPendingSign] = useActionState(GetSignIn, {
    message: "",
    password: "",
    email: "",
    auth: false,
  });

  const [captchaSrc, setCaptchaSrc] = useState(null);
  const [captchaForm, setCaptchaForm] = useState(false);
  const [response, setResponse] = useState(null);
  const [stateGetFactor, actionGetFactor, isPendingGetFactor] = useActionState(GetFactor, {
    message: "",
    email: "",
    getcode: true,
  });
  const [stateSetFactor, actionSetFactor, isPendingSetFactor] = useActionState(SetFactor, {
    message: "",
    code: "",
    setcode: true,
  });


  const get_cookie = async() => {

    setResponse(spinner);

    const res = await GetCaptcha(captchaRef.current.value);

    if (res) {

      setCaptchaForm(false);
      return;
    }

    setResponse("Incorrect");
  };

  const init = async () => {
    setCaptchaSrc( await SetCaptcha());
  };

  useEffect(() => {

    if (stateSignIn.auth) redirect("/store");
  }, [stateSignIn.auth]);

  useEffect(() => {

    checkCookie();
    init();

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

                    <p className={`alert alert-secondary display ${isPendingSign || stateSignIn?.message ?  "d-block" : "d-none"}`} role="alert">

                        {isPendingSign ? spinner : stateSignIn?.message}

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

                {captchaForm ? (

                  <>

                    <p id="responseCaptcha">

                      Please enter captcha

                    </p>

                    <img src={captchaSrc} alt="canvas" />

                    <label className="d-none" htmlFor="txtInput">

                      Captcha

                    </label>

                    <input

                      className="rounded w-100  mt-1 mb-2 ps-2"
                      type="text"
                      id="txtInput"
                      ref={captchaRef}

                    />

                    <button

                      className="btnn py-1 w-100 rounded mt-2"
                      onClick={get_cookie}

                    >

                      Submit

                    </button>

                    <button
                      className="btnn py-1 w-100 rounded mb-3 mt-2"
                      onClick={init}
                    >

                      Refresh

                    </button>

                    <p className={`alert alert-secondary ${response ? "display" : "displayNone" }`} role="alert">

                      {response}

                    </p>

                  </>

                ) : (stateGetFactor.getcode || stateSetFactor.setcode ? (

                  <>

                    <form action={actionGetFactor} className="Auth-form mb-3">

                      <label>

                        Get Authentication code

                        <input

                          type="email"
                          className="rounded w-100 mt-1 mb-2 ps-2"
                          placeholder="Enter email"
                          autoComplete="on"
                          id="email"
                          name="email"
                          defaultValue={stateGetFactor?.email}

                        />

                      </label>

                      <button id="submit" type="submit" className="btnn py-1 w-100 rounded mt-2">

                        Submit

                      </button>

                      <p className={`alert alert-secondary display ${isPendingGetFactor || stateGetFactor?.message ?  "d-block" : "d-none"}`} role="alert">

                        {isPendingGetFactor ? spinner : stateGetFactor?.message}

                      </p>

                    </form>

                    <form action={actionSetFactor} className="Auth-form">

                      <label>

                        Enter authentication code

                        <input

                          type="text"
                          className="rounded w-100 mt-1 mb-2 ps-2"
                          placeholder="Paste code"
                          id="code"
                          name="code"
                          defaultValue={stateSetFactor?.code}

                        />

                      </label>

                      <button id="submit" type="submit" className="btnn py-1 w-100 rounded mt-2">

                        Submit

                      </button>

                      <p className={`alert alert-secondary display ${isPendingSetFactor || stateSetFactor?.message ?  "d-block" : "d-none"}`} role="alert">

                        {isPendingSetFactor ? spinner : stateSetFactor?.message}

                      </p>

                    </form>

                  </>

                  ) : (


                    <>

                    </>

                  )

                )}

                </div>

              </div>

            </div>

            <p className='rady p-3 mt-3'>

              Ut enim ad ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.

            </p>

          </div>

        </div>

      </main>

      <Footer />

    </>

  );
};

export default Auth;