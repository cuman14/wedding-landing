# AGENTS.md

> Guía de contexto para agentes de codificación IA que trabajen en este repositorio.

## Descripción del proyecto

Landing web de boda para **Marina & Oswald**, cuya celebración tendrá lugar el **10 de octubre de 2026** en la *Finca Condado de Cubillana*, Toledo (España).

El objetivo de la web es informar a los invitados sobre el evento (fecha, lugar, logística, alojamiento), permitirles confirmar asistencia (RSVP) y ofrecer una experiencia visual elegante y romántica acorde con la identidad de la boda.

El sitio está desplegado en **Vercel**: https://wedding-landing-ashen.vercel.app

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | [Astro](https://astro.build) v5 (`output: "server"`) |
| Estilos | [Tailwind CSS](https://tailwindcss.com) v4 (vía `@tailwindcss/vite`) |
| Tipografías | `Great Vibes` (display/headings) · `Poppins` (body) — servidas con `@fontsource` |
| Iconos | Google Material Symbols Outlined (CDN) |
| Internacionalización | Sistema i18n nativo de Astro (`es` por defecto, `en` secundario) |
| Despliegue | Vercel (`@astrojs/vercel`), SSR activado, Vercel Web Analytics habilitado |
| Package manager | `pnpm` |
| Lenguaje | TypeScript |
| Testing | Jest |

---

## Diseño y prototipado

Los diseños y prototipos de pantallas se obtienen desde **[Google Stitch](https://stitch.withgoogle.com)** (anteriormente Stitch by Google). Al implementar o modificar componentes visuales:

- Consulta primero el prototipo en Stitch para respetar la maqueta aprobada.
- Stitch genera código HTML/CSS de referencia; adáptalo al sistema de componentes `.astro` y las utilidades de Tailwind v4 del proyecto.
- Respeta siempre los tokens de diseño definidos en `src/styles/global.css` (`@theme`); **no** introduzcas valores de color, tipografía o espaciado arbitrarios.

---

## Paleta de colores y tokens

Definidos en `src/styles/global.css` bajo `@theme`:

```css
--color-primary: #86c99c          /* verde salvia principal */
--color-primary-light: #b9e2c6
--color-primary-dark: #5a9e72
--color-secondary-mint: #e6f2ed

--color-text-main-light: #333d4e
--color-text-main-dark: #eaf5f0

--color-background-light: #fefefe
--color-background-dark: #1f2a2f

--color-pearl-grey: #e7e9ed

--font-display: "Great Vibes", cursive
--font-body: "Poppins", sans-serif
```

---

## Estructura del proyecto

```text
/
├── public/                   # Assets estáticos (imágenes, vídeo, favicons, OG)
├── src/
│   ├── components/           # Componentes Astro reutilizables
│   │   ├── Header.astro      # Barra de navegación + selector de idioma
│   │   ├── Hero.astro        # Sección principal con foto de pareja
│   │   ├── Countdown.astro   # Cuenta atrás hasta el 10/10/2026 + botón .ics
│   │   ├── ParallaxSection.astro
│   │   ├── FAQ.astro         # Detalles del evento con pestañas (Logística / Alojamiento / Evento)
│   │   ├── VideoSection.astro # Vídeo de la finca
│   │   ├── InfoCards.astro
│   │   ├── Map.astro         # Mapa embebido de Google Maps
│   │   ├── Progress.astro    # Timeline de preparativos
│   │   ├── IntroFlap.astro / IntroGate.astro  # Animación de apertura tipo carta/invitación
│   │   ├── BotonRSVP.astro
│   │   ├── SeccionFormulario.astro
│   │   ├── Footer.astro
│   │   ├── MobileMenu.astro
│   │   └── MainPage.astro
│   ├── i18n/
│   │   ├── ui.ts             # Todas las cadenas de texto en `es` y `en`
│   │   └── utils.ts          # Helpers: getLangFromUrl, useTranslations
│   ├── layouts/
│   │   └── Layout.astro      # Shell HTML con SEO, Open Graph y fuentes
│   ├── pages/
│   │   ├── index.astro       # Redirección a /es/
│   │   ├── [lang]/index.astro # Página principal multilingüe
│   │   ├── es/               # Rutas en español
│   │   ├── en/               # Rutas en inglés
│   │   └── api/
│   │       └── boda.ics.js   # Endpoint que sirve el archivo de calendario .ics
│   └── styles/
│       └── global.css        # Tokens de diseño Tailwind v4 + keyframes
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Internacionalización (i18n)

- El idioma **por defecto es `es`**; `en` es el secundario.
- Todas las cadenas de texto se gestionan en `src/i18n/ui.ts` bajo las claves `es` y `en`.
- Para obtener la función de traducción en un componente:
  ```astro
  ---
  import { getLangFromUrl, useTranslations } from "../i18n/utils";
  const lang = getLangFromUrl(Astro.url);
  const t = useTranslations(lang);
  ---
  ```
- **Nunca** escribas texto literal en español o inglés directamente en los componentes `.astro`; usa siempre `t("clave")`.
- Al añadir texto nuevo, añade la clave en **ambos idiomas** en `ui.ts`.

---

## Comandos esenciales

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo (localhost:4321)
pnpm dev

# Build de producción
pnpm build

# Preview del build
pnpm preview

# Check de tipos TypeScript/Astro
pnpm astro check
```

---

## Convenciones de código

- **Componentes**: archivos `.astro` en `src/components/`. PascalCase para el nombre de archivo.
- **Estilos**: Tailwind CSS v4 únicamente. Clases utilitarias directamente en el template. Evita `<style>` inline salvo para keyframes/casos excepcionales ya en `global.css`.
- **Sin frameworks JS reactivos**: El proyecto no usa React, Vue ni Svelte. Toda la interactividad del cliente se implementa con `<script>` estándar dentro de los componentes `.astro`.
- **TypeScript**: activado. Usa tipos explícitos en las interfaces de `Props` de cada componente.
- **Assets**: imágenes en `public/` en formato `.webp` siempre que sea posible. El vídeo de la finca está en `.mp4`.
- **No elimines ni debilites tests** sin autorización explícita.

---

## Testing

- El framework de test es **Jest**.
- Los tests deben cubrir la lógica de utilidades (ej. `i18n/utils.ts`, helpers de fechas en `Countdown.astro`, generación del `.ics`).
- Añade o actualiza tests al modificar código, incluso si no se pide explícitamente.
- Comando de ejecución: `pnpm test` (configura según el `package.json` del proyecto si aún no está añadido).

---

## Consideraciones de seguridad y despliegue

- **No incluyas credenciales ni API keys** en el código. Usa variables de entorno de Vercel.
- El endpoint `/api/boda.ics` es público e idempotente; no expone datos sensibles.
- El sitio usa SSR en Vercel; ten en cuenta el contexto de servidor al usar `Astro.request` o cookies.
- El archivo `og.jpg` (`public/og.jpg`) se usa como imagen de Open Graph; mantenlo actualizado al cambiar la identidad visual.

---

## Contexto de dominio (boda)

| Dato | Valor |
|---|---|
| Novios | Marina & Oswald |
| Fecha | Sábado, 10 de octubre de 2026 |
| Hora ceremonia | ~13:00 h (civil) |
| Finca | Condado de Cubillana |
| Dirección | Camino de la iva s/n, 45920 La Torre de Esteban Hambrán, Toledo |
| Autobuses | Ruta 1: Madrid (Atocha) · Ruta 2: Alcorcón Central |
| Alojamiento en finca | Casa Kentia (12 pax, 960 €) · Casa Hiedra (4-6 pax, 480 €) |
