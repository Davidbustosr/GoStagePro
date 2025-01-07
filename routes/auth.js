const express = require("express"); // Importa Express para crear y manejar rutas
const jwt = require("jsonwebtoken"); // Importa JWT para la generación y verificación de tokens
const User = require("../models/User"); // Modelo de usuario para interactuar con la base de datos
const verifyToken = require("../middlewares/verifyToken"); // Middleware para verificar tokens JWT

const router = express.Router(); // Crea un enrutador de Express

// Registro de usuario
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body; // Extrae los datos del cuerpo de la solicitud

  // Validar los datos de entrada
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  try {
    // Verificar si el usuario ya existe en la base de datos
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email ya registrado" });
    }

    // Crear un nuevo usuario con los datos proporcionados
    const user = await User.create({
      name,
      email,
      password, // Nota: La contraseña se guarda en texto plano (no recomendado para producción)
    });

    // Generar un token JWT para el usuario recién registrado
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token válido por 1 hora
    });

    // Responder con un mensaje de éxito y el token generado
    res.status(201).json({
      message: "Usuario registrado con éxito",
      token,
    });
  } catch (err) {
    console.error(err); // Log de errores en el servidor
    res.status(500).json({ message: "Error en el servidor" });
  }
});

// Inicio de sesión
router.post("/login", async (req, res) => {
  const { email, password } = req.body; // Extrae email y contraseña del cuerpo de la solicitud

  // Validar los datos de entrada
  if (!email || !password) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  try {
    // Buscar usuario por email en la base de datos
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Credenciales inválidas" }); // Usuario no encontrado
    }

    // Verificar la contraseña (sin encriptación)
    if (user.password !== password) {
      return res.status(400).json({ message: "Credenciales inválidas" }); // Contraseña incorrecta
    }

    // Generar un token JWT para el usuario
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token válido por 1 hora
    });

    // Responder con un mensaje de éxito y el token generado
    res.status(200).json({
      message: "Inicio de sesión exitoso",
      token,
    });
  } catch (err) {
    console.error(err); // Log de errores en el servidor
    res.status(500).json({ message: "Error en el servidor" });
  }
});

// Obtener información del usuario autenticado
router.get("/me", verifyToken, async (req, res) => {
  try {
    // Busca al usuario autenticado en la base de datos (excluyendo la contraseña)
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" }); // Usuario no encontrado
    }
    res.status(200).json(user); // Responde con los datos del usuario
  } catch (error) {
    console.error(error); // Log de errores en el servidor
    res.status(500).json({ message: "Error en el servidor" });
  }
});

module.exports = router; // Exporta el enrutador para su uso en el servidor