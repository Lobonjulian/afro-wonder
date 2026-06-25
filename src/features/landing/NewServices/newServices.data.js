import Perfilados from "./assets/services/corte-y-perfilado.webp";
import Guia from "./assets/services/guia.webp";
import Pasos from "./assets/services/pasos.webp";
import Productos from "./assets/services/productos.webp";
import Tratamientos from "./assets/services/tratamientos.webp";
import Trenzas from "./assets/services/trenzas.webp";

export const newServices = [
  {
    id: 1,
    title: "Trenzas Africanas Personalizadas",
    description:
      "Estilos personalizados con técnicas tradicionales y modernas.",
    badges: "SERVICIOS",
    image: Trenzas,
    href: "/servicios/trenzas",
  },
  {
    id: 2,
    title: "Cortes y Perfilados Afros",
    description:
      "Cortes especializados que respetan la textura y el volumen natural.",
    badges: "SERVICIOS",
    image: Perfilados,
    href: "/servicios/cortes",
  },
  {
    id: 3,
    title: "Tratamiento de Hidratación Profunda",
    description: "Recuperación profunda para cabellos secos o dañados.",
    badges: "SERVICIOS",
    image: Tratamientos,
    href: "/servicios/tratamientos",
  },
  {
    id: 4,
    title: "Productos Naturales para Cabello Afro",
    description: "Selección de productos orgánicos y sostenibles.",
    badges: "SERVICIOS",
    image: Productos,
    href: "/servicios/productos",
  },
  {
    id: 5,
    title: "Guía Completa: Cómo Mantener tu Cabello Natural",
    description: "Consejos expertos para el cuidado diario.",
    badges: "BLOG Y CONSEJOS",
    image: Guia,
    href: "/servicios/guia",
  },
  {
    id: 6,
    title: "4 pasos para un cabello más saludable y brillante",
    description: "Rutina simple para resultados visibles.",
    badges: "BLOG Y CONSEJOS",
    image: Pasos,
    href: "/servicios/tratamientos",
  },
];
