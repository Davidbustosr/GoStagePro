// /pages/api/paypal/capture-payment.js
import fetch from 'node-fetch';

async function generatePayPalToken() {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  const response = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  if (!data.access_token) {
    throw new Error("Error al generar el token de PayPal");
  }
  return data.access_token;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { orderID } = req.body;

    try {
      const token = await generatePayPalToken();

      const response = await fetch(
        `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (data.status === "COMPLETED") {
        res.status(200).json({ success: true, data });
      } else {
        res.status(400).json({ error: "No se pudo capturar el pago" });
      }
    } catch (error) {
      console.error("Error al capturar el pago:", error);
      res.status(500).json({ error: "Error al capturar el pago" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}