"use server"
import nodemailer from 'nodemailer';

type StateEnquiry = {
    name: string,
    nameMessage: string,
    phone: string,
    phoneMessage: string,
    email: string,
    emailMessage: string,
    text: string,
    textMessage: string,
    response: string,
  };

export const GetEnquiry = async (stateEnquiry: StateEnquiry, formData: FormData) => {

  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    text: formData.get("text"),
  };  

  let error = false;

  let nameMessage = "";
  let phoneMessage = "";
  let emailMessage = "";
  let textMessage = "";

  if (!/^[ '.a-z-]{2,40}$/i.test(data.name as string)) {

    error = true;
    nameMessage = "Enter your name";
  } else {

    nameMessage = "";
  };

  if (!/^\+?\d{3,15}$/.test(data.phone as string)) {
  
    error = true;
    phoneMessage = "+###############";
  } else {

    phoneMessage = "";
  };

  if (!/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(data.email as string)) {
  
    error = true;
    emailMessage = "Enter your email";
  } else {

    emailMessage = "";
  };

  if (!/[\dA-Za-z]/.test(data.text as string)) {
  
    error = true;
    textMessage = "Enter your message";
  } else {

    textMessage = "";
  };

  if (error) return {
    name: data.name as string,
    nameMessage: nameMessage,
    phone: data.phone as string,
    phoneMessage: phoneMessage,
    email: data.email as string,
    emailMessage: emailMessage,
    text: data.text as string,
    textMessage: textMessage,
    response: "",
  };

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.REACT_APP_NODEMAILER_EMAIL,
      pass: process.env.REACT_APP_NODEMAILER_PASSWORD,
    }
  });

  const info = await transporter.sendMail({
    from: process.env.REACT_APP_NODEMAILER_EMAIL_FROM,
    to: process.env.REACT_APP_NODEMAILER_EMAIL_TO,
    subject: "You have a message from the enquiry page on your website:",
    html: `
    <html lang="en">
      <body>
        <div><b>Name:</b></div>
        <p>${data.name}</p>
        <div><b>Phone:</b></div>
        <p>${data.phone}</p>
        <div><b>Email:</b></div>
        <p>${data.email}</p>
        <div><b>Message:</b></div>
        <p>${data.text}</p>
      </body>
    </html>
    `,
  });

  return {
    name: data.name as string,
    nameMessage: nameMessage,
    phone: data.phone as string,
    phoneMessage: phoneMessage,
    email: data.email as string,
    emailMessage: emailMessage,
    text: data.text as string,
    textMessage: textMessage,
    response: "Thanks sent to mail",
  };
};