import { ArrowUp } from "react-bootstrap-icons";
import { useEffect, useCallback } from "react";
import { useAppContext } from "@/components/context";

const Top = (props) => {

  const { navbarRef } = props;

  const { scrollingRef } = useAppContext();

  const scroll_to = () => {

    scroll({ top: navbarRef.current.offsetTop,  behavior: "smooth" })
  };

  useEffect(() => {

    if (scrollingRef) scroll({ top: scrollingRef,  behavior: "smooth" })
  }, [scrollingRef]);

  useEffect(() => {

    if (!scrollingRef) scroll({ top: navbarRef.current.offsetTop,  behavior: "smooth" })
  }, [navbarRef]);

  return (

    <button onClick={scroll_to} className="top" aria-label="Return to top">
                  
      <ArrowUp />
      
    </button>

  );
};

export default Top;
