import { useEffect } from "react";
import { useAppContext } from "@/components/context";

const Scroll = () => {

  const { scrollingRef } = useAppContext();

  useEffect(() => {

    if (scrollingRef !== null) {

      scroll({ top: scrollingRef, behavior: "smooth" });
    }

  }, [scrollingRef]);

  return null;
};

export default Scroll;
