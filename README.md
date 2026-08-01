#   Confecciones Mony — Sitio Web

**Clases de Costura Personalizadas en Constitución, Chile**
Sitio web de una sola página (one-page scroll), orgánico, minimalista y con
predominancia de imágenes, para promocionar las clases de costura personalizadas
de Mony, Profesional en Diseño y Confección de Vestuario con +28 años de experiencia.

El objetivo único del sitio: que la persona **escriba por WhatsApp** para coordinar
su primera clase.

---

## Stack tecnológico

- **Framework:** Next.js 16 (App Router) + TypeScript 5
- **Estilos:** Tailwind CSS 4 + shadcn/ui (New York)
- **Fuentes:** Fraunces (display), Mulish (cuerpo), Dancing Script (solo en el logo)
- **Animaciones:** Framer Motion
- **Base de datos:** Prisma ORM (SQLite) — disponible, sin uso activo en esta versión
- **Gestor de paquetes:** Bun (recomendado) / npm / pnpm / yarn
- **Orquestador:** Python 3 (`mony.py`)

---

## Estructura del proyecto

```
.
├── mony.py                    # ← Orquestador Python (install/dev/build/lint/db/…)
├── package.json               # Dependencias y scripts
├── next.config.ts             # Configuración Next.js
├── tsconfig.json              # Configuración TypeScript
├── tailwind.config.ts         # Configuración Tailwind
├── postcss.config.mjs         # PostCSS
├── eslint.config.mjs          # ESLint
├── components.json            # Configuración shadcn/ui
├── Caddyfile                  # Gateway
│
├── prisma/
│   └── schema.prisma          # Schema de base de datos
│
├── public/
│   ├── images/                # Ilustraciones acuarela + fotos reales de costura
│   ├── logo.svg
│   └── robots.txt
│
└── src/
    ├── app/
    │   ├── layout.tsx         # Layout raíz + SEO local + JSON-LD
    │   ├── page.tsx           # Página única (ensambla todas las secciones)
    │   ├── globals.css        # Paleta de marca + estilos orgánicos
    │   └── api/route.ts
    │
    ├── lib/
    │   ├── site-data.ts       # ← Contenido centralizado (marca, WhatsApp, clases)
    │   ├── db.ts              # Cliente Prisma
    │   └── utils.ts           # Utilidades (cn, etc.)
    │
    ├── components/
    │   ├── ui/                # Componentes shadcn/ui
    │   └── site/              # Componentes del sitio
    │       ├── brand-logo.tsx       # Wordmark (script solo en "Mony")
    │       ├── site-header.tsx      # Nav sticky + menú móvil
    │       ├── hero.tsx             # Sección Inicio
    │       ├── story.tsx            # Sección Historia
    │       ├── classes.tsx          # Sección Clases
    │       ├── contact.tsx          # Sección Contacto
    │       ├── site-footer.tsx      # Footer (sticky al fondo)
    │       ├── whatsapp-float.tsx   # Botón flotante de WhatsApp
    │       ├── whatsapp-button.tsx  # Botón CTA de WhatsApp reutilizable
    │       ├── organic-decor.tsx    # Blobs decorativos orgánicos
    │       ├── reveal.tsx           # Animación on-scroll (Framer Motion)
    │       └── icons.tsx            # Iconos SVG (WhatsApp, Facebook, etc.)
    │
    └── hooks/                 # Hooks de React
```

---

## Cómo usarlo

### Opción A — Con el orquestador Python (recomendado)

```bash
python3 mony.py install     # Instalar dependencias
python3 mony.py dev         # Arrancar servidor de desarrollo → http://localhost:3000
python3 mony.py build       # Build de producción
python3 mony.py start       # Servir build de producción
python3 mony.py lint        # Ejecutar ESLint
python3 mony.py status      # Ver estado del proyecto
python3 mony.py help        # Ver ayuda completa
```

### Opción B — Con Bun directamente

```bash
bun install
bun run dev        # http://localhost:3000
bun run build
bun run start
bun run lint
```

---

## Contenido editable

Todo el contenido del sitio está centralizado en **`src/lib/site-data.ts`**:

- `SITE` — nombre de marca, ciudad, teléfono WhatsApp, email, Facebook
- `waLink()` — genera enlaces de WhatsApp con mensaje pre-rellenado
- `SOCIAL_PROOF` — estadísticas de confianza (+28 años, 1 a 1, 100% presencial)
- `CLASS_EXAMPLES` — lista de ejemplos de clases (orden: 1,3,2,6,4,5,7)
- `CREDENTIALS` — credenciales de Mony (título, experiencia, docencia, desfiles)

### Reemplazar imágenes por fotos reales de Mony

Las imágenes están en `public/images/`. Para reemplazarlas por fotos reales,
conserva los mismos nombres de archivo o actualiza las rutas en los componentes
de `src/components/site/`.

---

## SEO Local

- Meta título: "Confecciones Mony | Clases de Costura Personalizadas en Constitución"
- Meta descripción optimizada para Constitución, Región del Maule
- JSON-LD `EducationalOrganization` con datos locales
- Keywords: clases de costura en Constitución, profesora de costura, modista en Constitución, etc.
- OpenGraph + Twitter Cards configurados

---

## Datos de contacto

- **WhatsApp:** +56 9 8197 2791
- **Email:** mony.a.varas@gmail.com
- **Facebook:** Confecciones Mony
- **Ubicación:** Constitución, Región del Maule, Chile
