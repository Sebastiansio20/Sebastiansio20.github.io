# Spec — Publicar en GitHub Pages (sebastiansiordia20.github.io)

> Estado: implementada
> Fecha: 2026-08-09

## 1. Contexto

El sitio de Siordia Consulting (Next.js) debe publicarse gratis en GitHub Pages. El usuario creará el repo `sebastiansiordia20.github.io` en la web de GitHub (no hay `gh` CLI instalado). Se pide: dejar el proyecto listo para publicarse (static export + workflow de Pages), configurar git con el correo institucional `2122100652@soy.utj.edu.mx`, y NO cambiar colores (se mantiene la paleta dorada actual).

## 2. Objetivo

Que el proyecto genere una build estática (`out/`) y que al subirlo a GitHub quede en vivo en `https://sebastiansiordia20.github.io` con CI automático (GitHub Actions). Además, migrar la paleta del sitio a la del logo de la consultora: **azul marino, blanco y gris** (se elimina el dorado).

## 2b. Migración de color (nueva paleta)

| Token | Valor | Rol |
| --- | --- | --- |
| `--background` | `#0a1628` | azul marino profundo (fondo) |
| `--foreground` | `#f2f5fa` | blanco-nieve (texto) |
| `--surface` | `#101f36` | azul marino claro (tarjetas) |
| `--muted` | `#8f9ab0` | gris azulado |
| `--accent` | `#4a7fd6` | azul de marca (botones, subrayados) |
| `--accent-bright` | `#7aa6e8` | azul claro (hover) |
| `--ocean` | `#2b4a7a` | azul medio (mesh) |
| `--steel` | `#3f5c8a` | azul acero (mesh) |
| `--ice` | `#a8c4ee` | azul hielo (partículas/glows) |

- Se reemplazan `--amber/--copper/--bronze` por `--ocean/--steel/--ice`.
- Se actualizan: blobs del mesh, glow del grid, spotlight, partículas del canvas, glows radiales de Hero/CTA/Work/detalle, scrollbar y selección.
- No cambia layout, contenido ni i18n.

## 3. Requisitos

### Funcionales
- [x] F1. `next.config.ts` → `output: "export"` (static export).
- [x] F2. `/work/[slug]` prerenderizable: agregar `generateStaticParams` con los 3 slugs existentes.
- [x] F3. `.nojekyll` en `public/` para que GitHub Pages no ignore `_next`.
- [x] F4. Workflow `.github/workflows/pages.yml`: checkout → setup-node → `npm ci` → `npm run build` → `upload-pages-artifact` (path `out`) → `deploy-pages`. Disparador: push a `master`.
- [x] F5. Git local del repo: `user.email = 2122100652@soy.utj.edu.mx` (solo este repo).
- [x] F6. Commit local de todos los cambios pendientes (config de despliegue + trabajo previo).

### No funcionales
- [x] N1. Sin cambios de layout, contenido ni i18n (solo color).
- [x] N2. `npm run lint` y `npm run build` (con export) pasan localmente.
- [x] N3. No requiere `gh` ni credenciales extra (la creación del repo la hace el usuario en la web).

## 4. Criterios de aceptación

- [x] CA0. Paleta migrada: sin dorado en CSS ni componentes (solo azul marino/blanco/gris/azules).
- [x] CA1. `npm run build` produce la carpeta `out/` con `index.html` y las 3 rutas `/work/*.html`.
- [x] CA2. `npm run lint` pasa.
- [x] CA3. Los archivos de despliegue (`next.config.ts`, `.github/workflows/pages.yml`, `public/.nojekyll`, `generateStaticParams`) están en el repo y commiteados con el correo institucional.
- [x] CA4. El usuario tiene instrucciones claras de 4 pasos para publicar (crear repo → push → Pages → ver sitio).

## 5. Enfoque técnico

- `next.config.ts`: `const nextConfig: NextConfig = { output: "export" };`
- `src/app/work/[slug]/page.tsx`: exportar `generateStaticParams()` que devuelve `en.work.projects.map((p) => ({ slug: p.slug }))`.
- Crear `public/.nojekyll` (archivo vacío).
- Crear `.github/workflows/pages.yml` con:
  - `permissions: { contents: read, pages: write, id-token: write }`
  - `environment: github-pages`
  - `concurrency: { group: "pages", cancel-in-progress: true }`
  - jobs: `build` (checkout@v4, setup-node@v4 con node 22, `npm ci`, `npm run build`, upload-pages-artifact@v3 path `out`) y `deploy` (deploy-pages@v4, needs: build).
- Git: `git config user.email 2122100652@soy.utj.edu.mx` (repo-local), commit con mensaje descriptivo.
- NO se agrega remote/push (el repo aún no existe); se dejan los comandos exactos al usuario.

## 6. Fuera de alcance

- NO comprar dominios ni configurar DNS/correo corporativo.
- NO instalar `gh`.
- NO agregar fotos ni cambios de layout.

## 7. Riesgos y supuestos

- La rama actual es `master` (el workflow escucha esa rama).
- Al ser repo de tipo `<usuario>.github.io`, sirve en la raíz → no hace falta `basePath`.
- El usuario creará el repo exactamente como `sebastiansiordia20.github.io` (público) y dejará Pages en "GitHub Actions".
- Los fonts (`next/font`) se autocontienen en la build; la build requiere red (la hay en Actions).

## 8. Verificación

- `npm run lint` y `npm run build` (verificar `out/`).
- Inspección local: servir `out/` (por ejemplo `npx serve out`) para validar `/`, `/work/process-automation`, etc.
- Checklist de pasos para el usuario.
