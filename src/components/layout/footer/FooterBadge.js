// Importa el componente BrandBadge desde la ubicación correspondiente
import BrandBadge from "@/components/shared/badges/BrandBadge";

// Componente funcional que representa una insignia (badge) en el footer
const FooterBadge = () => {
  // Renderiza el componente BrandBadge con el tipo específico "footer"
  return <BrandBadge type="footer" />;
};

// Exporta el componente FooterBadge para que pueda ser utilizado en otras partes de la aplicación
export default FooterBadge;