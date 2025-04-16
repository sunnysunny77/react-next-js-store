import { ArrowUp } from "react-bootstrap-icons";
import { useEffect } from "react";

const Top = (props) => {

  const { obj } = props;

  const scroll_to = () => {

    scroll({ top:  obj.current.offsetTop, behavior: "smooth" });
  }

  useEffect(() => {

    scroll({ top:  obj.current.offsetTop, behavior: "smooth" });
  }, [obj]);

  return (

    <button onClick={scroll_to} className="top" aria-label="Return to top">
                  
      <ArrowUp />
      
    </button>

  );
};

export default Top;
