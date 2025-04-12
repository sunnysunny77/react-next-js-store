"use server"

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

  console.log(formData)

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