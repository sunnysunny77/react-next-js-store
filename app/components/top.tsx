"use client"

import { ArrowUp } from "react-bootstrap-icons";

const Top = () => {

  const scroll_to = () => {

    window.scrollTo(0, 0);
  }
  
  return (

    <a onClick={scroll_to} className="top" aria-label="Return to top">
                  
      <ArrowUp />
      
    </a>

  );
};

export default Top;
