"use server"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const LogOut = async () => {

  (await cookies()).delete("Store-App");
  redirect("/");
};

export default LogOut;