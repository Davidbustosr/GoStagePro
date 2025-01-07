const mongoose = require("mongoose"); // Importa Mongoose para definir el esquema y el modelo

// Define el esquema para los usuarios en la base de datos
const UserSchema = new mongoose.Schema({
  name: {
    type: String, // El nombre del usuario debe ser de tipo cadena
    required: true, // Este campo es obligatorio
  },
  email: {
    type: String, // El correo electrónico del usuario debe ser de tipo cadena
    required: true, // Este campo es obligatorio
    unique: true, // El correo debe ser único, no se permiten duplicados
  },
  password: {
    type: String, // La contraseña del usuario debe ser de tipo cadena
    required: true, // Este campo es obligatorio
    // Nota: Actualmente las contraseñas se almacenan en texto plano. Se recomienda aplicar un hash para mayor seguridad.
  },
});

// Exporta el modelo basado en el esquema definido
module.exports = mongoose.model("User", UserSchema);