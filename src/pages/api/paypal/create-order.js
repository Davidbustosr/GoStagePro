export default async function handler(req, res) {
    if (req.method === "POST") {
      const { total } = req.body;
  
      const orderPayload = {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: total.toFixed(2), // Total enviado desde el cliente
            },
          },
        ],
      };
  
      try {
        const response = await fetch("https://api-m.sandbox.paypal.com/v2/checkout/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.PAYPAL_ACCESS_TOKEN}`,
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