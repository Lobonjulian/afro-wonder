<div align="center">

# AfroWonder <span aria-hidden="true">💇🏾‍♀️</span>

Salón de belleza certificado en cabello afro y natural con reservas online.

![Status](https://img.shields.io/badge/Status-In%20Progress-yellow)
![Stack](https://img.shields.io/badge/Stack-React%2019-blue)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

## Problema

Las personas con cabello afro enfrentan el desafío constante de
encontrar estilistas verdaderamente especializados y reservar citas
de forma confiable. La falta de información centralizada las obliga
a depender del boca a boca, aumentando el riesgo de malas
experiencias y daño capilar irreparable.

## La Solución

AfroWonder es la primera plataforma digital que conecta personas
con cabello afro con estilistas especializados en la ciudad,
garantizando una experiencia confiable. Mediante perfiles verificados,
reseñas reales y agenda en línea, resolvemos las dificultades para
encontrar estilistas especializados y reservar citas de forma segura.
Eliminamos la falta de información centralizada y la dependencia
del boca a boca con una red curada de profesionales.

## Key Features

- 🔍 **Directorio Curado de Expertos:** Encuentra estilistas verificados, especializados en técnicas africanas tradicionales y modernas.
- 📅 **Reservas Online en Tiempo Real:** Agenda tu cita fácilmente y recibe confirmación inmediata, sin llamadas ni esperas.
- 📚 **Contenido Educativo:** Accede a guías, tutoriales y consejos profesionales para el cuidado del cabello afro.
- 💇🏾‍♀️ **Galería Inspiradora:** Explora trabajos reales y filtra por estilo, técnica o tipo de servicio.
- ⭐ **Reseñas Auténticas:** Opiniones verificadas de clientes reales, con fotos de resultados para mayor confianza.

## 🚀 Tech Stack

> ⚠️ Este proyecto inicia en JavaScript puro.
> TypeScript se adoptará en Fase Intermedia.

- React 19 → Ecosistema maduro + crecimiento profesional. Alt: Vue.js descartado.
- Vite → Rendimiento en arranque/compilación. Alt: CRA descartado por obsolescencia.
- pnpm → Eficiencia en disco y dependencias. Alt: npm menos optimizado.
- Oxc → Linting/formateo rápido (Rust). Alt: ESLint+Prettier más complejos.
- Vitest → Integración nativa Vite. Alt: Jest configuración pesada.
- Testing Library → Pruebas centradas en comportamiento. Alt: Enzyme desactualizado.
- Netlify → Deploy simple + CI automático. Alt: Vercel overkill para MVP.

## Architecture

> Estructura basada en Feature-Sliced Design (FSD), simplificada para MVP.

```text
src/
├── app/          # Config global, rutas, providers, estilos
├── features/     # Lógica de negocio por feature
│   ├── stylist-search/
│   ├── booking/
│   ├── reviews/
│   └── portfolio-gallery/
├── shared/       # UI, hooks, utils, API client (sin lógica de negocio)
└── main.jsx
```

- **features/** → Funcionalidades independientes. Ej: `booking/` gestiona reservas.
- **shared/** → Recursos reutilizables sin conocimiento del dominio. Ej: `Button`, hooks.
- **app/** → Configuración global. Ej: rutas, providers, temas.

### Convenciones CSS

- **CSS Modules** para aislamiento de estilos (sin colisiones globales)
- **Modificadores flat** (ej. `.heading1`, `.btnPrimary`) en lugar de BEM estricto
- **Variables CSS** del design system (`--color-brand`, `--spacing-md`)
- **Código siempre en inglés** (clases, variables, props)

Esta estructura permite escalar sin acoplamiento y evita: componentes dispersos,
dependencias cruzadas y mezcla de lógica de negocio con config global.

## ⚡ Quick Start

### 📦 Prerrequisitos

- Node.js ≥ 19
- pnpm ≥ 11
- Git

---

### 🚀 Instalación

```bash
# Clonar el repositorio
# → Descarga el código fuente completo y el historial de commits (objetos Git)
git clone <https://github.com/Lobonjulian/afro-wonder>

# Entrar al proyecto
# → Cambia el directorio de trabajo al root del proyecto
cd afro-wonder

# Instalar dependencias
# → Lee pnpm-lock.yaml y resuelve EXACTAMENTE las versiones bloqueadas
# → Garantiza instalación reproducible sin drift entre entornos
# → Crea node_modules/ usando enlaces eficientes (optimización de espacio vs npm)
pnpm install --frozen-lockfile

# Iniciar entorno de desarrollo
# → Levanta el servidor de Vite con HMR (Hot Module Replacement)
# → Disponible en http://localhost:5173
pnpm dev
```

---

### 🧩 Scripts Disponibles

| Comando        | Descripción                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pnpm dev`     | Levanta Vite con HMR (Hot Module Replacement) en localhost:5173. Los cambios en componentes se reflejan en <50ms sin recargar la página.                           |
| `pnpm build`   | Compila React 19 con tree-shaking, minificación y code-splitting. Genera assets optimizados en /dist listos para Netlify.                                          |
| `pnpm preview` | Sirve el build de producción de forma local para simular el comportamiento real de la aplicación desplegada, incluyendo optimizaciones finales y assets compilados |
| `pnpm lint`    | Ejecuta Oxlint para analizar el código estático, detectando errores de sintaxis, problemas de estilo y patrones potencialmente problemáticos antes del build.      |
| `pnpm format`  | Aplica formateo automático con Oxfmt, estandarizando estilo de código (indentación, comillas, estructura) para mantener consistencia en todo el proyecto.          |
| `pnpm test`    | Ejecuta pruebas unitarias y de integración usando Vitest junto con Testing Library, validando comportamiento de componentes desde la perspectiva del usuario.      |

## 🗺️ Roadmap

### Fase 1: MVP (Semanas 1-4) — "Fundamentos Sólidos"

**Objetivo:** Validar la idea resolviendo el problema de descubrimiento y acceso a estilistas especializados.

**Features:**

- Landing page con hero, servicios y galería → Centraliza información clave.
- Página de servicios con filtros básicos → Reduce tiempo de búsqueda.
- Formulario de contacto funcional → Primer acercamiento a reservas.
- Blog con contenido estático → Educación básica sobre cuidado capilar.
- Diseño responsive completo → Mobile-first (tráfico principal).

**Aprendizajes:** HTML semántico + a11y básica, CSS moderno (Grid/Flexbox), React components + props, Git workflow.

**Stack:** React 19, Vite, CSS Modules, Netlify.

### Fase 2: Intermedio (Semanas 5-8) — "Dinamismo y Estado"

**Objetivo:** Convertir la plataforma en una aplicación funcional con interacción real y datos dinámicos.

**Features:**

- Sistema de reservas multi-paso → Agendar citas de forma confiable.
- Directorio con filtros avanzados → Precisión en búsqueda.
- Galería filtrable → Reducir incertidumbre visual.
- Estado global con Zustand → Centralización de filtros/reservas.
- Consumo API mock con TanStack Query → Simulación de backend con caching.

  **Aprendizajes:** Formularios controlados, Zustand, Data fetching patterns, Testing básico.

  **Stack:** Zustand, TanStack Query, Vitest + Testing Library, Mock API.

  Fase 3: Avanzado (Semanas 9-12) — "Escalabilidad y Tipos"

  **Objetivo:** Preparar la aplicación para crecimiento, seguridad y experiencia personalizada.

  Features:\*\*
  \*\*

- Autenticación de usuarios → Experiencias protegidas.
- Dashboard de cliente → Gestión de reservas y favoritos.
- Migración progresiva a TypeScript → Tipado incremental.
- Lazy loading en galería → Optimización de performance.

  **Aprendizajes:** Auth flows (JWT/sesiones), TypeScript progresivo, Code splitting/Suspense, WCAG avanzado.

  **Stack:** TypeScript (progresivo), React Router (protected routes), Code splitting,
  Lazy loading.

  Fase 4: Profesional (Semanas 13-16) — "Producción Real"

  **Objetivo:** Evolucionar a un sistema fullstack listo para producción real.

  Features:\*\*
  \*\*

- **Backend Node.js + Express** → API REST completa.

- Base de datos PostgreSQL → Persistencia estructurada.
- CI/CD con GitHub Actions → Automatización de despliegues.
- Email notifications → Confirmaciones automáticas.

  **Aprendizajes:** Integración fullstack, Diseño de DB, CI/CD pipelines,
  Observabilidad.

  **Stack:** Node.js + Express, PostgreSQL, GitHub Actions, Nodemailer.

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 📬 Contacto

¿Preguntas, sugerencias o quieres colaborar?

- **Autor:** Julian Lobon Aguilar
- **GitHub:** [@lobonjulian](https://github.com/lobonjulian)
- **LinkedIn:** [linkedin.com/in/tu-usuario](https://linkedin.com/in/julian-aguilar)
- **Email:** <julitolos6@gmail.com>

## 🤝 Contribuir

Este es un proyecto de portfolio educativo. Si encuentras un error, tienes una idea de mejora o quieres practicar tus habilidades, abre un issue o envía un pull request. Todas las contribuciones constructivas son bienvenidas.

---

_Hecho con ❤️, código limpio y enfoque en el usuario por Julian Lobon Aguilar_
