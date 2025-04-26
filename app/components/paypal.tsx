"use client"
import {useState, useRef, useEffect} from "react";
import {useSubContext, useAppContext} from "@/components/context";
import {ArrowDownShort} from "react-bootstrap-icons";
import type { PayPalNamespace } from "@paypal/paypal-js";
import Spinner from "@/images/spinner.gif";
import Script from "next/script";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "@/module/paypal.module.scss";

declare global {
  interface Window {
    paypal?: PayPalNamespace;
  }
}

// fixed hydradion bug waiting for update
const Select = dynamic(() => import("react-select/creatable"), {ssr: false});

const Paypal = () => {

  const {order, items, setOrder, options, count, setCount, cart, setCart, output, setOutput, disabled, setDisabled, total, setTotal, show, setShow} = useSubContext();

  const {setScrollingRef} = useAppContext();

  const [outputBool, setOutputBool] = useState(false);

  const [smartButton, setSmartButton] = useState(undefined);

  const outputRef = useRef(null);

  const smartRef = useRef(null);

  const SCRIPT_PROVIDER_OPTIONS = {
    clientId: process.env.NEXT_PUBLIC_REACT_APP_PAYPAL_ID,
    currency: "AUD",
  };

  const removeCart = (e) => {

    const obj = {...cart};

    delete obj[e];

    setCart(obj);

    if (Object.keys(obj).length === 0) {

      setDisabled(true);
      setShow(true);
    };
  };

  const optionOrder = (e) => {

    setOrder(items[e.currentTarget.getAttribute("data-value")]);
  };

  const selectOrder = (e) => {

    setOrder(items[e.value]);
  };

  const init = (obj, reset) => {

    if (smartButton !== undefined) smartButton.close();

    let total = 0;

    for (const index in obj) {

      total = total + (obj[index].quantity * obj[index].unit_amount.value);
    };

    const items = Object.keys(obj).map((index) => obj[index]);

    const button = window.paypal?.Buttons({

      style: {
        layout: "horizontal",
        color: "silver",
        shape: "pill",
        label: "pay",
        tagline: false,
        disableMaxWidth: true,
        height: 35,
        borderRadius: 35,
      },

      createOrder: async (data, actions) => {

        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [{
            description: "Securewebsite Transaction",
            amount: {
              currency_code: "AUD",
              value: String(total),
              breakdown: {
                item_total: {
                  currency_code: "AUD",
                  value: String(total),
                },
              },
            },
            items: [
              ...items,
            ],
          }],
        });
      },

      onApprove: async (data, actions) => {

        const order = await actions.order.capture();

        const units = order.purchase_units[0];

        const transaction = order.id;

        const caption = units.description;

        const shipping = units.shipping;

        const name = shipping.name.full_name;

        const addressObj = shipping.address;

        const itemsObj = units.items;

        let address = "";

        for (const index in addressObj) {

          address += `${addressObj[index]} `;
        };

        const itemsOutput = {};

        for (const index in itemsObj) {

          const quantity = itemsObj[index].quantity;

          const value = itemsObj[index].unit_amount.value;

          const name = itemsObj[index].name;

          const description = itemsObj[index].description;

          itemsOutput[index] = {quantity, name, value, description};
        };

        const total = `$ ${units.amount.value}`;

        setTotal(0);

        setCount(1);

        setCart({});

        setDisabled(true);

        setShow(true);

        setOutput({caption: caption, transaction: transaction, name: name, address: address, itemsOutput: itemsOutput , total: total});

        setOutputBool(true);

        setOrder(reset);
      },

      onError: (err) => {
        console.log(err);
      },
    });

    button.render(smartRef.current);

    setTotal(total);

    setSmartButton(button);

  };

  const addCart = async () => {

    setShow(true);

    const obj = {
      ...cart,
      [order.name]: {
        description: order.description,
        name: order.name,
        unit_amount: {
          currency_code: "AUD",
          value: order.value,
        },
        quantity: count,
        ref: order.ref,
      },
    };


    init(obj, items["cart0"]);

    setCart(obj);

    setCount(1);

    setOutput({});

    setDisabled(false);

    setTimeout(()=>setShow(false),888);
  };

  const minus = () => {

    if (count > 1) setCount(count - 1);
  };

  const plus = () => {

    setCount(count + 1);
  };

  const srcListen = (e) => {

    const obj = e.currentTarget;

    obj.classList.add("fade");

    setTimeout(()=>{

      obj.classList.remove("fade");
    }, 100);
  };

  const imageLoader = ({src, width}) => {

    return `${src}?w=${width}`;
  };

  useEffect(() => {

    if (outputBool && outputRef) {

      setScrollingRef(outputRef);
    }
    return () => {

      setOutputBool(false);
    }
  }, [outputBool, outputRef, setScrollingRef]);

  return (

    <>

      <Script src={`https://www.paypal.com/sdk/js?client-id=${SCRIPT_PROVIDER_OPTIONS.clientId}&currency=${SCRIPT_PROVIDER_OPTIONS.currency}`} onReady={()=>init(cart, items["cart0"])}/>

      <div className="paypal container-md d-flex align-items-center pt-5 px-4 px-sm-5 px-md-0 my-sm-4 g-0">

        <div className="row justify-content-center w-100 g-0">

          <div className="col-12 col-md-10">

            <div className="row justify-content-between w-100 g-0">

              <div className="col-12 order-1">

                <h3 className="m-0 pb-4">

                  {`${order?.name} $ ${order?.value}`}

                </h3>

              </div>

              <div className="bg col-12 col-xl-8 order-3 order-xl-2">

                <p className="p-4 m-0 pe-xl-5">

                  <b className="d-block pb-4">

                    {order?.sub}

                  </b>
                  
                  {order?.description}

                </p>

              </div>

              <div className="bg col-12 col-xl-4 order-2 order-xl-3">

                <label className="w-100 py-1 px-3" htmlFor="select">

                  <ArrowDownShort className="me-2"/>

                  Choose an option

                </label>

                <Select

                  inputId="select"

                  value={order?.ref}

                  onChange={selectOrder}

                  options={options}

                  isSearchable={false}

                  styles={{

                    menu: (provided) => ({

                      ...provided,

                      borderRadius: "0",

                      margin: "0",

                      color: styles.echo,

                      backgroundColor: styles.charlie,

                      boxShadow: "none",

                      border: "0",
                    }),

                    menuList: (provided) => ({

                      ...provided,

                      padding: "0",
                    }),

                    option: (provided) => ({

                      ...provided,

                      color: styles.echo,

                      fontSize: "16px",

                      cursor: "pointer",

                      backgroundColor: styles.charlie,

                      transition: "background-color 0.3s",

                      willChange: "background-color",

                      "&:hover": {

                        backgroundColor: styles.november,
                      },
                    }),

                    control: (provided) => ({

                      ...provided,

                      borderRadius: "0",

                      border: "0",

                      boxShadow: "none",

                      backgroundColor: styles.charlie,

                      color: styles.echo,

                      cursor: "pointer",

                      fontSize: "16px",

                      opacity: "1",

                      transition: "opacity 0.3s",

                      willChange: "opacity",

                      "&:hover": {

                        opacity: "0.9",
                      },
                    }),
                  }}

                  components={{DropdownIndicator:() => null, IndicatorSeparator:() => null}}

                />

              </div>

            </div>

          </div>

          <div className="bg col-12 col-md-10">

            <div className="row justify-content-center align-items-xl-center pb-4 pb-md-5 pb-xl-0 pe-xl-5 g-0">

              <div className="order-image col-10 col-md-4 my-5 p-0">

                {order?.image ? <Image onLoad={srcListen} src={order.image} loader={imageLoader}  alt="Food" width="366" height="366"/> : null}

              </div>

              <div className="counter col-6 col-xl-3 d-flex flex-xl-column justify-content-center align-items-center">

                <span

                  className="text-center"
                  role="button"
                  onClick={minus}

                >

                  -

                </span>

                <label aria-label="Quantity" htmlFor="count" className="hidden">

                  Quantity

                </label>

                <input disabled={true} id="count" className="text-center m-4 mx-xl-0" type="text" value={count}/>

                <span

                  className="text-center"
                  role="button"
                  onClick={plus}

                >

                  +

                </span>

              </div>

              <button

                className="button-container-inner col-10 col-xl-5"

                onClick={addCart}

              >

                {Object.keys(cart).includes(order?.name) ? (

                    "update"

                  ) : (

                    "add"
                  )

                }

              </button>

            </div>

          </div>

          <div className="bg col-12 col-md-10">

            <div className="row justify-content-center justify-content-xl-end pb-5 pe-xl-5 g-0">

              <div className="col-12 col-xl-7 d-flex align-items-stretch align-items-xl-center justify-content-evenly pb-4 px-4 px-md-5 pb-xl-0">

                <div className="flex-fill h-100">

                  <ul className="list-unstyled h-100 d-flex flex-column justify-content-around m-0">

                    {Object.keys(cart).map((index, i) => {

                      const {quantity, name, unit_amount: {value}, ref} = cart[index];

                      return (

                          <li

                          key={i}

                          className="d-flex flex-column flex-xl-row align-items-xl-center justify-content-xl-between mb-3"

                        >

                          <span

                            className="reSelect"

                            onClick={(e)=>optionOrder(e)}

                            data-value={ref.value}

                          >

                            {quantity} x {name}

                          </span>

                          <span>

                            $ {quantity * value}

                          </span>

                        </li>

                      )

                    })}

                  </ul>

                </div>

                <div className="flex-fill h-100" >

                  <ul className="list-unstyled h-100 d-flex flex-column justify-content-around m-0">

                  {Object.keys(cart).map((index, i) => {

                      const {name} = cart[index];

                      return (

                        <li

                          key={i}

                          className="d-flex flex-column flex-xl-row mb-3"

                        >

                          <button

                            className="remove p-0 ms-4"

                            onClick={() =>removeCart(name)}

                          >

                            remove

                          </button>

                        </li>

                      )

                    })}

                  </ul>

                </div>

              </div>

              <div className="col-10 col-xl-5">

                {disabled ? <p className="button-container-inner mb-3"> no items </p> : <p className={`button-container-inner mb-3 ${show ? "show" : "d-none"}`}> <Image className="spinner" width="40" height="40" src={Spinner} alt="spinner"/></p>}

                <div ref={smartRef} className={`button-container-inner mb-3 ${show ? "d-none" : "show"}`}></div>

              </div>

              <div className="col-12 ps-4 ps-md-5 pt-4">

                <span className="total pe-2">

                  total

                </span>
                
                $ {total}

              </div>

            </div>

          </div>

          <div className={`col-12 col-md-10 ${disabled ? "show" : "hidden"}`}></div>

            {Object.keys(output).length > 0  &&

              <section ref={outputRef} className="col-12 col-md-10">

                <h3 className="m-0 pb-4 pt-5">

                  Order Complete

                </h3>

                <table>

                  <caption>

                    {output.caption}

                  </caption>

                  <thead>

                    <tr>

                      <th id="transaction">

                        Transaction

                      </th>

                      <th id="name">

                        Name:

                      </th>

                      <th id="address">

                        Address:

                      </th>

                      <th id="items">

                        Items:

                      </th>

                      <th id="total">

                        Total:

                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    <tr>

                      <td headers="transaction">

                        {output.transaction}

                      </td>

                      <td headers="name">

                        {output.name}

                      </td>

                      <td headers="address">

                        {output.address}

                      </td>

                      <td headers="items">

                        {Object.keys(output.itemsOutput).map((index, i) => {

                          const {quantity, name, value, description} = output.itemsOutput[index];

                          return (
                        
                            <div className="mt-3" key={i}>

                              <div className="mb-2">

                                <div className="mb-1">

                                  {quantity} x {name} &nbsp; $ {value * quantity}

                                </div>

                                <div>

                                  {description}

                                </div>

                              </div> 

                            </div>

                          )

                        })}

                      </td>

                      <td headers="total">

                        {output.total}

                      </td>

                    </tr>

                  </tbody>

                </table>

              </section>

            }

        </div>

      </div>

    </>

  );
};

export default Paypal;