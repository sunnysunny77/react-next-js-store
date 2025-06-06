"use client"
import {useAppContext , useSubContext} from "@/components/context";
import {useRef, useEffect, useState, useCallback} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navigation = (props) => {

  const {mainRef, footerRef} = props;

  const {scrollingRef, setScrollingRef, auth, log_out} = useAppContext();

  const {fields} = useSubContext();

  const pathname = usePathname();

  const navbar_static = useRef(null);
  const navbar_container = useRef(null);
  const navbar_toggler_static = useRef(null);
  const navbar_collapse_static = useRef(null);
  const navbar_fixed = useRef(null);
  const navbar_toggler_fixed = useRef(null);
  const navbar_collapse_fixed = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [positive, setPositive] = useState(true);
  const height = 83;

  const imageLoader = ({src, width}) => {

    return `${src}?w=${width}`;
  };

  const toggle_static = () => {

    navbar_toggler_static.current.classList.toggle("has-collapsed");
    navbar_static.current.classList.toggle("has-collapsed");
    navbar_container.current.classList.toggle("has-collapsed");
  };

  const toggle_fixed = () => {

    navbar_toggler_fixed.current.classList.toggle("has-collapsed");
    navbar_fixed.current.classList.toggle("has-collapsed");
  };

  const handle_navigationigation = useCallback(() => {

    const top = mainRef.current?.offsetTop;

    const scroll_pos = window.scrollY;

    if (scrollingRef.current !== null && scroll_pos === scrollingRef.current.offsetTop) setScrollingRef({current: null});

    if (scrollingRef.current !== null) {

      navbar_fixed.current?.classList.remove("has-float");
      navbar_fixed.current?.classList.add("has-positive");
      navbar_fixed.current?.classList.remove("has-negative");
      return;
    }

    if (scroll_pos < top) {

      navbar_fixed.current?.classList.remove("has-float");
      navbar_fixed.current?.classList.remove("has-positive");
      navbar_fixed.current?.classList.remove("has-negative");
      navbar_toggler_fixed.current?.classList.remove("has-collapsed");
      navbar_fixed.current?.classList.remove("has-collapsed");
    } else if (scroll_pos > top && scroll_pos < (top + height)) {

      navbar_fixed.current?.classList.add("has-float");
      navbar_fixed.current?.classList.remove("has-positive");
      navbar_fixed.current?.classList.remove("has-negative");
      navbar_toggler_fixed.current?.classList.remove("has-collapsed");
      navbar_fixed.current?.classList.remove("has-collapsed");
    } else if ((scroll_pos > (top + height) && positive) || (scroll_pos > (footerRef.current?.offsetTop - height))) {

      navbar_fixed.current?.classList.remove("has-float");
      navbar_fixed.current?.classList.add("has-positive");
      navbar_fixed.current?.classList.remove("has-negative");
      navbar_toggler_fixed.current?.classList.remove("has-collapsed");
      navbar_fixed.current?.classList.remove("has-collapsed");
    } else if (scroll_pos > (top + height) && !positive) {

      navbar_fixed.current?.classList.remove("has-float");
      navbar_fixed.current?.classList.remove("has-positive");
      navbar_fixed.current?.classList.add("has-negative");
    };

    if (scroll_pos > scrollY) {

      setPositive(true);
    } else if (scroll_pos < scrollY) {

      setPositive(false);
    };

    setScrollY(scroll_pos);
  },[footerRef, mainRef, positive, scrollY, scrollingRef, setScrollingRef]);

  const handle_end = useCallback(() => {

    if (scrollingRef.current !== null) setScrollingRef({current: null});
  },[setScrollingRef, scrollingRef]);

  useEffect(() => {

    window.addEventListener("touchmove", handle_end, {passive: true});
    window.addEventListener("scrollend", handle_end, {passive: true});
    window.addEventListener("scroll", handle_navigationigation, {passive: true});
    return () => {

      window.removeEventListener("touchmove", handle_end);
      window.removeEventListener("scrollend", handle_end);
      window.removeEventListener("scroll", handle_navigationigation);
    };
  }, [handle_navigationigation, handle_end]);

  return (

    <>

      <div ref={navbar_container} className="container-fluid slider_8-container g-0">

        <nav ref={navbar_static} className="container-fluid slider_8-navigation navigation navigation-static scrolled-init left d-flex align-items-start p-0">

          <div className="row w-100 d-flex flex-row-reverse flex-md-row justify-content-between m-0 g-0">

            <Link className="col-auto m-3" href="/">

              {fields.options?.logo ? <Image priority className="d-block" src={fields.options?.logo} loader={imageLoader} alt={`${fields.options?.logo_alt}`} width="50" height="50"/> : null}

            </Link>

            <div ref={navbar_toggler_static} onClick={toggle_static} aria-label="menu" role="button" className="col-auto d-flex align-items-center slider_8-navbar-toggler navbar-toggler p-4">

              <div>

                  <div className="slider_8-bar slider_nav-bar-1"></div>

                  <div className="slider_8-bar slider_nav-bar-2"></div>

                  <div className="slider_8-bar slider_nav-bar-3"></div>

              </div>

            </div>

            <div ref={navbar_collapse_static} className="col-12 slider_8-navbar-collapse navbar-collapse py-1">

              <ul className="list-unstyled ms-3 my-3">

                <li>

                  <Link className={`navigation-link ${pathname === "/" ? "active" : ""}`} href="/">

                    {fields.options?.front_page}

                  </Link>

                </li>

                <li>

                  <Link className={`navigation-link ${pathname === "/store" || pathname === "/authentication" ? "active" : ""}`} href={auth ? "/store" : "/authentication"}>

                    {fields.options?.cart_page}

                  </Link>

                </li>

                <li>

                  {auth ? (

                    <button onClick={log_out} className="navigation-link">

                      {fields.options?.sign_out}

                    </button>

                  ) : (

                  <Link className="navigation-link" href="/authentication">

                    {fields.options?.sign_in}

                  </Link>

                  )}

                </li>

              </ul>

            </div>

          </div>

        </nav>

      </div>

      <nav ref={navbar_fixed} className="container-fluid slider_8-navigation navigation navigation-fixed has-float d-flex align-items-start p-0">

        <div className="row d-flex flex-row-reverse w-100 justify-content-between m-0 g-0">

          <Link className="col-auto m-3" href="/">

            {fields.options?.logo ? <Image className="d-block" src={fields.options?.logo} loader={imageLoader} alt={`${fields.options?.logo_alt}`} width="50" height="50"/> : null}

          </Link>

          <div ref={navbar_toggler_fixed} onClick={toggle_fixed} aria-label="menu" role="button" className="col-auto d-flex align-items-center slider_8-navbar-toggler navbar-toggler p-4">

            <div>

                <div className="slider_8-bar slider_nav-bar-1"></div>

                <div className="slider_8-bar slider_nav-bar-2"></div>

                <div className="slider_8-bar slider_nav-bar-3"></div>

            </div>

          </div>

          <div ref={navbar_collapse_fixed} className="col-12 slider_8-navbar-collapse navbar-collapse py-1">

            <ul className="list-unstyled ms-3 my-3">

              <li>
                
                <Link className={`navigation-link ${pathname === "/" ? "active" : ""}`} href="/">
                
                  {fields.options?.front_page}

                </Link>

              </li>

              <li>

                <Link className={`navigation-link ${pathname === "/store" || pathname === "/authentication" ? "active" : ""}`} href={auth ? "/store" : "/authentication"}>

                  {fields.options?.cart_page}

                </Link>

              </li>

              <li>

                {auth ? (

                  <button onClick={log_out} className="navigation-link">

                    {fields.options?.sign_out}

                  </button>

                ) : (

                <Link className="navigation-link" href="/authentication">

                  {fields.options?.sign_in}

                </Link>

                )}

              </li>

            </ul>

          </div>

        </div>

      </nav>

    </>
    
  );
};

export default Navigation;
