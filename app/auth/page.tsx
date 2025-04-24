"use client";
import {useActionState, useEffect, useState, useRef, useCallback} from "react";
import {useAppContext} from "@/components/context";
import {GetSignIn} from "@/api/auth";
import {GetFactor, SetFactor} from "@/api/factor";
import {GetCaptcha, SetCaptcha} from "@/api/captcha";
import Registraion from "@/api/registraion";
import Image from "next/image";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Spinner from "@/images/spinner.gif";

const Auth = () => {

  const {checkCookie} = useAppContext();

  const navbarRef = useRef(null);

  const mainRef = useRef(null);

  const footerRef = useRef(null);

  const heading = "STORE";

  const [stateSignIn, actionSignIn, isPendingSign] = useActionState(GetSignIn, {
    message: "",
    password: "",
    email: "",
  });

  const [captcha, setCaptcha] = useState(<Image className="spinner type" width="40" height="40" src={Spinner} alt="spinner"/>);

  const [stateGetFactor, actionGetFactor, isPendingGetFactor] = useActionState(GetFactor, {
    message: "",
    email: "",
    getcode: true,
  });

  const [stateSetCaptcha, actionSetCaptcha, isPendingSetCaptcha] = useActionState(SetCaptcha, {
    message: "",
    captcha: "",
    setcode: true,
  });

  const [stateSetFactor, actionSetFactor, isPendingSetFactor] = useActionState(SetFactor, {
    message: "",
    code: "",
    setcode: true,
  });

  const [stateRegistraion, actionRegistraion, isPendingRegistraion] = useActionState(Registraion, {
    message: "",
    password: "",
  });

  const imageLoader = ({src}) => {

    return `${src}`;
  };

  const init = useCallback( async () => {

    setCaptcha(<Image className="spinner type" width="40" height="40" src={Spinner} alt="spinner"/>);
    const res = await GetCaptcha();
    setCaptcha(<Image src={res} unoptimized loader={imageLoader} width="150" height="50" alt="canvas"/>);
  },[]);

  useEffect(() => {

    init();
  },[init]);

  useEffect(() => {

    checkCookie();
  },[checkCookie]);

  return (

    <>

      <div ref={navbarRef}></div>

      <Navigation mainRef={mainRef} footerRef={footerRef}/>

      <Header heading={heading}/>

      <main className="d-flex flex-column" ref={mainRef}>

        <div className="Auth-form-container w-100">

          <div className="accordion px-4 px-sm-0 py-5 my-5">

            <div className="accordion-item" id="auth-accordian">

              <h2 className="accordion-header">

                <button className="accordion-button" type="button"  data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapse-0" data-bs-target="#collapse-0">

                  Sign in

                </button>

              </h2>

              <div id="collapse-0" className="accordion-collapse collapse show" data-bs-parent="#auth-accordian">

                <div className="accordion-body p-5">

                  <form className="Auth-form" action={actionSignIn}>

                    <label className="hidden" htmlFor="email">

                      Enter email

                    </label>

                    <input className="rounded w-100 mt-1 mb-2 ps-2" defaultValue={stateSignIn?.email} id="email" type="email" required autoComplete="on" name="email" placeholder="Enter email"/>

                    <label className="hidden" htmlFor="password">

                      Enter password

                    </label>

                    <input className="rounded w-100 mt-1 mb-2 ps-2" defaultValue={stateSignIn?.password} id="password" type="password" required autoComplete="on" name="password" placeholder="Enter password"/>

                    <button type="submit" className="btnn py-1 w-100 rounded mt-2">

                      Submit

                    </button>

                  </form>

                  <p className={`alert alert-secondary p-1 mt-3 mb-0 justify-content-center align-items-center ${isPendingSign || stateSignIn?.message ?  "d-flex" : "d-none"}`} role="alert">

                    <span>

                      {isPendingSign ? <Image className="spinner" width="40" height="40" src={Spinner} alt="spinner"/> : stateSignIn?.message}

                    </span>

                  </p>

                </div>

              </div>

            </div>

            <div className="accordion-item" id="auth-accordian">

              <h2 className="accordion-header">

                <button className="accordion-button" type="button"  data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapse-1" data-bs-target="#collapse-1">

                  Sign up

                </button>

              </h2>

              <div id="collapse-1" className="accordion-collapse collapse" data-bs-parent="#auth-accordian">

                <div className="accordion-body p-5">

                {stateSetCaptcha.setcode? (

                  <>

                    {captcha}

                    <form action={actionSetCaptcha}>

                      <label className="hidden" htmlFor="captcha">

                         Please enter captcha

                      </label>

                      <input

                        className="rounded w-100  mt-1 mb-2 ps-2"
                        type="text"
                        id="captcha"
                        name="captcha"
                        placeholder="Please enter captcha"
                        defaultValue={stateSetCaptcha?.captcha}
                        required

                      />

                      <button className="btnn py-1 w-100 rounded mt-2">

                        Submit

                      </button>

                    </form>

                    <button onClick={init} className="btnn p-1 w-100 rounded mt-3">

                      Refresh

                    </button>

                    <p className={`alert alert-secondary p-1 mt-3 mb-0 justify-content-center align-items-center ${isPendingSetCaptcha || stateSetCaptcha?.message ?  "d-flex" : "d-none"}`} role="alert">

                      <span>

                        {isPendingSetCaptcha ? <Image className="spinner" width="40" height="40" src={Spinner} alt="spinner"/> : stateSetCaptcha?.message}

                      </span>

                    </p>

                  </>

                ) : (stateGetFactor.getcode || stateSetFactor.setcode ? (

                  <>

                    <form action={actionGetFactor} className="Auth-form mb-3">

                      <label className="hidden" htmlFor="email">

                        Enter email

                      </label>

                      <input

                        type="email"
                        className="rounded w-100 mt-1 mb-2 ps-2"
                        placeholder="Enter email"
                        autoComplete="on"
                        id="email"
                        name="email"
                        required
                        defaultValue={stateGetFactor?.email}

                      />

                      <button type="submit" className="btnn py-1 w-100 rounded mt-2">

                        Submit

                      </button>

                    </form>

                    <form action={actionSetFactor} className="Auth-form">

                      <label className="hidden" htmlFor="code">

                        Enter code

                      </label>

                      <input

                        type="text"
                        className="rounded w-100 mt-1 mb-2 ps-2"
                        placeholder="Paste code"
                        id="code"
                        name="code"
                        defaultValue={stateSetFactor?.code}
                        required

                      />

                      <button type="submit" className="btnn py-1 w-100 rounded mt-2">

                        Submit

                      </button>

                    </form>

                    <p className={`alert alert-secondary p-1 mt-3 mb-0 justify-content-center align-items-center ${isPendingGetFactor || stateGetFactor?.message ?  "d-flex" : "d-none"}`} role="alert">

                      <span>

                        {isPendingGetFactor ? <Image className="spinner" width="40" height="40" src={Spinner} alt="spinner"/> : stateGetFactor?.message}

                      </span>

                    </p>

                    <p className={`alert alert-secondary p-1 mt-3 mb-0 justify-content-center align-items-center ${isPendingSetFactor || stateSetFactor?.message ?  "d-flex" : "d-none"}`} role="alert">

                      <span>

                        {isPendingSetFactor ? <Image className="spinner" width="40" height="40" src={Spinner} alt="spinner"/> : stateSetFactor?.message}

                      </span>

                    </p>

                  </>

                  ) : (

                    <>

                      <form action={actionRegistraion} className="Auth-form">

                      <label className="hidden" htmlFor="password">

                        Enter password

                      </label>

                      <input

                        type="password"
                        className="rounded w-100 mt-1 mb-2 ps-2"
                        placeholder="Enter password"
                        autoComplete="on"
                        id="password"
                        name="password"
                        defaultValue={stateRegistraion?.password}
                        required

                      />

                      <input

                        type="hidden"
                        name="email"
                        defaultValue={stateGetFactor?.email}

                      />

                      <button type="submit" className="btnn py-1 w-100 rounded mt-2">

                        Submit

                      </button>

                    </form>

                    <p className={`alert alert-secondary p-1 mt-3 mb-0 justify-content-center align-items-center ${isPendingRegistraion || stateRegistraion?.message ?  "d-flex" : "d-none"}`} role="alert">

                      <span>

                        {isPendingRegistraion ? <Image className="spinner" width="40" height="40" src={Spinner} alt="spinner"/> : stateRegistraion?.message}

                      </span>

                    </p>

                  </>

                  )

                )}

                </div>

              </div>

            </div>

            <p className="rady p-3 mt-3">

              Ut enim ad ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.

            </p>

          </div>

        </div>

      </main>

      <div ref={footerRef}></div>

      <Footer/>

    </>

  );
};

export default Auth;