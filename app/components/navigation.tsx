"use client"
import { useAppContext } from "@/components/context";
import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";

const Navigation = () => {

  const { mainRef, footerRef, scrollingRef, setScrollingRef, auth, log_out } = useAppContext();

  const navbar = useRef(null);
  const navbar_toggler = useRef(null);
  const navbar_collapse = useRef(null);
  const navbar_list = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [positive, setPositive] = useState(true);
  const height = 83;

  const toggle = () => {

    navbar_toggler.current.classList.toggle("has-collapsed");
    navbar.current.classList.toggle("has-collapsed");
  };

  const handle_navigationigation = useCallback(() => {

    const top = mainRef.current.offsetTop;

    const scroll_pos = window.scrollY;

    console.log(scrollingRef)
    if (scroll_pos === scrollingRef) {

      setScrollingRef(null);
    }

    if (scrollingRef !== null) {

      navbar.current.classList.remove("has-float");
      navbar.current.classList.add("has-positive");
      navbar.current.classList.remove("has-negative");
       return;
    }

    if (scroll_pos < height) {

      navbar.current.classList.remove("has-float");
      navbar.current.classList.remove("has-positive");
      navbar.current.classList.remove("has-negative");
      navbar_toggler.current.classList.remove("has-collapsed");
      navbar.current.classList.remove("has-collapsed");
    }  else if (scroll_pos > height && scroll_pos < (top - height )) {

      navbar.current.classList.add("has-float");
      navbar.current.classList.remove("has-positive");
      navbar.current.classList.remove("has-negative");
      navbar_toggler.current.classList.remove("has-collapsed");
      navbar.current.classList.remove("has-collapsed");
    } else if (scroll_pos > (top - height) && positive || scroll_pos > (footerRef.current.offsetTop - height)) {

      navbar.current.classList.remove("has-float");
      navbar.current.classList.add("has-positive");
      navbar.current.classList.remove("has-negative");
      navbar_toggler.current.classList.remove("has-collapsed");
      navbar.current.classList.remove("has-collapsed");
    } else if (scroll_pos > (top - height) && !positive) {

      navbar.current.classList.remove("has-float");
      navbar.current.classList.remove("has-positive");
      navbar.current.classList.add("has-negative");
    };

    if (scroll_pos > scrollY) {

      setPositive(true);
    } else if (scroll_pos < scrollY) {

      setPositive(false);
    };

    setScrollY(scroll_pos);
  },[footerRef, mainRef, positive, scrollY, scrollingRef, setScrollingRef]);

  const set_scroll = () => {

    setScrollingRef(0);
  };

  useEffect(() => {

    window.addEventListener("scroll", handle_navigationigation, { passive: true });
    window.addEventListener("resize", handle_navigationigation, { passive: true });
    return () => {

      window.removeEventListener("scroll", handle_navigationigation);
      window.removeEventListener("resize", handle_navigationigation);
    };
  }, [handle_navigationigation]);

  return (  

    <nav ref={navbar} className="container-fluid slider_8-navigation navigation d-flex align-items-start p-0">

      <div className="row w-100 justify-content-between m-0 g-0">

        <Link scroll={false} className="col-auto m-3"  href="/">

          <svg aria-label="Super Foods" viewBox="0 0 100 100" width="50" height="50">

            <defs>

                <path 

                  id="circle"
                  d="M 50, 50
                  m -37, 0
                  a 37,37 0 1,1 74,0
                  a 37,37 0 1,1 -74,0"
                    
                />

            </defs>

            <text className="font">

                <textPath href="#circle">

                  Super --- Food ----------

                </textPath>

            </text>

          </svg>

        </Link>

        <div ref={navbar_toggler} onClick={toggle} aria-label="menu" role="button" className="col-auto d-flex align-items-center slider_8-navbar-toggler navbar-toggler  p-4" >

          <div>

              <div className="slider_8-bar slider_nav-bar-1"></div>

              <div className="slider_8-bar slider_nav-bar-2"></div>

              <div className="slider_8-bar slider_nav-bar-3"></div>

          </div>

        </div>

        <div ref={navbar_collapse} className="col-12 slider_8-navbar-collapse navbar-collapse py-1">

          <ul ref={navbar_list} className="list-unstyled ms-3 my-3">

            <li>
              
              <Link onClick={set_scroll} className="navigation-link" href="/">
              
                Home 
                
              </Link>
              
            </li>

            <li>
              
              <Link onClick={set_scroll} className="navigation-link" href={auth ? "/store" : "/auth"}>
              
                Store 
                
              </Link>
              
            </li>

            <li>

              {auth ? (

                <button onClick={log_out} className="navigation-link">

                  Sign Out

                </button>

              ) : (

              <Link onClick={set_scroll} className="navigation-link" scroll={false} href="/auth">

                Sign In

              </Link>

              )}

            </li>
        
          </ul>

        </div>

      </div>

    </nav>
    
  );
};

export default Navigation;
