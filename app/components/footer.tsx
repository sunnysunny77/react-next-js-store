
"use client"
import {useAppContext ,useSubContext} from "@/components/context";
import {Linkedin} from "react-bootstrap-icons";
import {ArrowUp} from "react-bootstrap-icons";
import {usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Year from "@/components/year";

const Footer = () => {

  const {auth, log_out, setScrollingRef} = useAppContext();

  const {fields} = useSubContext();

  const pathname = usePathname();

  const imageLoader = ({src, width}) => {

    return `${src}?w=${width}`;
  };

  const scroll_to = () => {

    setScrollingRef({current: true});
  };

  return (
  
    <footer>

      <div className="container-lg py-3 py-lg-5 g-0">

        <div className="row justify-content-xxl-center px-4 py-4 py-md-5 g-0">

          <div className="col-12 col-xxl-11 pb-2 pb-md-4">

            <div className="row d-flex flex-column-reverse flex-md-row justify-content-md-between g-0">

              <div className="col-12 col-md-7 pt-3 pt-md-0">

                <hr className="w-100"/>

                <div className="row justify-content-between justify-content-sm-around scrolled-init right mt-4 mt-md-0 g-0">

                  <div className="col-auto pb-3 ps-1 pe-3">

                    <Link href="/">

                      {fields.options?.logo ? <Image className="d-block" src={fields.options?.logo} loader={imageLoader} alt={`${fields.options?.logo_alt}`} width="50" height="50"/> : null}

                    </Link>

                  </div>

                  <div className="col-9">

                    <p className="m-0 footer-text">

                      {fields.options?.paragraph}

                    </p>

                  </div>

                </div>

              </div>

              <div className="col-4 col-md-2 scrolled-init right">

                <hr className="w-100"/>

                <ul className="list-unstyled text-md-end m-0 p-0">

                  <li>

                    <Link className={`footer-link ${pathname === "/" ? "active" : ""}`} href="/">
                    
                      {fields.options?.front_page}
                    
                    </Link>

                  </li>

                  <li>

                    <Link className={`footer-link ${pathname === "/store" || pathname === "/authentication" ? "active" : ""}`} href={auth ? "/store" : "/authentication"}>
                    
                      {fields.options?.cart_page}
                      
                    </Link>

                  </li>

                  <li>

                  {auth ? (

                    <button onClick={log_out} className="footer-link">

                      {fields.options?.sign_out}

                    </button>

                    ) : (

                    <Link className="footer-link" href="/authentication">

                      {fields.options?.sign_in}

                    </Link>

                    )}
                  </li>

                </ul>

              </div>

            </div>

          </div>

          <div className="col-12 col-xxl-11 scrolled-init left">

            <hr className="w-100"/>

            <div className="row w-100 g-0">

              <div className="col-8">

                <address>
  
                  {fields.options?.address}

                </address>

                <Link className="footer-link" href={`tel:${fields.options?.phone}`}>{fields.options?.phone}</Link>

              </div>

              <div className="col-8 d-flex mt-3">

                <Link aria-label="LinkedIn" href={`${fields.options?.linked_in}`}>
                        
                  <Linkedin/>
        
                </Link>

              </div>

              <div className="col-12">

                <Year/>

              </div>

              <div className="col-12 d-flex flex-wrap justify-content-end mt-3">

                <button onClick={scroll_to} className="top" aria-label="Return to top">

                  <ArrowUp/>

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
            
    </footer>

  );
};

export default Footer;