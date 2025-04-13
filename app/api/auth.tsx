"use server"
import Connection from "@/lib/db/connection";
import EmptyResults from "@/lib/db/empty-results";
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

  let results;

  try {

    [results] = await Connection.query(
      "SELECT pass FROM login WHERE email = ?",
      [data.email]
    );
  } catch (err) {

    console.log(err);
  };

  if (EmptyResults(results)) {

    const match = await bcrypt.compare(data.password, results[0].pass);

    if(match) {

      const cookieStore = await cookies();

      cookieStore.set("Store-App", "true", { secure: true, httpOnly: true, sameSite: 'strict'})

      return { 
        password: "",
        email: "",
        message: "",
        auth: true,
      };
    };
  };

  return {
    password: data.password as string,
    email: data.email as string,
    message: "Incorrect",
    auth: false,
   };
};
