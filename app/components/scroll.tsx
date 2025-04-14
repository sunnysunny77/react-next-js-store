"use client"
import { useEffect } from "react";

const Scroll = (props) => {

  const { obj } = props;

  useEffect(() => {

    obj.current.scrollIntoView({ behavior: 'smooth' });
  }, [obj]);

  return null;
};

export default Scroll;