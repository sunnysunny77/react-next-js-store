"use client"
import {useEffect} from "react";
import {OverlayScrollbars} from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";

const Init = () => {

  useEffect(() => {

    import("bootstrap");

    OverlayScrollbars(document.body, {

      scrollbars: {
        theme: "os-theme-body",
    }});
  },[]);

  return null;
};

export default Init;