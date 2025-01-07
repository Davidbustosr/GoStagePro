
# Go Stage Pro - Aplicación Web para Músicos y Profesionales del Sonido 🎵

Go Stage Pro es una aplicación web diseñada para facilitar la creación de plantillas profesionales de MainStage para músicos, líderes de adoración y artistas en general. Este proyecto no solo busca optimizar la experiencia en el escenario, sino también simplificar el acceso a sonidos personalizados, configuraciones avanzadas y herramientas interactivas.

## 🚀 Características principales

- **Creación de plantillas personalizadas:** Los usuarios pueden seleccionar instrumentos, configuraciones y sonidos según su plan.
- **Gestión de cuentas:** Los usuarios pueden registrarse, iniciar sesión y gestionar sus datos.
- **Planes de suscripción:** Diferentes niveles de acceso, desde básico hasta profesional.
- **Carrito de compras y checkout:** Implementación de integración con PayPal (en desarrollo para producción).
- **Galería y blogs:** Acceso a contenido multimedia y artículos relacionados con la industria musical.
- **Soporte interactivo:** Preguntas frecuentes, contacto directo y newsletter.

> **Nota:** Algunos aspectos de la aplicación aún están en desarrollo debido a la integración progresiva y tiempos ajustados de entrega.

## 🛠️ Instalación y configuración

### Requisitos previos
- **Node.js:** v16 o superior
- **MongoDB Atlas:** Configurado para la base de datos en la nube
- **Git:** Para clonar el repositorio
- **PayPal:** Credenciales configuradas (sandbox o producción)

### Clonar el repositorio
```bash
git clone https://github.com/tuusuario/gostagepro.git
cd gostagepro
```

### Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
```env
# Configuración de MongoDB
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<nombre-base-datos>

# Configuración de JWT
JWT_SECRET=<clave-super-secreta>

# Configuración del servidor
PORT=5001

# Configuración de PayPal
CLIENT_ID=<tu-client-id-paypal>
CLIENT_SECRET=<tu-client-secret-paypal>

# Configuración de Stripe
STRIPE_SECRET_KEY=<clave-secreta-stripe>
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<clave-publica-stripe>
```

### Instalar dependencias
```bash
npm install
```

### Ejecutar el servidor en modo desarrollo
```bash
npm run dev
```
La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).
La aplicacion funciona con base de datos en mongodb en puerto 5001.

## 📂 Estructura del proyecto
- **/src:** Código fuente de la aplicación
  - **/components:** Componentes reutilizables de la UI
  - **/layout:** Componentes principales del diseño de página
  - **/pages:** Páginas de la aplicación
- **/config:** Configuración de MongoDB y otras herramientas
- **/routes:** Rutas de la API para autenticación y funciones protegidas

## 💻 Tecnologías utilizadas
- **Frontend:** Next.js, React
- **Backend:** Node.js, Express.js
- **Base de datos:** MongoDB Atlas
- **Pasarelas de pago:** PayPal.

## ⚙️ Aspectos en desarrollo
- Optimización del flujo de checkout para producción.
- Mejoras en el diseño responsivo de algunas páginas.
- Documentación interna para nuevos colaboradores.
- Creacion de plantillas 

## 🤝 Contribución
Si deseas contribuir al desarrollo de esta aplicación, ¡bienvenido! Por favor, envía un pull request o contacta al autor directamente.

## 📜 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

> **Nota final:** Este proyecto se desarrolló en paralelo como parte de un trabajo universitario y un proyecto personal. Por ello, algunos aspectos se ajustaron para cumplir con plazos estrictos de entrega, por lo que algunas partes de la pagina no tienen un complet desarrollo visual.
