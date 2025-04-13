"use client"
import { useAppContext } from "@/components/context";
import { useRef, useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {

  const { mainRef, footerRef, scrollingRef, setScrollingRef, auth, log_out } = useAppContext();

  const pathname = usePathname()
  const navbar = useRef(null);
  const navbar_toggler = useRef(null);
  const navbar_collapse = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [positive, setPositive] = useState(true);
  const [collapse, setCollapse] = useState(0);
  const [hasCollapse, setHasCollapse] = useState(true);
  const [top, setTop] = useState(0);
  const height = 83;

  const handle_bars = (has_collapsed) => {

    const wins = window.innerWidth < 768;

    for (const index of navbar_collapse.current.children[0].children) {

      Object.assign(index.style, {

        transition: wins ? "transform 0.375s" : "none",
        transform: has_collapsed && wins ? `translateY(-${navbar_collapse.current.children.length}00%)` : "translateY(0)",
      });
    };

    Object.assign(navbar_toggler.current.children[0].children[0].style, {

      transition: "transform 0.375s",
      transform: has_collapsed ? "none" : "translate(0, 7px) rotate(-45deg)",
    });

    Object.assign(navbar_toggler.current.children[0].children[1].style, {

      transition: "opacity 0.375s",
      opacity: has_collapsed ? 1 : 0,
    });

    Object.assign(navbar_toggler.current.children[0].children[2].style, {

      transition: "transform 0.375s",
      transform: has_collapsed ? "none" : "translate(0, -7px) rotate(45deg)",
    });
  };
  
  const toggle = () => {

    const max_height = !hasCollapse ? height : navbar.current.scrollHeight;
    
    Object.assign(navbar.current.style, {

      transition: "top 0.375s, max-height 0.375s",
      maxHeight: `${max_height}px`,
    });

    setHasCollapse(!hasCollapse);
    setCollapse(max_height);
    handle_bars(!hasCollapse);
  };

  const handle_navigationigation = useCallback(() => {

    const obj: {
      zIndex: string,
      top: string, 
      width: string,
      position: string, 
      borderBottom: string,
      transition: string,
      maxHeight: string,
    } = {
      zIndex: "1001",
      position: window.innerWidth >= 768 ? "absolute" : "static",
      top: window.innerWidth >= 768 ? "0px" : "initial",
      width: window.innerWidth >= 768 ? "300px" : "100%",
      borderBottom: window.innerWidth >= 768 ? "none" : "1px solid #dee2e6",
      transition: "max-height 0.375s",
      maxHeight: `${height}px`,
    };

    const scroll_pos = window.scrollY;

    if (scroll_pos < height) {

      obj.zIndex = "1001";
      obj.position = window.innerWidth >= 768 ? "absolute" : "static";
      obj.top = window.innerWidth >= 768 ? "0px" : "initial";
      obj.width = window.innerWidth >= 768 ? "300px" : "100%";
      obj.borderBottom = window.innerWidth >= 768 ? "none" : "1px solid #dee2e6";
      obj.transition = "max-height 0.375s";
      obj.maxHeight = `${height}px`;
      setHasCollapse(true);
      setCollapse(height);
      handle_bars(true);
      document.body.style.paddingTop = "";
    } else if (scroll_pos > top && scroll_pos < top + height && !positive) {

      obj.zIndex = "999";
      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.width = "100%";
      obj.borderBottom = "1px solid #dee2e6";
      obj.transition = "top 0.375s, max-height 0.375s";
      obj.maxHeight = `${height}px`;
      setHasCollapse(true);
      setCollapse(height);
      handle_bars(true);
      document.body.style.paddingTop = window.innerWidth >= 768 ? "" : `${height}px`;
    } else if (scroll_pos > height && scroll_pos < top + height) {

      obj.zIndex = "999";
      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.width = "100%";
      obj.borderBottom = "1px solid #dee2e6";
      obj.transition = "none";
      obj.maxHeight = `${height}px`;
      setHasCollapse(true);
      setCollapse(height);
      handle_bars(true);
      document.body.style.paddingTop = window.innerWidth >= 768 ? "" : `${height}px`;
    } else if ((scroll_pos > top + height && positive) || ( scroll_pos > footerRef.current.offsetTop - height)) {

      obj.zIndex = "999";
      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.width = "100%";
      obj.borderBottom = "1px solid #dee2e6";
      obj.transition = "top 0.375s, max-height 0.375s";
      obj.maxHeight = "0px";
      setHasCollapse(true);
      setCollapse(height);
      handle_bars(true);
      document.body.style.paddingTop = window.innerWidth >= 768 ? "" : `${height}px`;
    } else {
  
      obj.zIndex = "999";
      obj.position = "fixed";
      obj.top = Number.isInteger(scrollingRef) ? `-${height}px` : "0px";
      obj.width = "100%";
      obj.borderBottom = "1px solid #dee2e6";
      obj.transition = "top 0.375s, max-height 0.375s";
      obj.maxHeight = `${collapse}px`;
      document.body.style.paddingTop = window.innerWidth >= 768 ? "" : `${height}px`;
    };

    Object.assign(navbar.current.style, obj);

    if (scroll_pos > scrollY) {

      setPositive(true);
    } else if (scroll_pos < scrollY) {

      setPositive(false);
    };

    if (scroll_pos === scrollingRef) {

      setScrollingRef(false);
    }

    setScrollY(scroll_pos);

  },[scrollY, collapse, footerRef, positive, scrollingRef, setScrollingRef, top]);

  useEffect(() => {

    if (!navbar_toggler.current.classList.contains("has-collapsed")) {

      Object.assign(navbar.current.style, {

        transition: "top 0.375s, max-height 0.375s",
        maxHeight: `${height}px`,
      });

      setHasCollapse(true);
      setCollapse(height);
      handle_bars(true);
    }
    setScrollingRef(0);
  }, [pathname, setScrollingRef]);

  useEffect(() => {

    setTop(mainRef.current.offsetTop + (navbar.current.scrollHeight - navbar_collapse.current.scrollHeight));
    window.addEventListener("scroll", handle_navigationigation, { passive: true });
    window.addEventListener("wheel", handle_navigationigation, { passive: true });
    window.addEventListener("resize", handle_navigationigation, { passive: true });
    return () => {

      window.removeEventListener("scroll", handle_navigationigation);
      window.removeEventListener("wheel", handle_navigationigation);
      window.removeEventListener("resize", handle_navigationigation);
    };
  }, [handle_navigationigation, mainRef]);

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

        <div ref={navbar_toggler} onClick={toggle} aria-label="menu" role="button" className="col-auto d-flex align-items-center slider_8-navbar-toggler navbar-toggler p-4" >

          <div>

              <div className="slider_8-bar"></div>

              <div className="slider_8-bar"></div>

              <div className="slider_8-bar"></div>

          </div>

        </div>

        <div ref={navbar_collapse} className="col-12 slider_8-navbar-collapse navbar-collapse py-1">

          <ul className="list-unstyled ms-3 my-3">

            <li>
              
              <Link className="navigation-link" scroll={false} href="/">
              
                Home 
                
              </Link>
              
            </li>

            <li>
              
              <Link className="navigation-link" scroll={false} href={auth ? "/store" : "/auth"}>
              
                Store 
                
              </Link>
              
            </li>

            <li>

              {auth ? (

                <div onClick={log_out} className="navigation-link">

                  Sign Out

                </div>

              ) : (

              <Link className="navigation-link" scroll={false} href="/auth">

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
