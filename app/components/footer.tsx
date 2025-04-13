
"use client"
import { useAppContext } from "@/components/context";
import { Linkedin } from "react-bootstrap-icons";
import Link from "next/link";
import Year from "@/components/year";
import Top from "@/components/top";

const Footer = () => {

  const { footerRef, auth, log_out } = useAppContext();

  return (
  
    <footer ref={footerRef}>

      <div className="container-lg py-3 py-lg-5 g-0">

        <div className="row justify-content-xxl-center px-4 py-4 py-md-5 g-0">

          <div className="col-12 col-xxl-11 pb-2 pb-md-4">

            <div className="row d-flex flex-column-reverse flex-md-row justify-content-md-between g-0">

              <div className="col-12 col-md-7 pt-3 pt-md-0">

                <hr className="w-100"/>

                <div className="row justify-content-between justify-content-sm-around g-0 mt-4 mt-md-0">

                  <div className="col-auto pb-3 ps-1 pe-3">

                    <Link scroll={false} href="/">
                    
                      <svg aria-label="Super Foods" viewBox="0 0 100 100" width="40" height="40">

                        <defs>

                            <path 

                              id="circle-footer"
                              d="M 50, 50
                              m -37, 0
                              a 37,37 0 1,1 74,0
                              a 37,37 0 1,1 -74,0"
                                
                            />

                        </defs>

                        <text className="font">

                            <textPath href="#circle-footer">

                              Super --- Food ----------

                            </textPath>

                        </text>

                      </svg>

                    </Link>

                  </div>

                  <div className="col-9">

                    <p className="m-0 footer-text">

                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation.

                    </p>

                  </div>

                </div>

              </div>

              <div className="col-4 col-md-2">

                <hr className="w-100"/>

                <ul className="list-unstyled text-md-end m-0 p-0">

                  <li>

                    <Link className="footer-link" scroll={false} href="/">
                    
                      Home 
                    
                    </Link>

                  </li>

                  <li>

                    <Link className="footer-link" scroll={false} href={auth ? "/store" : "/auth"}>
                    
                      Store 
                      
                    </Link>

                  </li>

                  <li>

                  {auth ? (

                    <div href=":" onClick={log_out} className="footer-link">

                      Sign Out

                    </div>

                    ) : (

                    <Link className="footer-link" scroll={false} href="/auth">

                    Sign In

                    </Link>

                    )}
                  </li>

                </ul>

              </div>

            </div>

          </div>

          <div className="col-12 col-xxl-11">

            <hr className="w-100" />  

            <div className="row w-100 g-0">

              <div className="col-8">

                <address>
  
                  7c Yander Drive Eeast Welsbrough

                </address>

                <Link href="tel:+61435987875">+61 435 987 875</Link>

              </div>

              <div className="col-8 d-flex mt-3">

                <Link aria-label="LinkedIn" href="/">
                        
                  <Linkedin />
        
                </Link>

              </div>

              <div className="col-12">

                <Year />

              </div>

              <div className="col-12 d-flex flex-wrap justify-content-end mt-3">

                <Top />

              </div>

            </div>

          </div>

        </div>

      </div>
            
    </footer>

  );
};

export default Footer;