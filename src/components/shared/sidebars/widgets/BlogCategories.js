"use client"; // Indica que este componente debe ejecutarse del lado del cliente en Next.js.
import { useCommonContext } from "@/providers/CommonContext"; // Importa un contexto compartido que se utiliza para obtener y manejar estados globales.
import Link from "next/link"; // Componente de Next.js para manejar navegación interna.
import { useSearchParams } from "next/navigation"; // Hook para acceder a los parámetros de búsqueda de la URL.
import React from "react";

const BlogCategories = () => {
  // Obtiene el valor del parámetro 'category' desde la URL.
  const currentCategory = useSearchParams().get("category");

  // Obtiene el valor de 'sidebar' desde el contexto global proporcionado por CommonContext.
  const { sidebar } = useCommonContext();

  // Lista de categorías que se mostrarán en la barra lateral.
  const categories = [
    {
      id: 1,
      name: "Planes", // Categoría: Planes.
    },
    {
      id: 2,
      name: "Piano", // Categoría: Piano.
    },
    {
      id: 3,
      name: "Pad", // Categoría: Pad.
    },
    {
      id: 4,
      name: "Synth", // Categoría: Synth.
    },
    {
      id: 5,
      name: "Violin", // Categoría: Violin.
    },
    {
      id: 6,
      name: "Trompeta", // Categoría: Trompeta.
    },
    {
      id: 7,
      name: "Rhodes", // Categoría: Rhodes.
    },
    {
      id: 8,
      name: "Videos Demostracion", // Categoría: Videos de demostración.
    },
  ];

  return (
    <div
      className="sidebar__widget" // Clase CSS para estilos del contenedor principal de la barra lateral.
      data-aos="fade-up" // Atributo para animación con la librería AOS (Animate On Scroll).
      data-aos-duration="1500" // Duración de la animación (1500ms).
    >
      {/* Título de la barra lateral que cambia dependiendo del valor de 'sidebar'. */}
      <div className="sidebar__title">
        <h5>{sidebar === "service" ? "All Services:" : "Categorias:"}</h5>
      </div>

      {/* Lista de categorías */}
      <div className="sidebar__list">
        <ul>
          {/* Mapea cada categoría y genera un elemento <li> con un enlace para cada una. */}
          {categories?.map(({ id, name }, idx) => (
            <li key={idx}>
              <Link
                // Clase dinámica para resaltar la categoría activa.
                className={`sidebar__common__input ${
                  currentCategory === name.toLowerCase().split(" ").join("-")
                    ? "active" // Agrega la clase 'active' si coincide con la categoría seleccionada.
                    : ""
                }`}
                // Genera dinámicamente el enlace para cada categoría según el contexto actual ('services' o 'blogs').
                href={`/${
                  sidebar === "service" ? "services" : "blogs"
                }?category=${name.toLocaleLowerCase().split(" ").join("-")}`}
              >
                {name} {/* Nombre de la categoría visible para el usuario. */}
                <i className="icofont-rounded-right"></i> {/* Ícono decorativo al lado de cada categoría. */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogCategories; // Exporta el componente para ser usado en otros lugares, como en BlogSidebar.js.