// /pages/api/paypal/create-order.js
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
    const { total } = req.body;

    const orderPayload = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: total.toFixed(2),
          },
        },
      ],
    };

    try {
      const token = await generatePayPalToken();
      
      const response = await fetch("https://api-m.sandbox.paypal.com/v2/checkout/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderPayload),
      });

      const data = await response.json();

      if (data.id) {
        res.status(200).json({ id: data.id });
      } else {
        res.status(400).json({ error: "No se pudo crear la orden" });
      }
    } catch (error) {
      console.error("Error al crear la orden:", error);
      res.status(500).json({ error: "Error al crear la orden" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}