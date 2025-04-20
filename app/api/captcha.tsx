"use server"
import {createCanvas} from "canvas";
import {cookies} from "next/headers";
import bcrypt from "bcrypt";

const init = () => {

  const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let text = "";
  
  const randomColor = () => {
  
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    return `rgb(${r},${g},${b})`;
  };

  const canvas = createCanvas(140, 50);
  text = "";

  for (let i = 1; i <= 7; i++) {

    text += alpha[Math.floor(Math.random() * alpha.length)];
  }

  const context = canvas.getContext("2d");
  context.font = "25px Bold";

  let i = text.length;

  while (i--) {

    const sDeg = (Math.random() * 45 * Math.PI) / 180;
    const x = (i * 18) + 8;
    const y = (Math.random() * 10) + 25;

    context.translate(x, y);
    context.rotate(sDeg);
    context.fillStyle = randomColor();
    context.fillText(text[i], 0, 0);
    context.rotate(-sDeg);
    context.translate(-x, -y);
  };

  for (let i = 0; i < 5; i++) {

    context.strokeStyle = randomColor();
    context.beginPath();
    context.moveTo(
      Math.random() * canvas.width,
      Math.random() * canvas.height
    );
    context.lineTo(
      Math.random() * canvas.width,
      Math.random() * canvas.height
    );
    context.stroke();
  };

  for (let i = 0; i < 70; i++) {

    context.strokeStyle = randomColor();
    context.beginPath();
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    context.moveTo(x, y);
    context.lineTo(x + 1, y + 1);
    context.stroke();
  };

  return {canvas: canvas.toDataURL(), text: text};
};

type StateSetCaptcha = {
  message: string,
  captcha: string,
  setcode: boolean,
};

export const SetCaptcha = async (stateSetCaptcha: StateSetCaptcha, formData: FormData) => {

  const data = {
    captcha: formData.get("captcha"),
  };

  const cookieStore = await cookies();
  const cookie = cookieStore.get("Store-App-Captcha").value;
  const text = data.captcha as string;
  const match = await bcrypt.compare(text.toLowerCase(), cookie as string);

  if(match) {

    return {
      message: "",
      captcha: "",
      setcode: false,
    };
  };

  return {
    message: "Incorrect",
    captcha: "",
    setcode: true,
  };
};

export const GetCaptcha = async () => {

  const res = await init();
  const salt = bcrypt.genSaltSync(10);
  const text = res.text;
  const hash = bcrypt.hashSync(text, salt);
  const cookieStore = await cookies();
  cookieStore.set("Store-App-Captcha", hash, {secure: true, httpOnly: true, sameSite: "strict"});
  return res.canvas;
};