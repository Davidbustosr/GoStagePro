// Componente principal para la página de cancelación de pago
export default function CancelPage() {
  return (
    <div 
      style={{ textAlign: "center", marginTop: "50px" }} // Estilos inline para centrar el contenido y añadir un margen superior
    >
      {/* Título principal de la página */}
      <h1>Pago cancelado</h1>

      {/* Mensaje informativo para el usuario */}
      <p>Tu pedido no fue procesado. Puedes intentar nuevamente.</p>

      {/* Enlace para regresar a la página principal */}
      <a href="/">Volver a la página principal</a>
    </div>
  );
}