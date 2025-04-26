"use client"
import {createContext, useContext, useState, useEffect} from "react";
import {usePathname} from "next/navigation";
import {getFields} from "@/api/getFields";
import GetCookie from "@/api/get-cookie";
import LogOut from "@/api/log-out";

const AppContext = createContext(null);

const SubContext = createContext(null);

export const AppWrapper = ({
  children,
}: {
  children: React.ReactNode,
}) => {

  const pathname = usePathname();

  const [scrollingRef, setScrollingRef] = useState({current: null});

  const [auth, setAuth] = useState(false);

  const [holdScrollCta, setHoldScrollCta] = useState(false);

  const [holdScrollCard, setHoldScrollCard] = useState(false);

  const [bootstrap, setBootstrap] = useState(undefined);

  const [route, setRoute] = useState(pathname);

  const checkCookie = async () => {

    const cookie = await GetCookie();
    setAuth(cookie);
  };

  const log_out = () => {

    setScrollingRef({current: null});
    setHoldScrollCta(false);
    setHoldScrollCard(false);
    setAuth(false);
    LogOut();
  };

  useEffect(() => {

    if (pathname !== route && scrollingRef.current === null)  {

      setRoute(pathname);
      window.scroll({top: 0, left: 0, behavior: "instant"});
    }
  },[pathname, route, scrollingRef]);

  useEffect(() => {

    if (scrollingRef.current !== null) window.scroll({top: scrollingRef.current.offsetTop || 0, left: 0, behavior: "smooth"});
  },[scrollingRef]);

  useEffect(() => {

    if(!bootstrap) {

      const sync = async () => {

        const bootstrapJs = await import("bootstrap");
        setBootstrap(bootstrapJs);
      };
      sync();
    };
  }, [bootstrap]);

  return (

    <AppContext.Provider value={{bootstrap, scrollingRef, setScrollingRef, auth, checkCookie, log_out, holdScrollCta, setHoldScrollCta, holdScrollCard, setHoldScrollCard}}>

      {children}

    </AppContext.Provider>

  );
};

export const useAppContext = () => {
  
  return useContext(AppContext);
};

export const SubWrapper = ({
  children,
}: {
  children: React.ReactNode,
}) => {


  const [items, setItems] = useState({});

  const [options, setOptions] = useState([]);

  const [order, setOrder] = useState({});

  const [count, setCount] = useState(1);

  const [output, setOutput] = useState({});

  const [disabled, setDisabled] = useState(true);

  const [show, setShow] = useState(true);

  const [cart, setCart] = useState({});

  const [total, setTotal] = useState(0);

  const [fieldsLoad, setFieldsLoad] = useState(false);

  const [fields, setFields] = useState({});

  useEffect(()=>{

      const syncFields = async () => {

        const Fields = await getFields();

        setItems(Fields.items);

        setOptions(Fields.select);

        setOrder(Fields.items["cart0"]);

        setFields(Fields);

        setFieldsLoad(true);
      };

      syncFields();
  },[])

  return (

    <SubContext.Provider value={{fieldsLoad, fields, order, options, setOrder, items, count, setCount, cart, setCart, output, setOutput, disabled, setDisabled, total, setTotal, show, setShow}}>

      {children}

    </SubContext.Provider>

  );
};

export const useSubContext = () => {

  return useContext(SubContext);
};