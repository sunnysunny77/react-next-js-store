"use client"
import { useEffect } from "react";

const DynamicAccordian = (props) => {

    const { content } = props;

    useEffect(() => {

      import("bootstrap/js/dist/collapse");
    }, []);
  
    return (
  
      <>
  
        <div className="dynamic-accordian"> 
  
          <div className="accordion">
  
            {content.map((index, i) => { 
  
                const { heading, body } = index; 
 
                return (
  
                  <div key={i} className="accordion-item" id="dynamic-accordian">
  
                    <h2 className="accordion-header">

                      <button className="accordion-button" type="button"  data-bs-toggle="collapse" aria-expanded={i === 0 ? "true" : "false"} aria-controls={`collapse-${i}`} data-bs-target={`#collapse-${i}`}> 

                        { heading }

                      </button>
  
                    </h2>
  
                    <div id={`collapse-${i}`} className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`} data-bs-parent="#dynamic-accordian">
   
                      <div className="accordion-body">

                        <ul>
    
                          {body.map((index, i) => { 
                            
                            return (
    
                              <li key={i} className="mb-3">
    
                                { index }
    
                              </li>
                            );
                          })}
    
                        </ul>

                      </div>
    
                    </div>
  
                  </div>
  
                );
  
            })}
  
          </div>
  
        </div>
  
      </>
      
    );
  };
  
  export default DynamicAccordian;