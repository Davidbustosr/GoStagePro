const jwt = require("jsonwebtoken"); // Importa la librería jsonwebtoken para manejar tokens JWT

/**
 * Middleware para verificar el token JWT en las solicitudes protegidas.
 * 
 * @param {Object} req - Objeto de solicitud HTTP
 * @param {Object} res - Objeto de respuesta HTTP
 * @param {Function} next - Función para pasar al siguiente middleware
 */
const verifyToken = (req, res, next) => {
  // Obtiene el token del encabezado "Authorization" (formato: "Bearer <token>")
  const token = req.header("Authorization")?.split(" ")[1];

  // Si no hay un token en el encabezado, deniega el acceso
  if (!token) {
    return res.status(401).json({ message: "Acceso denegado. No se proporcionó un token." });
  }

  try {
    // Verifica y decodifica el token usando la clave secreta almacenada en las variables de entorno
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    // Adjunta la información decodificada del usuario al objeto de la solicitud
    req.user = verified;

    // Continúa con el siguiente middleware o controlador
    next();
  } catch (error) {
    // Si la verificación falla, responde con un error indicando que el token es inválido
    res.status(400).json({ message: "Token inválido." });
  }
};

// Exporta el middleware para que pueda ser utilizado en las rutas protegidas
module.exports = verifyToken;