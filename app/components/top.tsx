import { ArrowUp } from "react-bootstrap-icons";

const Top = (props) => {

  const { obj } = props;

  const scroll_to = () => {

    scroll({ top:  obj.current.offsetTop, behavior: "smooth" });
  }
  
  return (

    <button onClick={scroll_to} className="top" aria-label="Return to top">
                  
      <ArrowUp />
      
    </button>

  );
};

export default Top;
