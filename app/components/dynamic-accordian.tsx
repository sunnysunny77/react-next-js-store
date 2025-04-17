"use client"
import { useEffect, useRef } from "react";

const DynamicAccordian = (props) => {

    const { content } = props;

    const ref = useRef(null);

    useEffect(() => {

      const sync = async () => {

        const { Collapse } = await import("bootstrap");

        new Collapse(ref.current, {})
      };
      sync();
    }, []);
  
    return (
  
      <>
  
        <div className="dynamic-accordian"> 
  
          <div className="accordion">
  
            {content.map((index, i) => { 
  
                const { heading, body } = index; 
 
                return (
  
                  <div ref={ref} key={i} className="accordion-item" id="dynamic-accordian">
  
                    <h2 className="accordion-header">

                      <button className="accordion-button" type="button"  data-bs-toggle="collapse" aria-expanded={i === 0 ? "true" : "false"} aria-controls={`collapse-${i}`} data-bs-target={`#collapse-${i}`}> 

                        { heading }

                      </button>
  
                    </h2>
  
                    <div id={`collapse-${i}`} className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`} data-bs-parent="#dynamic-accordian">
   
                      <div className="accordion-body">

                        <ul className="ps-3">
    
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