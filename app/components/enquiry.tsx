"use client"
import {GetEnquiry} from "@/api/enquiry";
import {useActionState, useEffect, useRef} from "react";
import Image from "next/image";
import Spinner from "@/images/spinner.gif";

const Enquiry = (props) => {

    const {heading, paragraph, button} = props;

    const ref = useRef(null);

    const [stateEnquiry, actionEnquiry, isPending] = useActionState(GetEnquiry, {
      name: "",
      nameMessage: "",
      phone: "",
      phoneMessage: "",
      email: "",
      emailMessage: "",
      text: "",
      textMessage: "",
      response: "",
    });

    useEffect(() => {

      if (!window.navigator.onLine) ref.current.disabled = "true";
    },[]);
  
  return (
    
    <div className="container-xl g-0">

      <div className="container-xxl row justify-content-center scrolled-init up pb-5 mb-5 pt-4 px-xxl-4 g-0">

        <div className="col-11 col-lg-10 col-xl-12">

          <hr className="mb-5"/>

          <form className="enquiry" action={actionEnquiry}>

            <fieldset>

              <legend className="mb-4">

                {heading}

                <b className="ms-4"></b>

              </legend>

              <div>

                  <p className="m-0">

                    Required fields are marked *

                  </p>

              </div>

              <div className="row justify-content-between g-0">

                <div className="col-12 col-sm-6">

                    <label className="pe-sm-3">

                      <span className="hidden d-block">

                        Name

                      </span>

                      <span>{stateEnquiry?.nameMessage}</span>

                      <input

                          className={`ps-2 ${stateEnquiry?.nameMessage ? "error" : ""}`}
                          type="text"
                          name="name"
                          placeholder="* Name"
                          autoComplete="on"
                          defaultValue={stateEnquiry?.name}

                      />

                    </label>

                </div>

                <div className="col-12 col-sm-6">

                    <label className="ps-sm-3">

                      <span className="hidden d-block">

                        Phone

                      </span>

                      <span>{stateEnquiry?.phoneMessage}</span>

                      <input

                          className={`ps-2 ${stateEnquiry?.phoneMessage ? "error" : ""}`}
                          type="text"
                          name="phone"
                          placeholder="* Phone"
                          autoComplete="on"
                          defaultValue={stateEnquiry?.phone}

                      />

                    </label>

                </div>

                <div className="col-12 col-sm-6">

                    <label className="pe-sm-3">

                      <span className="hidden d-block">

                        Email

                      </span>

                      <span>{stateEnquiry?.emailMessage}</span>

                      <input

                          className={`ps-2 ${stateEnquiry?.emailMessage ? "error" : ""}`}
                          type="text"
                          name="email"
                          placeholder="* Email"
                          autoComplete="on"
                          defaultValue={stateEnquiry?.email}

                      />

                    </label>

                </div>

                <div className="col-12">

                  <label htmlFor="text">

                    <span className="hidden d-block">

                      Message

                    </span>

                    <span>{stateEnquiry?.textMessage}</span>

                    <textarea

                        id="text"
                        className={`ps-2 ${stateEnquiry?.textMessage ? "error" : ""}`}
                        name="text"
                        placeholder="* Message"
                        rows={6}
                        defaultValue={stateEnquiry?.text}

                    >
                    </textarea>

                  </label>

                </div>

                <div className="col-12 col-sm-9 pt-4">

                  <div className="row justify-content-between align-items-center g-0">

                      <div className="col-12 col-sm-8">

                        <p className="mb-0">

                          {stateEnquiry?.response ? stateEnquiry?.response : paragraph}

                          <br/>

                          <span className="spinnerSpan">{isPending ? <Image  className="spinner" width="40" height="40" src={Spinner} unoptimized alt="spinner"/> : ""} </span>

                        </p>

                      </div>

                      <div className="col-12 col-sm-4 d-flex justify-content-sm-end">

                        <input ref={ref} className="rounded" type="submit" value={`${button}`}/>

                      </div>

                  </div>

                </div>

              </div>

            </fieldset>

          </form>

        </div>

      </div>

    </div>

  );
};

export default Enquiry;