"use client"
import { useEffect } from "react";
import { useAppContext } from "@/components/context";

const Scroll = () => {

  const { scrollingRef } = useAppContext();

  useEffect(() => {

    if (scrollingRef.current !== null) {

      scrollingRef.current.scrollIntoView({ behavior: "smooth" })
    }
  },[scrollingRef])

  return null;
};

export default Scroll;