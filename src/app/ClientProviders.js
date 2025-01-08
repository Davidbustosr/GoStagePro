"use client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function ClientProviders({ children }) {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AbRtp4tycN7z0V9PZhWawEgZs_R8yj6wIlsd54DQKuaySBrOOiiN5E4ToHAiOyuTDDuHtSTgRaJ3xTOb", // Cambia a tu ID sandbox o producción
        currency: "USD",
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}