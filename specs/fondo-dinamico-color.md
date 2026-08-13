# Spec — Fondo dinámico con color (sistema de ambiente cálido)

> Estado: aprobada / implementada
>
> Nota de implementación (2026-08-09): el shimmer animado en titulares (`.text-shimmer`, basado en `background-clip: text` + fill transparente) causaba títulos invisibles en varios navegadores. Se RETIRÓ de todos los titulares: ahora usan `text-foreground` sólido (nunca pueden ocultarse). El color/dinamismo se mantiene vía fondo ambiente (mesh, partículas, spotlight, grid reactiva) y acentos. El reveal de líneas del hero/CTA usa ahora `.reveal-line` (CSS puro, siempre termina visible).
> Fecha: 2026-08-09

## 1. Contexto

El sitio de Siordia Consulting es dark-only (#0a0a0a) con un solo acento dorado (#e8b04c) y el fondo es plano: una rejilla estática (`grid-mask`) más un canvas de partículas solo en el hero. El usuario quiere más dinamismo y mejor presencia del color en el fondo, tomando como referencia la estética vibrante-sobre-negro de https://trionn.com/, pero sin romper la identidad premium/boutique.

Decisiones del usuario (aprobadas en la fase de clarificación):
- Paleta: **dorado + tonos cálidos** (ámbar, cobre, bronce). NO multi-color frío tipo Trionn.
- Dinamismo: mesh gradients animados, shimmer en titulares, partículas/constelación de color, brillo que sigue al cursor, y grid que reacciona al cursor/scroll.
- Alcance: **fondo global del sitio** (todas las secciones).

## 2. Objetivo

Sustituir el fondo plano por un sistema de "ambiente" dinámico global — mesh cálido animado, partículas cálidas, spotlight que sigue al cursor y rejilla reactiva — y añadir un shimmer cálido sutil a los titulares display, manteniendo la identidad dark premium y respetando `prefers-reduced-motion`.

## 3. Requisitos

### Funcionales
- [ ] F1. Mesh gradients animados: 2–4 manchas de color cálido (dorado, ámbar, cobre, bronce) que se desplazan y respiran lentamente en una capa fija detrás de todo el contenido del sitio.
- [ ] F2. Partículas/constelación de color: el canvas de nodos existente se recolorea a tonos cálidos y pasa a ser **global** (todas las secciones), no solo el hero.
- [ ] F3. Brillo que sigue al cursor: un spotlight radial cálido, con suavizado (spring), que persigue al mouse por todo el sitio. Desactivado en táctil.
- [ ] F4. Grid reactiva: la rejilla se ilumina suavemente cerca del cursor (halo radial que sigue al mouse) y/o tiene un parallax sutil con el scroll.
- [ ] F5. Shimmer en titulares: gradiente cálido animado (sweep) en los titulares display principales (H1 del hero, encabezados de Services, Work, WhySiordia y CTA), vía `background-clip: text`.

### No funcionales
- [ ] N1. `prefers-reduced-motion: reduce` → todos los fondos y el shimmer quedan estáticos (sin movimiento).
- [ ] N2. Rendimiento: canvas en pausa fuera de viewport y con pestaña oculta; `devicePixelRatio` capado a 2; blobs animados con `transform` (compositor-friendly); sin reflow del layout.
- [ ] N3. Contraste/legibilidad: los efectos van SIEMPRE detrás del contenido, con opacidades bajas; el texto body no cambia de color ni de contraste.
- [ ] N4. Identidad de marca intacta: dark-only, paleta cálida (dorado/ámbar/cobre/bronce), sin fotos, sin emojis, sin gradientes agresivos.
- [ ] N5. `npm run lint` y `npm run build` pasan sin errores.

## 4. Criterios de aceptación

- [ ] CA1. Todas las secciones del sitio muestran el ambiente dinámico: mesh cálido animado + partículas cálidas + spotlight que sigue al cursor.
- [ ] CA2. Los titulares display (hero + CTA + encabezados de Services/Work/WhySiordia) muestran un shimmer cálido sutil.
- [ ] CA3. Con `prefers-reduced-motion: reduce` activo, el fondo y el shimmer quedan estáticos y no hay animaciones.
- [ ] CA4. En pantallas táctiles (sin mouse fino) el spotlight no aparece.
- [ ] CA5. El texto sigue siendo legible; ningún efecto tapa o compite con el contenido.
- [ ] CA6. `npm run lint` y `npm run build` pasan en la ruta `/` y en `/work/[slug]`.
- [ ] CA7. El sitio conserva la estética dark premium cálida (se verifica visualmente en `npm run dev`).

## 5. Enfoque técnico

- Nuevo componente global `src/components/AmbientBackground.tsx` (client) con:
  - Blobs de mesh: 2–4 `div` con gradientes radiales cálidos, animados con `motion` (o CSS keyframes) usando `transform`/`opacity`.
  - Spotlight de cursor: `motion` `useMotionValue`/`useSpring` con un `listener` de `mousemove` global (solo en `pointer: fine`); capa `fixed`, `pointer-events: none`.
  - Rejilla reactiva: el halo radial sigue al cursor con las mismas motion values (o CSS vars) sobre el patrón `grid-mask`.
- El canvas de partículas (`DataFlowCanvas`) se recolorea a la paleta cálida y se renderiza dentro de `AmbientBackground` (ya no vive solo en el hero). Se elimina del Hero.
- Nuevo `src/components/ui/Shimmer.tsx`: span display con `background-clip: text` + gradiente cálido animado; se aplica a los titulares display. Con `reduce` se congela el gradiente.
- `src/app/globals.css`: nuevos tokens cálidos (`--copper`, `--amber`, `--bronze`), keyframes de mesh/shimmer, utilidades `.text-shimmer`, `.mesh-blob`, overrides de `prefers-reduced-motion`.
- `src/app/layout.tsx`: se renderiza `<AmbientBackground />` una vez, dentro de `body`, detrás del contenido.
- `src/components/Hero.tsx`: pierde su canvas local; conserva `grid-mask`, glow radial, parallax de scroll y parallax de mouse; su H1 recibe Shimmer.
- Sin dependencias nuevas: todo con CSS + `motion` ya instalado.

## 6. Fuera de alcance (non-goals)

- NO cambiar la paleta a colores fríos/vibrantes tipo Trionn.
- NO rediseñar secciones, tipografía, layout ni contenido/idiomas existentes.
- NO tocar la navegación, el formulario de contacto ni la lógica i18n.
- NO agregar fotos, imágenes ni dependencias nuevas.
- NO animar todo el texto (solo titulares display clave).

## 7. Riesgos y supuestos

- Rendimiento en móvil con canvas + blobs animados → mitigado con pausa fuera de viewport, DPR cap y opacidades bajas.
- Shimmer puede restar legibilidad si es muy intenso → gradiente suave dentro de tonos cálidos, solo en textos grandes.
- El spotlight "sigue al cursor" puede sentirse invasivo → sutil (tamaño grande, opacidad baja, desplazamiento suave).
- Se asume que mover el canvas del hero al fondo global no degrada la escena del hero (el hero conserva su parallax de contenido).

## 8. Verificación

- `npm run lint`
- `npm run build`
- Inspección visual con `npm run dev` en `/` (EN y ES) y `/work/[slug]`, con y sin `prefers-reduced-motion`.
