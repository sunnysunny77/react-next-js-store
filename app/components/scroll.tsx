"use client"
import { useEffect } from "react";

const Scroll = (props) => {

  const { obj } = props;

  useEffect(() => {

    scroll({ top: obj.current.offsetTop, behavior: 'smooth' });
  }, [obj]);

  return null;
};

export default Scroll;