"use client"
import {GetEnquiry} from "@/api/enquiry";
import {useActionState} from "react";
import Image from "next/image";
import Spinner from "@/images/spinner.gif";

const Enquiry = () => {

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
  
  return (
    
    <div className="container-xl g-0">

      <div className="container-xxl row justify-content-center pb-5 mb-5 pt-4 px-xxl-4 g-0">

        <div className="col-11 col-lg-10 col-xl-12">

          <hr className="mb-5"/>

          <form className="enquiry" action={actionEnquiry}>

            <fieldset className="row justify-content-between g-0">

              <legend className="col-12 mb-4">

                Enquiry

                <b className="ms-4"></b>

              </legend>

              <div className="col-12">

                  <p className="m-0">

                    Required fields are marked *

                  </p>

              </div>

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

            </fieldset>

            <div className="row g-0">

              <div className="col-12 col-sm-9 pt-4">

                <div className="row justify-content-between align-items-center g-0">

                    <div className="col-12 col-sm-8">

                      <p className="mb-0">

                        {stateEnquiry?.response ? stateEnquiry?.response : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}

                        <br/>

                        <span className="spinnerSpan">{isPending ? <Image unoptimized className="spinner" width="40" height="40" src={Spinner} alt="spinner"/> : ""} </span>

                      </p>

                    </div>

                    <div className="col-12 col-sm-4 d-flex justify-content-sm-end">

                      <input className="rounded" type="submit" value="Send"/>

                    </div>

                </div>

              </div>

            </div>

          </form>

        </div>

      </div>

    </div>

  );
};

export default Enquiry;