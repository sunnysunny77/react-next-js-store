"use client"
import { useEffect } from "react";
import { useAppContext } from "@/components/context";

const Init = () => {

  const { scrollingRef } = useAppContext();

  useEffect(() => {

    if (scrollingRef !== null) {

      window.scroll({ top: scrollingRef, behavior: "instant" });
    }
  },[scrollingRef])

  return null;
};

export default Init;