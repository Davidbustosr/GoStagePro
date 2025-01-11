import mongoose from "mongoose";

// Define el esquema para las órdenes de PayPal
const PaypalSchema = new mongoose.Schema(
  {
    paypal_payment_token: {
      type: String, // Token facilitador de PayPal
      required: true,
    },
    paypal_payment_id: {
      type: String, // ID de pago de PayPal
      required: true,
    },
    paypal_order_id: {
      type: String, // ID de la orden de PayPal
      required: true,
    },
    paypal_payer_id: {
      type: String, // ID del pagador
      required: true,
    },
    paypal_intent: {
      type: String, // Intento de pago (sale, authorize, etc.)
      required: true,
    },
    paypal_return_url: {
      type: String, // URL de retorno de PayPal
      required: true,
    },
    total: {
      type: Number, // Total de la orden
      required: true,
    },
  },
  {
    timestamps: true, // Guardar la fecha y hora de creación de la orden
  }
);

// Si ya existe el modelo en mongoose.models, úsalo, si no, crea uno nuevo.
const Paypal = mongoose.models.Paypal || mongoose.model("Paypal", PaypalSchema);

export default Paypal;
