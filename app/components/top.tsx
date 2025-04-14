"use client"
import { ArrowUp } from "react-bootstrap-icons";

const Top = () => {

  const scroll_to = () => {

    window.scrollTo(0, 0);
  }
  
  return (

    <div onClick={scroll_to} className="top" aria-label="Return to top">
                  
      <ArrowUp />
      
    </div>

  );
};

export default Top;
