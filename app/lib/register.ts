"use client"
import { useEffect } from "react";

const registerServiceWorker = async () => {

  await navigator.serviceWorker.register("/sw.js", {});
};

const Register = () => {

  useEffect(() => {

    if ('serviceWorker' in navigator && 'PushManager' in window) {
      registerServiceWorker();
    }
  }, []);

  return null;
};

export default Register;
