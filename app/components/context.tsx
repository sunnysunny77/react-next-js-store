"use client"
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import GetCookie from  "@/api/get-cookie";
import LogOut from  "@/api/log-out";
import Basil from "@/images/basil.webp";
import Broccoli from "@/images/broccoli.webp";
import Chitto from "@/images/chitto.webp";
import Cucumbers from "@/images/cucumbers.webp";
import Fruits from "@/images/fruits.webp";
import Schwab from "@/images/schwab.webp";

const AppContext = createContext(null);
const CartContext = createContext(null);

export const CartWrapper = ({
  children,
}: {
  children: React.ReactNode,
}) => {

  const items = {

    cartOne: {

      image: Fruits,
      value: "23",
      name: "In accumsan",
      sub: "Est diam",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue lectus nisl, vitae egestas orci laoreet mollis.",
    },

    cartTwo: {

      image: Broccoli,
      value: "15",
      name: "Eleifend eu",
      sub: "Dolor magn",
      description: "Vestibulum quam massa, cursus non eros ut, porttitor interdum tortor.",
    },

    cartThree: {

      image: Basil,
      value: "70",
      name: "Lectus eleifend",
      sub: "Lorem nec",
      description: "Donec porttitor mi ac mauris porttitor, sed placerat nulla vehicula. Nulla tempus sapien nibh, non euismod.",
      },

    cartFour: {

      image: Cucumbers,
      value: "17",
      name: "Phasellus et",
      sub: "Scelerisque lorem",
      description: "Curabitur malesuada molestie ante ut rutrum. Donec eu enim nibh. Quisque imperdiet vestibulum dui non feugiat.",
    },

    cartFive: {

      image: Schwab,
      value: "57",
      name: "Turpis posuere",
      sub: "Rutrum nec",
      description: "Nulla rutrum est in ex laoreet tincidunt. Nam laoreet massa at magna efficitur ultricies.",
    },

    cartSix: {

      image: Chitto,
      value: "33",
      name: "Accumsan Inn",
      sub: "lorem rutrum",
      description: "Morbi porta augue vitae tempor bibendum interdum euismod leo.",
    },
  };

  const options = [

    { value: 'cartOne', label: items.cartOne.name },
    { value: 'cartTwo', label: items.cartTwo.name },
    { value: 'cartThree', label: items.cartThree.name },
    { value: 'cartFour', label: items.cartFour.name },
    { value: 'cartFive', label: items.cartFive.name },
    { value: 'cartSix', label: items.cartSix.name }
  ];

  const cartOrder = {

    cartOne: () => {

      setOrder({

        ref: options[0],
        image: items.cartOne.image,
        value: items.cartOne.value,
        name: items.cartOne.name,
        sub: items.cartOne.sub,
        description: items.cartOne.description,
      });
    },

    cartTwo: () => {

      setOrder({

        ref: options[1],
        image: items.cartTwo.image,
        value: items.cartTwo.value,
        name: items.cartTwo.name,
        sub: items.cartTwo.sub,
        description: items.cartTwo.description,
      });
    },

    cartThree: () => {

      setOrder({

        ref: options[2],
        image: items.cartThree.image,
        value: items.cartThree.value,
        name: items.cartThree.name,
        sub: items.cartThree.sub,
        description: items.cartThree.description,
      });
    },

    cartFour: () => {

      setOrder({

        ref: options[3],
        image: items.cartFour.image,
        value: items.cartFour.value,
        name: items.cartFour.name,
        sub: items.cartFour.sub,
        description: items.cartFour.description,
      });
    },

    cartFive: () => {

      setOrder({

        ref: options[4],
        image: items.cartFive.image,
        value: items.cartFive.value,
        name: items.cartFive.name,
        sub: items.cartFive.sub,
        description: items.cartFive.description,
      });
    },

    cartSix:  () => {

      setOrder({
        ref: options[5],
        image: items.cartSix.image,
        value: items.cartSix.value,
        name: items.cartSix.name,
        sub: items.cartSix.sub,
        description: items.cartSix.description,
      });
    }
  };

  const [order, setOrder] = useState({

    ref: options[0],
    image: items.cartOne.image,
    value: items.cartOne.value,
    name: items.cartOne.name,
    sub: items.cartOne.sub,
    description: items.cartOne.description,
  });

  const [count, setCount] = useState(1);

  const [output, setOutput] = useState({});

  const [disabled, setDisabled] = useState(true);

  const [cart, setCart] = useState({});

  return (

    <CartContext.Provider value={{ order, cartOrder, options, items, count, setCount, cart, setCart, output, setOutput, disabled, setDisabled }}>

      {children}

    </CartContext.Provider>

  );
};

export const useCartContext = () => {

  return useContext(CartContext);
};

export const AppWrapper = ({
  children,
}: {
  children: React.ReactNode,
}) => {


  const pathname = usePathname();

  const [scrollingRef, setScrollingRef] = useState({current: null});

  const [auth, setAuth] = useState(false);

  const log_out = () => {

    setScrollingRef({current: null});
    LogOut();
    setAuth(false);
  };

  const [holdScrollCta, setHoldScrollCta] = useState(false);

  const [holdScrollCard, setHoldScrollCard] = useState(false);

  const [route, setRoute] = useState(pathname);

  const checkCookie = async () => {

    const cookie = await GetCookie();
    setAuth(cookie);
  };

  useEffect(() => {

    if (pathname !== route && scrollingRef.current === null)  {

      setRoute(pathname);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  },[pathname, route, scrollingRef])

  useEffect(() => {

    scrollingRef.current?.scrollIntoView({ behavior: "smooth" });
  },[scrollingRef]);

  return (

    <AppContext.Provider value={{ scrollingRef, setScrollingRef, auth, checkCookie, log_out, holdScrollCta, setHoldScrollCta, holdScrollCard, setHoldScrollCard }}>

      {children}

    </AppContext.Provider>

  );
};

export const useAppContext = () => {
  
  return useContext(AppContext);
};