"use server"
import { cookies } from 'next/headers'
const LogOut = async () => {

  (await cookies()).delete("Store-App");
};

export default LogOut;