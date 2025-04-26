import parse from "html-react-parser";

const PreText = (props) => {

    const {text} = props;

    let output;

    if (text) {

      output = parse(text);
    
    }
    return (

      <>
      
       {output}

      </>

    );
  };
  
  export default PreText;