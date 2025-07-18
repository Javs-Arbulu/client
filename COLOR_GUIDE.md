# 🎨 Guía de Paleta de Colores - Nueva Casa

## 📋 Tabla de Contenidos

- [Introducción](#introducción)
- [Estructura de la Paleta](#estructura-de-la-paleta)
- [Cómo Modificar los Colores](#cómo-modificar-los-colores)
- [Uso en Componentes](#uso-en-componentes)
- [Colores Disponibles](#colores-disponibles)
- [Ejemplos de Uso](#ejemplos-de-uso)
- [Mejores Prácticas](#mejores-prácticas)

## 🎯 Introducción

Este proyecto utiliza un sistema de paleta de colores personalizable que permite cambiar fácilmente toda la apariencia visual del sitio web de Nueva Casa. La paleta está diseñada específicamente para una iglesia, con colores que transmiten confianza, calidez y espiritualidad.

## 🏗️ Estructura de la Paleta

### Archivos Principales:

- **`src/styles/colors.css`** - Variables CSS con todos los colores
- **`src/constants/colors.ts`** - Constantes TypeScript para usar en JavaScript
- **`tailwind.config.js`** - Configuración de Tailwind con la paleta personalizada

### Categorías de Colores:

#### 🔵 Colores Primarios (Azul)

Usados para navegación, enlaces principales y elementos de marca.

```css
--primary-500: #3b82f6 /* Azul principal */
--primary-600: #2563eb /* Azul más oscuro para hover */
--primary-700: #1d4ed8 /* Azul más oscuro para active */
```

#### 🔴 Colores Secundarios (Rojo)

Usados para llamadas a la acción importantes como "Ver en vivo".

```css
--secondary-500: #ef4444 /* Rojo principal */
--secondary-600: #dc2626 /* Rojo más oscuro */
```

#### 🟢 Colores de Acento (Verde)

Para elementos de confirmación y acciones positivas.

```css
--accent-500: #22c55e /* Verde principal */
--accent-600: #16a34a /* Verde más oscuro */
```

#### ⚫ Colores Neutros

Para texto, fondos y bordes.

```css
--neutral-50: #fafafa   /* Fondo muy claro */
--neutral-100: #f5f5f5  /* Fondo claro */
--neutral-800: #262626  /* Texto oscuro */
--neutral-900: #171717  /* Texto muy oscuro */
```

#### ✨ Colores Especiales de la Iglesia

Colores únicos para elementos especiales de la iglesia.

```css
--divine-gold-600: #f59e0b    /* Oro divino */
--sacred-purple-600: #9333ea  /* Púrpura sagrado */
```

## 🔧 Cómo Modificar los Colores

### 1. Cambio Rápido de Colores Principales

Para cambiar los colores principales, edita el archivo `src/styles/colors.css`:

```css
:root {
  /* Cambia estos valores para modificar toda la paleta */
  --primary-600: #tu-nuevo-color-azul;
  --secondary-600: #tu-nuevo-color-rojo;
  --accent-600: #tu-nuevo-color-verde;
}
```

### 2. Cambio Completo de Paleta

Para cambiar una paleta completa, reemplaza todos los valores de una categoría:

```css
/* Ejemplo: Cambiar primarios a verde */
--primary-50: #f0fdf4;
--primary-100: #dcfce7;
--primary-200: #bbf7d0;
--primary-300: #86efac;
--primary-400: #4ade80;
--primary-500: #22c55e; /* Nuevo color principal */
--primary-600: #16a34a;
--primary-700: #15803d;
--primary-800: #166534;
--primary-900: #14532d;
```

### 3. Actualizar Constantes TypeScript

Si cambias los valores CSS, también actualiza `src/constants/colors.ts`:

```typescript
export const PRIMARY_COLORS = {
  500: "#22c55e", // Nuevo valor que coincida con CSS
  600: "#16a34a",
  // ... resto de colores
} as const;
```

## 🧩 Uso en Componentes

### Clases de Tailwind CSS

```jsx
// Fondos
<div className="bg-primary-600">Fondo azul principal</div>
<div className="bg-secondary-600">Fondo rojo secundario</div>
<div className="bg-surface-primary">Fondo blanco/superficie</div>

// Textos
<p className="text-primary-text">Texto principal</p>
<p className="text-secondary-text">Texto secundario</p>
<p className="text-primary-600">Texto azul</p>

// Bordes
<div className="border border-light">Borde claro</div>
<div className="border-2 border-primary-600">Borde azul</div>

// Sombras
<div className="shadow-custom-md">Sombra personalizada</div>
```

### Clases CSS Personalizadas

```jsx
// Botones predefinidos
<button className="btn-primary">Botón Principal</button>
<button className="btn-secondary">Botón Secundario</button>
<button className="btn-outline">Botón Outline</button>
```

### Componentes React

```jsx
import { Button, LiveStreamButton } from '../ui/Button';

// Botones personalizados
<Button variant="primary">Botón Principal</Button>
<Button variant="secondary">Botón Secundario</Button>
<Button variant="outline">Botón Outline</Button>

// Botones específicos de la iglesia
<LiveStreamButton href="https://youtube.com/live" />
```

### Variables CSS en Estilos

```css
.mi-componente {
  background-color: var(--primary-600);
  color: var(--text-inverse);
  border: 1px solid var(--primary-700);
}

.mi-componente:hover {
  background-color: var(--primary-700);
}
```

## 🎨 Colores Disponibles

### Clases de Tailwind Disponibles:

#### Fondos:

- `bg-primary-{50-950}` - Azules
- `bg-secondary-{50-950}` - Rojos
- `bg-accent-{50-950}` - Verdes
- `bg-neutral-{50-950}` - Grises
- `bg-divine-gold-{50-900}` - Dorados
- `bg-sacred-purple-{50-900}` - Púrpuras

#### Textos:

- `text-primary-{50-950}` - Azules
- `text-secondary-{50-950}` - Rojos
- `text-primary-text` - Texto principal
- `text-secondary-text` - Texto secundario
- `text-tertiary-text` - Texto terciario

#### Bordes:

- `border-primary-{50-950}` - Azules
- `border-light` - Borde claro
- `border-medium` - Borde medio
- `border-dark` - Borde oscuro

## 💡 Ejemplos de Uso

### Navbar Actualizado

```jsx
<header className="bg-surface-primary shadow-custom-md">
  <div className="text-primary-text">
    <button className="text-primary-600 hover:text-primary-700">Menú</button>
  </div>
</header>
```

### Botón de Llamada a la Acción

```jsx
<button className="bg-secondary-600 text-inverse-text hover:bg-secondary-700 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105">
  Ver en Vivo
</button>
```

### Card de Contenido

```jsx
<div className="bg-surface-primary border border-light rounded-lg shadow-custom-md p-6">
  <h3 className="text-primary-text text-xl font-bold mb-2">Título</h3>
  <p className="text-secondary-text">Descripción del contenido...</p>
  <button className="btn-primary mt-4">Leer más</button>
</div>
```

## ✅ Mejores Prácticas

### 1. Consistencia

- Usa siempre los colores de la paleta definida
- No uses colores hardcodeados (como `#ff0000`)
- Mantén la coherencia en toda la aplicación

### 2. Accesibilidad

- Asegúrate de que haya suficiente contraste entre texto y fondo
- Los colores primarios están optimizados para accesibilidad
- Prueba con herramientas de contraste de color

### 3. Semántica

- `primary` para navegación y elementos de marca
- `secondary` para llamadas a la acción importantes
- `accent` para confirmaciones y elementos positivos
- `neutral` para texto y elementos estructurales

### 4. Responsive Design

- Los colores funcionan igual en todos los tamaños de pantalla
- Usa las mismas clases para móvil y desktop

### 5. Mantenimiento

- Documenta cualquier cambio de color
- Prueba en toda la aplicación antes de hacer cambios grandes
- Considera el impacto en modo oscuro (si se implementa)

## 🔄 Modo Oscuro (Futuro)

El sistema está preparado para modo oscuro. Para activarlo, descomenta las reglas en `colors.css`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background-primary: var(--neutral-900);
    --text-primary: var(--neutral-100);
    /* ... más variables */
  }
}
```

---

**¿Necesitas ayuda?**
Si tienes dudas sobre cómo implementar o modificar los colores, consulta este documento o revisa los componentes existentes para ver ejemplos prácticos.
