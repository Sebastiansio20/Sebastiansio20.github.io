# Spec — Arte abstracto SVG en las tarjetas de Work

> Estado: implementada
> Fecha: 2026-08-09

## 1. Contexto

Las 3 tarjetas de la sección Work muestran hoy un placeholder de rejilla (`grid-mask`) sin imagen. El usuario quiere imágenes "donde se necesiten", eligiendo **arte abstracto SVG de marca** (paleta dorado/negro, sin fotos de stock) para las **tarjetas de Work**.

## 2. Objetivo

Reemplazar el placeholder de cada tarjeta de Work por una pieza de arte abstracto SVG generada a medida, coherente con la identidad premium dark + dorado, distinta por proyecto.

## 3. Requisitos

### Funcionales
- [x] F1. Cada uno de los 3 proyectos tiene su propio arte abstracto, conceptualmente ligado a su tema:
  - `supply-chain-intelligence` (Datos): constelación de nodos conectados (red).
  - `process-automation` (Automatización): líneas de flujo paralelas con pulsos.
  - `digital-transformation` (Transformación): malla/mesh con hilos de conexión.
- [x] F2. El arte usa la paleta azul actual (`--ocean`, `--steel`, `--ice`, `--accent`) sobre `--surface`, con glow radial sutil (la paleta dorada original fue migrada a azul marino/blanco/gris).
- [x] F3. SVG inline (sin requests externos), `aria-hidden`, responsive (`viewBox` + `preserveAspectRatio`), peso ligero.
- [x] F4. Los efectos hover actuales de las tarjetas (scale, glow, flecha) se mantienen sobre el arte.

### No funcionales
- [x] N1. El arte es estático (no animación; respeta `prefers-reduced-motion`).
- [x] N2. Sin dependencias nuevas, sin fotos, sin cambios de layout/contenido/i18n.
- [x] N3. `npm run lint` y `npm run build` pasan.

## 4. Criterios de aceptación

- [x] CA1. Las 3 tarjetas de Work muestran arte abstracto distinto y on-brand (dark + azul marino), no el placeholder plano.
- [x] CA2. El arte escala con la tarjeta y no genera peticiones externas.
- [x] CA3. El hover (scale + glow) sigue funcionando sobre el arte.
- [x] CA4. El arte es accesible (decorativo, `aria-hidden`) y no afecta el texto de la tarjeta.
- [x] CA5. `npm run lint` y `npm run build` pasan; `/` responde 200.

## 5. Enfoque técnico

- Nuevo `src/components/ProjectArt.tsx` (componente) que recibe `variant` (`"data" | "automation" | "transformation"`) y renderiza un SVG distinto por variante.
- En `src/components/Work.tsx`, reemplazar el `div.grid-mask` por `<ProjectArt variant={...} />` dentro del contenedor `aspect-[4/3]`; se mantiene el overlay de glow del hover y el `group-hover:scale-105` se mueve al contenedor del arte.
- Paleta vía CSS vars (tokens existentes `--accent`, `--copper`, `--bronze`) con `currentColor`/stops en los SVG.
- Un key `variant` por proyecto (map slug → variante).

## 6. Fuera de alcance

- NO tocar las páginas de detalle `/work/[slug]` (queda el placeholder) — a menos que se pida en otra iteración.
- NO agregar fotos ni imágenes rasterizadas.
- NO cambiar las tarjetas en tamaño, texto o layout.

## 7. Riesgos y supuestos

- Se asume que el arte debe verse premium y sutil (líneas finas, opacidades bajas), no "ilustración llamativa".
- SVG complejo con muchos nodos podría ensuciarse a tamaños pequeños → se optimiza el número de elementos por vista.

## 8. Verificación

- `npm run lint`, `npm run build`.
- Inspección visual en `npm run dev` en la sección Work (desktop y móvil), hover activo.
