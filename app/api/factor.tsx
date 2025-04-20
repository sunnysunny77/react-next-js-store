"use server"
import {cookies} from "next/headers";
import nodemailer from "nodemailer";
import Connection from "@/lib/db/connection";
import EmptyResults from "@/lib/db/empty-results";
import bcrypt from "bcrypt";

type StateGetFactor = {
  message: string,
  email: string,
  getcode: boolean,
};

export const GetFactor = async (stateGetFactor: StateGetFactor, formData: FormData) => {

  const data = {
    email: formData.get("email"),
  };

  let results;

  try {

    [results] = await Connection.query(
      "SELECT email FROM login WHERE email = ?",
      [data.email]
    );  
  } catch (err) {

    console.log(err)
  };

  if (EmptyResults(results)) {

    return {
      message: "Email in use", 
      email: "",
      getcode: false,
     };
  }

  const token = Math.floor(Math.random() * 900000);
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(String(token), salt);
  const cookieStore = await cookies();
  cookieStore.set("Store-App-Auth-Token", hash, {secure: true, httpOnly: true, sameSite: "strict"});

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.REACT_APP_NODEMAILER_EMAIL,
      pass: process.env.REACT_APP_NODEMAILER_PASSWORD,
    }
  });

  try {

    await transporter.sendMail({
      from: process.env.REACT_APP_NODEMAILER_EMAIL_FROM,
      to: data.email as string,
      subject: "Secure Website - Authentication",
      html: `
      <html>
        <h1>G'day, paste the code back into the website</h1>
        <b>Authentication code: </b> ${token}
      </html>`,
    });
  } catch (err) {

    console.log(err);
  };

  return {
    message: "Check Your Inbox", 
    email: data.email as string,
    getcode: false,
   };
};

type StateSetFactor = {
  message: string,
  code: string,
  setcode: boolean,
};

export const SetFactor = async (stateSetFactor: StateSetFactor, formData: FormData) => {

  const data = {
    code: formData.get("code"),
  };

  const cookieStore = await cookies();
  const cookie = cookieStore.get("Store-App-Auth-Token").value;
  const text = data.code;
  const match = await bcrypt.compare(text, String(cookie));

  if(match) {

  return {
    message: "", 
    code: data.code as string,
    setcode: false,
   };
  };

  return {
    message: "Incorrect code", 
    code: data.code as string,
    setcode: true,
   };
};
