"use server"
import Connection from "@/lib/db/connection";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";

type StateSignIn = {
  message: string;
  email: string;
  password: string;
  auth: boolean;
};

export const GetSignIn = async (stateSignIn: StateSignIn, formData: FormData) => {

  const data = {
    password: formData.get("password"),
    email: formData.get("email"),
  };  

  try {

    const [results] = await Connection.query(
      "SELECT pass FROM login WHERE email = ?",
      [data.email]
    );

    const match = await bcrypt.compare(data.password, results[0].pass);

    if(match) {

      const cookieStore = await cookies();

      cookieStore.set("Store App", "let", { secure: false, httpOnly: true, sameSite: 'strict', expires: new Date(Date.now() + (120*60))})

      return { 
        password: "",
        email: "",
        message: "",
        auth: true,
       };
    };
  } catch {

    return { 
      password: data.password as string,
      email: data.email as string,
      message: "Incorrect",
      auth: false,
     };
  };
};
