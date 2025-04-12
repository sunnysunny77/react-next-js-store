"use server"
import { cookies } from 'next/headers'
const GetCookie = async () => {

  const cookieStore = await cookies();
  const cookie = cookieStore.get("Store-App");

  if (cookie) {

    return true;
  }

  return false;
};

export default GetCookie;