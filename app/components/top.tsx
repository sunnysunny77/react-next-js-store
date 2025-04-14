"use client"
import { ArrowUp } from "react-bootstrap-icons";

const Top = (props) => {

  const { obj } = props;

  const scroll_to = () => {

    obj.current.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (

    <button onClick={scroll_to} className="top" aria-label="Return to top">
                  
      <ArrowUp />
      
    </button>

  );
};

export default Top;
