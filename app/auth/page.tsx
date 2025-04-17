"use client";
import { useActionState, useEffect, useState, useRef } from "react";
import { useAppContext } from "@/components/context";
import { GetSignIn } from "@/api/auth";
import { GetFactor, SetFactor } from "@/api/factor";
import { redirect } from 'next/navigation'
import { SetCaptcha, GetCaptcha } from "@/api/captcha";
import Registraion from "@/api/registraion";
import Image from "next/image";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Spinner from "@/images/load.gif";

const Auth = () => {

  const { checkCookie } = useAppContext();

  const captchaRef = useRef(null);

  const navbarRef = useRef(null);

  const mainRef = useRef(null);

  const footerRef = useRef(null);

  const heading = "STORE";

  const [stateSignIn, actionSignIn, isPendingSign] = useActionState(GetSignIn, {
    message: "",
    password: "",
    email: "",
    auth: false,
  });
  const [captchaSrc, setCaptchaSrc] = useState(<Image className="spinner" width="40" height="40" src={Spinner} alt="Spinner" />);
  const [captchaForm, setCaptchaForm] = useState(true);
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
  const [stateRegistraion, actionRegistraion, isPendingRegistraion] = useActionState(Registraion, {
    message: "",
    password: "",
    auth: false,
  });

  const get_cookie = async() => {

    setResponse(<Image className="spinner" width="40" height="40" src={Spinner} alt="Spinner" />);

    const res = await GetCaptcha(captchaRef.current.value);

    if (res) {

      setCaptchaForm(false);
      return;
    }

    setResponse("Incorrect");
  };

  const imageLoader = ({src }) => {
    return `${src}`;
  }

  const init = async () => {

    setCaptchaSrc(<Image className="spinner" width="40" height="40" src={Spinner} alt="Spinner" />);
    const res = await SetCaptcha();
    setCaptchaSrc(<Image src={res} loader={imageLoader}  width="150" height="50" alt="canvas" />);
  };

  useEffect(() => {

    if (stateSignIn.auth || stateRegistraion.auth) redirect("/store");
  }, [stateSignIn.auth, stateRegistraion.auth]);

  useEffect(() => {

    const sync = async () => {

      setCaptchaSrc(<Image className="spinner" width="40" height="40" src={Spinner} alt="Spinner" />);
      const res = await SetCaptcha();
      setCaptchaSrc(<Image src={res} loader={imageLoader}  width="150" height="50" alt="canvas" />);
    };
    sync();
  },[]);

  useEffect(() => {

    checkCookie();
  }, [checkCookie]);

  return (

    <>

      <div ref={navbarRef}></div>

      <Navigation mainRef={mainRef} footerRef={footerRef} navbarRef={navbarRef} />

      <Header heading={heading} />

      <main className="d-flex flex-column" ref={mainRef}>

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

                    <p className={`alert alert-secondary mt-3 justify-content-center align-items-center ${isPendingSign || stateSignIn?.message ?  "d-flex" : "d-none"}`} role="alert">

                      <span>

                        {isPendingSign ? <Image className="spinner" width="40" height="40" src={Spinner} alt="Spinner" /> : stateSignIn?.message}

                      </span>

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

                    {captchaSrc}

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

                    <p className={`alert alert-secondary mt-3 justify-content-center align-items-center ${response ? "d-flex" : "d-none" }`} role="alert">

                      <span>

                        {response}

                      </span>

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

                      <p className={`alert alert-secondary mt-3 justify-content-center align-items-center ${isPendingGetFactor || stateGetFactor?.message ?  "d-flex" : "d-none"}`} role="alert">

                        <span>

                          {isPendingGetFactor ? <Image className="spinner" width="40" height="40" src={Spinner} alt="Spinner" /> : stateGetFactor?.message}

                        </span>

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

                      <p className={`alert alert-secondary mt-3 justify-content-center align-items-center ${isPendingSetFactor || stateSetFactor?.message ?  "d-flex" : "d-none"}`} role="alert">

                        <span>

                          {isPendingSetFactor ? <Image className="spinner" width="40" height="40" src={Spinner} alt="Spinner" /> : stateSetFactor?.message}

                        </span>

                      </p>

                    </form>

                  </>

                  ) : (

                    <form action={actionRegistraion} className="Auth-form">

                    <label>

                      Create Password

                      <input

                        type="password"
                        className="rounded w-100 mt-1 mb-2 ps-2"
                        placeholder="Enter password"
                        autoComplete="on"
                        id="password"
                        name="password"
                        defaultValue={stateRegistraion?.password}

                      />

                      <input

                        type="hidden"
                        name="email"
                        defaultValue={stateGetFactor?.email}

                      />

                    </label>

                    <button id="submit" type="submit" className="btnn py-1 w-100 rounded mt-2">

                      Submit

                    </button>

                    <p className={`alert alert-secondary mt-3 justify-content-center align-items-center ${isPendingRegistraion || stateRegistraion?.message ?  "d-flex" : "d-none"}`} role="alert">

                      <span>

                        {isPendingRegistraion ? <Image className="spinner" width="40" height="40" src={Spinner} alt="Spinner" /> : stateRegistraion?.message}

                      </span>

                    </p>

                  </form>

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

      <div ref={footerRef}></div>

      <Footer navbarRef={navbarRef} />

    </>

  );
};

export default Auth;