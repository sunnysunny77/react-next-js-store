"use server"
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import Connection from "@/lib/db/connection";
import nodemailer from 'nodemailer';

type StateRegistraion = {
  password: string,
  message: string,
};

const Registraion = async (stateRegistraion : StateRegistraion , formData: FormData) => {

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };


  let error = false;

  let error_message = "";

  const text = data.password as string;

  if (!/[0-9]/.test(text)) {

    error = true;
    error_message = "Include Atleast One Number";
  }

  if (!/[A-Z]/.test(text)) {

    error = true;
    error_message = "Include Atleast One Capital Letter";
  }

  if (!/[a-z]/.test(text)) {

    error = true;
    error_message = "Include Atleast One Lowercase Letter";
  }

  if (text.length < 8) {

    error = true;
    error_message = "Include Atleast 8 Characters";
  }

  if (text.length > 16) {

    error = true;
    error_message = "Include Maximum 16 Characters";
  }
  
  if (error) return {
    password: data.password as string,
    message: error_message,
  };

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(text, salt);

  try {

    await Connection.query(
      "INSERT INTO login ( email, pass ) VALUES ( ? , ? )",
      [data.email, hash]
    );
  } catch (err) {

    console.log(err);
  };

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.REACT_APP_NODEMAILER_EMAIL,
      pass: process.env.REACT_APP_NODEMAILER_PASSWORD,
    }
  });

  await transporter.sendMail({
    from: process.env.REACT_APP_NODEMAILER_EMAIL_FROM,
    to: data.email as string,
    subject: "Welcome to Secure Website",
    html: `
    <html lang="en">
      <h1>Welcome to Secure Website</h1> 
      <p>Login:</p> 
      <b>Email:</b> ${data.email} 
      <br>
      <b>Pass:</b> ${data.password} 
      <br>
      <br>
      <p>PayPal:</p>  
      <b>Email:</b> sb-iyl4x21604127@personal.example.com
      <br>
      <b>Pass:</b> *]T0%Ae8"."
    </html>`,
  });

  const cookieStore = await cookies();

  cookieStore.set("Store-App", "true", { secure: true, httpOnly: true, sameSite: 'strict'})
  
  redirect("/store");
};

export default Registraion;