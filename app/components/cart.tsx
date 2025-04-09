"use-client"
import { useState } from "react";
import Basil from "./basil.webp";
import Broccoli from "./broccoli.webp";
import Chitto from "./chitto.webp";
import Cucumbers from "./cucumbers.webp";
import Fruits from "./fruits.webp";
import Schwab from "./schwab.webp";

const Cart = () => {

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
    

    return;
};

export default Cart;