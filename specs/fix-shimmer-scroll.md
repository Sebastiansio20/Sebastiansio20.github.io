# Spec — Fix shimmer en titulares + fluidez del scroll

> Estado: aprobada / implementada
> Fecha: 2026-08-09

## 1. Contexto

Tras el fondo dinámico, los titulares con `.text-shimmer` se ven raros (bandas de color duras / aspecto borroso) en desktop y móvil. Además el scroll debe sentirse más fluido. El problema del shimmer: gradiente de alto contraste (blanco → dorado brillante → cobre) que crea bandas visibles sobre texto grande, y falta `-webkit-text-fill-color: transparent` (en WebKit el color del texto se pinta encima del clip → aspecto sucio/borroso). El scroll se resiente por los blobs con `filter: blur(70px)` (4 capas enormes con blur re-rasterizando cada frame) y por `body { overflow-x: hidden }` que rompe el scroll nativo de Lenis.

## 2. Objetivo

Que los titulares muestren un shimmer cálido **sutil y limpio** (sin bandas ni borrosidad) en ambos dispositivos, y que el scroll sea fluido sin jank.

## 3. Requisitos

### Funcionales
- [ ] F1. `.text-shimmer`: gradiente con tramos largos de `--foreground` (solo ~30% central cálido), agregar `-webkit-text-fill-color: transparent`, y fallback con `@supports` para que el texto NUNCA quede invisible si `background-clip: text` no está soportado.
- [ ] F2. Eliminar el `filter: blur(70px)` de los blobs del mesh (los gradientes radiales ya son suaves por sí solos).
- [ ] F3. Cambiar `body { overflow-x: hidden }` por `overflow-x: clip` (compatible con Lenis; evita crear un scroll container que provoca saltos).
- [ ] F4. Mantener (y no empeorar) el resto: spotlight, grid reactiva, partículas con pausa fuera de viewport, `prefers-reduced-motion`.

### No funcionales
- [ ] N1. `prefers-reduced-motion: reduce` → shimmer estático con posición fija del gradiente.
- [ ] N2. Sin dependencias nuevas; sin cambios de contenido ni i18n.
- [ ] N3. `npm run lint` y `npm run build` pasan.

## 4. Criterios de aceptación

- [ ] CA1. Los titulares (hero, Services, Work, WhySiordia, CTA) se ven nítidos: texto claro con un barrido cálido suave, sin bandas duras ni borrosidad.
- [ ] CA2. Si el navegador no soporta `background-clip: text`, el texto se ve en `--foreground` sólido (nunca invisible).
- [ ] CA3. El scroll se siente fluido en desktop y móvil (sin lag perceptible del fondo).
- [ ] CA4. Con `prefers-reduced-motion`, el shimmer queda estático.
- [ ] CA5. `npm run lint` y `npm run build` pasan; `/` y `/work/[slug]` responden 200.

## 5. Enfoque técnico

- `src/app/globals.css`:
  - Reescribir `.text-shimmer` (gradiente suave `foreground → accent-bright → copper → foreground` con tramos largos, tamaño 200%, keyframes `0% → 200%` de `background-position`, `-webkit-text-fill-color: transparent`, `color: var(--foreground)`).
  - `@supports not (background-clip: text)`: `.text-shimmer { -webkit-text-fill-color: currentColor; background-image: none; animation: none; }`.
  - `.mesh-blob`: quitar `filter: blur(70px)`.
  - `body { overflow-x: hidden }` → `overflow-x: clip`.
- Sin cambios en componentes TSX (el bug es 100% CSS).

## 6. Fuera de alcance

- NO tocar componentes, layout ni contenido.
- NO cambiar la paleta ni la intensidad del mesh (solo quitar el blur que pesa).
- NO agregar librerías.

## 7. Riesgos y supuestos

- Sin blur, el mesh depende solo del gradiente radial → se asume que sigue viéndose suave (los degradados ya tienen falloff a transparente).
- `overflow-x: clip` requiere navegadores modernos; en navegadores muy viejos no aplica (queda igual que antes, sin romper).

## 8. Verificación

- `npm run lint`, `npm run build`.
- Inspección en `npm run dev` (desktop y modo móvil) con y sin `prefers-reduced-motion`.
