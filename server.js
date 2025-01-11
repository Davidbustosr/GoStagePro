require("dotenv").config(); // Carga las variables de entorno desde un archivo .env
const express = require("express"); // Importa el framework Express
const connectDB = require("./config/db"); // Importa la función para conectar a MongoDB
const cors = require("cors"); // Importa el middleware para gestionar políticas de CORS

// Rutas de autenticación
const authRoutes = require("./routes/auth"); // Rutas para registro e inicio de sesión
const protectedRoutes = require("./routes/protectedRoutes"); // Rutas protegidas que requieren autenticación

const app = express(); // Crea una instancia de la aplicación Express

// Conecta a MongoDB
connectDB(); // Ejecuta la conexión a la base de datos MongoDB definida en config/db.js

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Permite solicitudes desde esta URL (el frontend)
    methods: ["GET", "POST", "PUT", "DELETE"], // Define los métodos HTTP permitidos
    credentials: true, // Permite el envío de cookies y credenciales en solicitudes cross-origin
  })
);
app.use(express.json()); // Middleware para analizar cuerpos JSON en solicitudes

// Rutas
app.use("/api/auth", authRoutes); // Define las rutas de autenticación bajo el prefijo /api/auth
app.use("/api/protected", protectedRoutes); // Define las rutas protegidas bajo el prefijo /api/protected
console.log('Mongo URI:', process.env.MONGO_URI);
console.log('JWT Secret:', process.env.JWT_SECRET);
console.log('PayPal Client ID:', process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID);
// Configuración del puerto
const PORT = process.env.PORT || 5001; // Toma el puerto de las variables de entorno o usa el 5001 por defecto
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Inicia el servidor en el puerto especificado