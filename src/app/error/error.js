"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/"); // Redirige a la página de inicio después de 8 segundos
    }, 8000);

    return () => clearTimeout(timer); // Limpia el temporizador cuando el componente se desmonta
  }, [router]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#f8d7da",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#dc3545" }}>¡Error en el pago!</h1>
      <p style={{ marginTop: "10px", fontSize: "18px" }}>
        Algo salió mal. Serás redirigido a la página principal en breve.
      </p>
    </div>
  );
};

export default ErrorPage;