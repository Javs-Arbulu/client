# Sistema de Colores Simplificado - Nueva Casa

## 🎨 Paleta Principal

### Colores Base

- **Primary (Cyan)**: 50-900 tonos principales de la marca
- **Secondary (Azul)**: 50-900 tonos complementarios
- **Neutral (Slate)**: 50-900 tonos para fondos y texto

## 🛠️ Uso en Código

### Variables CSS Principales

```css
/* Colores de paleta */
--primary-[50-900]
--secondary-[50-900]
--neutral-[50-900]

/* Variables semánticas */
--bg-primary, --bg-secondary, --bg-accent
--text-primary, --text-secondary, --text-muted, --text-inverse
--border, --border-strong

/* Gradientes predefinidos */
--gradient-primary, --gradient-brand, --gradient-dark
```

### Clases de Tailwind Simplificadas

```html
<!-- Colores básicos -->
<div class="bg-primary-500 text-white">
  <div class="text-primary-color">
    <div class="border-primary-400">
      <!-- Variables semánticas -->
      <div class="bg-bg-primary text-text-primary">
        <div class="section-bg">
          <div class="navbar-style">
            <!-- Gradientes predefinidos -->
            <div class="bg-brand">
              <!-- Gradiente marca -->
              <div class="bg-primary">
                <!-- Gradiente primario -->
                <span class="text-brand"> <!-- Texto con gradiente --></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Componentes Reutilizables

```html
<!-- Botones -->
<button class="btn-primary">Botón Principal</button>
<button class="btn-outline">Botón Outline</button>

<!-- Secciones -->
<section class="section-bg">Fondo principal</section>
<section class="section-bg-alt">Fondo alternativo</section>

<!-- Navbar -->
<header class="navbar-style"></header>
```

## 📋 Beneficios del Sistema Simplificado

### ✅ Antes vs Después

#### Antes (Complejo):

```html
<!-- Muchas clases específicas y redundantes -->
<div
  class="bg-gradient-to-r from-nc-primary-400 to-nc-secondary-500 dark:from-nc-primary-500 dark:to-nc-secondary-600"
>
  <span
    class="bg-gradient-to-r from-nc-primary-500 to-nc-secondary-500 dark:from-nc-primary-400 dark:to-nc-secondary-400 bg-clip-text text-transparent"
  ></span>
</div>
```

#### Después (Simplificado):

```html
<!-- Clases semánticas y reutilizables -->
<div class="bg-primary">
  <span class="text-brand"></span>
</div>
```

### 🎯 Ventajas:

1. **Menos redundancia**: Una sola clase en lugar de múltiples variaciones
2. **Mejor mantenimiento**: Cambios centralizados en CSS
3. **Consistencia**: Mismo aspecto en toda la aplicación
4. **Legibilidad**: Nombres semánticos más claros
5. **Modo oscuro automático**: Transiciones manejadas por CSS

## 🔧 Guía de Migración

### Para Desarrolladores:

1. Usar `bg-primary` en lugar de `bg-gradient-to-r from-primary-400 to-secondary-500`
2. Usar `text-brand` para texto con gradiente de marca
3. Usar `section-bg` para fondos de secciones
4. Usar `btn-primary` y `btn-outline` para botones

### Colores Principales por Tono:

- **50-200**: Fondos muy claros y acentos sutiles
- **300-400**: Colores principales vibrantes (más usados)
- **500-600**: Colores estándar para botones y elementos
- **700-900**: Colores oscuros para texto y elementos de contraste

## 🌙 Modo Oscuro

El sistema maneja automáticamente el modo oscuro a través de variables CSS, sin necesidad de clases `dark:` en la mayoría de casos.

```css
/* Automático en modo oscuro */
.text-text-primary /* Se ajusta automáticamente */
/* Se ajusta automáticamente */
.bg-bg-primary /* Cambia según el tema */
.section-bg; /* Fondo adaptativo */
```

## 📱 Compatibilidad

- ✅ Todas las secciones existentes
- ✅ Navbar responsive
- ✅ Botones y componentes UI
- ✅ Modo claro/oscuro
- ✅ Gradientes y efectos visuales
