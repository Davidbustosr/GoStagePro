import nodemailer from "nodemailer"; // Importa la biblioteca Nodemailer para enviar correos electrónicos

// Función asíncrona para manejar solicitudes POST
export async function POST(req) {
  // Obtiene el cuerpo de la solicitud en formato JSON
  const body = await req.json();
  const { name, email, phone, subject, message } = body; // Desestructura los datos enviados desde el cliente

  // Configura el transportador de Nodemailer
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Servicio de correo (puedes cambiarlo si usas otro proveedor)
    auth: {
      user: process.env.EMAIL_USER, // Dirección de correo electrónico obtenida de las variables de entorno
      pass: process.env.EMAIL_PASS, // Contraseña o contraseña específica de aplicación obtenida de las variables de entorno
    },
  });

  try {
    // Enviar el correo electrónico utilizando el transportador configurado
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // Dirección de correo del remitente
      to: process.env.EMAIL_TO, // Dirección de correo del destinatario (donde se reciben los mensajes)
      subject: `New message from ${name}`, // Asunto del correo electrónico
      text: message, // Cuerpo del mensaje en texto plano
      html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p style="text-transfrom:capitalize;"><strong>Subject:</strong> ${subject}</p>
               <p><strong>Message:</strong> ${message}</p>`, // Cuerpo del mensaje en formato HTML
    });

    // Responde con éxito si el correo se envía correctamente
    return new Response("Email sent successfully!", {
      status: 200, // Código de estado HTTP de éxito
      statusText: JSON.stringify(info), // Detalles del correo enviado (útil para depuración)
    });
  } catch (error) {
    // Manejo de errores si el envío de correo falla
    return new Response("Failed to send email", {
      status: 500, // Código de estado HTTP para error del servidor
      statusText: "Failed to send email", // Mensaje de error
    });
  }
}