const mongoose = require("mongoose"); // Importa la librería de mongoose para manejar la conexión con MongoDB

/**
 * Función para conectar la aplicación con la base de datos MongoDB.
 * Utiliza la URI de conexión proporcionada en las variables de entorno.
 */
const connectDB = async () => {
  try {
    // Intentar conectar con MongoDB usando la URI de conexión
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Uso del nuevo parser de URL para manejar la conexión
      useUnifiedTopology: true, // Habilita el motor de monitoreo unificado
    });
    console.log("MongoDB connected..."); // Mensaje de éxito en la consola
  } catch (err) {
    console.error(err.message); // Muestra el mensaje de error en la consola si la conexión falla
    process.exit(1); // Termina el proceso con un código de error
  }
};

// Exporta la función para usarla en otros archivos del proyecto
module.exports = connectDB;