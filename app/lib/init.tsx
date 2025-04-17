"use client"
import { useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";

const Init = () => {

  useEffect(() => {

    OverlayScrollbars(document.body, {

      scrollbars: {
        theme: "os-theme-body",
    }});
  },[])

  return null;
};

export default Init;