export default async function handler(req, res) {
    if (req.method === "POST") {
      const { orderID } = req.body;
  
      try {
        const response = await fetch(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.PAYPAL_ACCESS_TOKEN}`,
          },
        });
  
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