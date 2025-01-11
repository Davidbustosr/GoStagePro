import mongoose from "mongoose";
import Paypal from "../../../../models/Paypal"; // Modelo Paypal

// Conexión a la base de datos
const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) return; // Ya está conectado

  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  try {
    // Conectar a la base de datos
    await connectToDatabase();

    // Obtener datos del body
    const {
      paypal_payment_token,
      paypal_payment_id,
      paypal_order_id,
      paypal_payer_id,
      paypal_intent,
      paypal_return_url,
      total,
    } = req.body;

    // Crea o inserta directamente en la colección existente
    const newOrder = await Paypal.create({
      paypal_payment_token,
      paypal_payment_id,
      paypal_order_id,
      paypal_payer_id,
      paypal_intent,
      paypal_return_url,
      total,
    });

    // Respuesta exitosa
    return res.status(201).json({
      message: "Orden registrada exitosamente",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error al registrar la orden:", error);
    return res.status(500).json({
      message: "Error al registrar la orden",
      error: error.message,
    });
  }
}
