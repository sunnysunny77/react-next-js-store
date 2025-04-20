"use client"
import React, {useRef, useEffect} from "react";

const Year = () => {

  const year = useRef(null);

  useEffect(() => {

    const date = new Date();
    const year_date = date.getFullYear();
    year.current.innerHTML = year_date;
  }, []);

  return (

    <p className="mb-0 text-end year">

      &copy;&nbsp;<span ref={year} id="year"></span>

    </p>

  );
};

export default Year;