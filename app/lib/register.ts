"use client"

async function Register() {
  const registration = await navigator.serviceWorker.register("/sw.js", {});
};
Register();
