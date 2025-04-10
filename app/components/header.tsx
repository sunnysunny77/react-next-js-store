"use client"
import { useAppContext } from "@/components/context";

const Header = () => {

  const { heading, large } = useAppContext();
  
  return (
    
    <header className="container-fluid row g-0">
    
        <div className="row position-relative overflow-hidden g-0">

            <div className="col-12 bg-1">

                <h1 className="py-3 px-4 m-0">
                  
                  {heading}
                  
                </h1>

            </div>

            <div className="shunt"></div>

        </div>

        {large}

    </header>

  );
};

export default Header;