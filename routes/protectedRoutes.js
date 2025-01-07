const express = require("express"); // Importa el framework Express
const verifyToken = require("../middlewares/verifyToken"); // Middleware para verificar tokens JWT y proteger rutas

const router = express.Router(); // Crea un enrutador de Express

// Ruta protegida de ejemplo
router.get("/routes/protectedRoutes.js", verifyToken, (req, res) => {
  // Responde con un mensaje de éxito y los datos del usuario autenticado
  res.json({
    message: "Acceso a la ruta protegida exitoso",
    user: req.user, // Información del usuario obtenida y decodificada del token
  });
});

// Ruta protegida para obtener el perfil del usuario
router.get("/profile", verifyToken, (req, res) => {
  // Responde con los datos del perfil del usuario autenticado
  res.json({
    message: "Perfil del usuario",
    user: req.user, // Información del usuario obtenida del token
  });
});

// Exporta el enrutador para usarlo en el servidor principal
module.exports = router;