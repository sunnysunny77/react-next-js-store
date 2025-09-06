"use server"
import {createCanvas} from "canvas";

let current = "";

const init = () => {

  const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

  let word = "";

  for (let i = 1; i <= 7; i++) {

    word += alpha[Math.floor(Math.random() * alpha.length)];
  }

  const width = 140;
  const height = 50;
  const fill = "white";
  const dotCount = 50;
  const lineStyle = "rgba(0,0,0,0.34)";
  const lineWidth = 0.5;
  const fontSize = 18;
  const font = `bold ${fontSize}px Sans`;
  const overlap = 0.1;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = fill;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < dotCount; i++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const alpha = Math.random() < 0.5 ? 0.3 : 0.6;
    const radius = Math.random() * 3 + 1;
    ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
    ctx.beginPath();
    ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  ctx.strokeStyle = lineStyle;
  ctx.lineWidth = lineWidth;
  for (let j = 0; j < 2; j++) {
    ctx.beginPath();
    ctx.moveTo(0, Math.random() * canvas.height);
    for (let x = 0; x < canvas.width; x += 5) {
      ctx.lineTo(
        x,
        (canvas.height / 2) + Math.sin(x / 5 + Math.random() * 2) * 12 + (Math.random() * 20 - 10)
      );
    }
    ctx.stroke();
  }

  ctx.font = font;
  let totalWidth = 0;
  for (const char of word) {
    totalWidth += ctx.measureText(char).width * 0.8;
  }
  let x = (canvas.width - totalWidth) / 2;
  for (const char of word) {
    const angle = (Math.random() - 0.5) * 0.6;
    const offsetY = (Math.random() - 0.5) * 18;
    const min = 50;
    const max = 150;
    const r = Math.floor(Math.random() * (max - min) + min);
    const g = Math.floor(Math.random() * (max - min) + min);
    const b = Math.floor(Math.random() * (max - min) + min);
    const color = `rgba(${r},${g},${b},1)`;
    ctx.save();
    ctx.fillStyle = color;
    ctx.translate(x, canvas.height / 2 + offsetY);
    ctx.rotate(angle);
    ctx.fillText(char, 0, 0);
    ctx.restore();

    const overlapCalc = ctx.measureText(char).width * overlap;
    x += ctx.measureText(char).width * 0.8 + overlapCalc;
  }

  return {canvas: canvas.toDataURL(), text: word};
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



  const text = data.captcha as string;
  const match = (text.toUpperCase() == current);

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
  current = res.text;

  return res.canvas;
};