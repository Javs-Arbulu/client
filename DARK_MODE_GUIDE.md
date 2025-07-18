# 🌗 Guía de Modo Oscuro - Nueva Casa

## 🎯 Características Implementadas

✅ **Toggle Manual** - Botón para cambiar entre modo claro y oscuro  
✅ **Detección Automática** - Respeta la preferencia del sistema operativo  
✅ **Persistencia** - Guarda la preferencia en localStorage  
✅ **Transiciones Suaves** - Animaciones fluidas entre modos  
✅ **Integración Completa** - Funciona con toda la paleta de colores  
✅ **Responsive** - Botón visible en desktop, tablet y móvil

## 🔧 Archivos Añadidos/Modificados

### ✅ Nuevos Archivos:

- `src/hooks/useDarkMode.ts` - Hook para manejar el estado del modo oscuro
- `src/components/ui/DarkModeToggle.tsx` - Componentes de botón toggle
- `src/components/demo/DarkModeDemo.tsx` - Demo visual del modo oscuro

### ✅ Archivos Modificados:

- `src/styles/colors.css` - Variables CSS para modo oscuro mejoradas
- `tailwind.config.js` - Configuración de modo oscuro habilitada
- `src/components/layout/navbar/index.tsx` - Botón de modo oscuro integrado

## 🎨 Cómo Funciona

### 1. Detección Automática

```typescript
// El hook detecta la preferencia del sistema
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
```

### 2. Clase CSS

```html
<!-- Modo claro (por defecto) -->
<html class="">
  <!-- Modo oscuro -->
  <html class="dark"></html>
</html>
```

### 3. Variables CSS Adaptables

```css
/* Modo claro */
:root {
  --text-primary: var(--neutral-900); /* Negro */
  --surface-primary: #ffffff; /* Blanco */
}

/* Modo oscuro */
.dark {
  --text-primary: var(--neutral-100); /* Blanco */
  --surface-primary: var(--neutral-800); /* Gris oscuro */
}
```

## 🚀 Uso en Componentes

### Botón de Toggle Simple

```jsx
import { DarkModeToggle } from "../ui/DarkModeToggle";

<DarkModeToggle />;
```

### Botón Compacto (para navbar)

```jsx
import { DarkModeToggleCompact } from "../ui/DarkModeToggle";

<DarkModeToggleCompact />;
```

### Botón con Etiqueta

```jsx
<DarkModeToggle showLabel />
```

### Hook Personalizado

```jsx
import { useDarkMode } from "../hooks/useDarkMode";

function MiComponente() {
  const { isDark, toggleDarkMode, setDarkMode } = useDarkMode();

  return (
    <div>
      <p>Modo actual: {isDark ? "Oscuro" : "Claro"}</p>
      <button onClick={toggleDarkMode}>Cambiar modo</button>
      <button onClick={() => setDarkMode(true)}>Forzar oscuro</button>
    </div>
  );
}
```

## 🎨 Clases CSS para Modo Oscuro

### Clase Manual con Tailwind

```jsx
// Fondo que cambia automáticamente
<div className="bg-surface-primary dark:bg-surface-primary">

// Texto que se adapta
<p className="text-primary-text dark:text-text-primary">

// Bordes adaptativos
<div className="border border-light dark:border-neutral-700">

// Colores específicos para cada modo
<button className="bg-blue-500 dark:bg-blue-400 text-white">
```

### Variables CSS Directas

```css
.mi-componente {
  background-color: var(--surface-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-light);
}

/* Se actualiza automáticamente en modo oscuro */
```

## 🎯 Componentes Ya Actualizados

### ✅ Navbar

- Toggle compacto en desktop, tablet y móvil
- Fondos y textos adaptativos
- Menú desplegable con modo oscuro

### ✅ Botones

- Todos los botones funcionan en ambos modos
- Hover states adaptativos
- Focus states mejorados

### ✅ Superficies

- Cards con fondos adaptativos
- Bordes que cambian automáticamente
- Sombras ajustadas para modo oscuro

## 🎨 Paleta de Colores en Modo Oscuro

| Elemento             | Modo Claro | Modo Oscuro |
| -------------------- | ---------- | ----------- |
| **Fondo Principal**  | `#fafafa`  | `#171717`   |
| **Superficie**       | `#ffffff`  | `#262626`   |
| **Texto Principal**  | `#171717`  | `#f5f5f5`   |
| **Texto Secundario** | `#404040`  | `#d4d4d4`   |
| **Bordes**           | `#e5e5e5`  | `#404040`   |
| **Primario**         | `#2563eb`  | `#2563eb`   |
| **Secundario**       | `#dc2626`  | `#dc2626`   |
| **Acento**           | `#16a34a`  | `#16a34a`   |

## 📱 Ubicación del Botón

### Desktop (lg+)

- Al lado del botón "Ver en vivo"
- Icono compacto sin etiqueta

### Tablet (md-lg)

- Junto al menú hamburguesa
- Icono compacto

### Móvil (< md)

- Junto al menú hamburguesa
- Icono compacto

## 🔧 Personalización

### Cambiar Iconos

```tsx
// En DarkModeToggle.tsx
{
  isDark ? (
    <Sun size={iconSizes[size]} className="text-yellow-500" />
  ) : (
    <Moon size={iconSizes[size]} className="text-blue-600" />
  );
}
```

### Cambiar Colores de Modo Oscuro

```css
/* En colors.css */
.dark {
  --surface-primary: #tu-color-oscuro;
  --text-primary: #tu-color-texto;
}
```

### Cambiar Transiciones

```css
/* Añadir a cualquier elemento */
.mi-elemento {
  transition: all 0.3s ease-in-out;
}
```

## 🚀 Próximas Mejoras

### 🔄 Auto-detección Mejorada

- Escuchar cambios en tiempo real del sistema
- Responder a cambios automáticamente

### 🎨 Temas Adicionales

- Modo alto contraste
- Tema sepia
- Temas personalizados por temporada

### 📱 Configuración Avanzada

- Panel de configuración de tema
- Múltiples opciones de modo oscuro
- Configuración por usuario

## ⚡ Estados del Toggle

| Estado     | Descripción            | Visual          |
| ---------- | ---------------------- | --------------- |
| **Claro**  | Modo claro activo      | 🌙 Luna azul    |
| **Oscuro** | Modo oscuro activo     | ☀️ Sol amarillo |
| **Hover**  | Mouse encima           | Escala 105%     |
| **Activo** | Clic presionado        | Escala 95%      |
| **Focus**  | Navegación por teclado | Ring azul       |

## 🐛 Troubleshooting

### Problema: El modo oscuro no se aplica

**Solución:** Verificar que la clase `dark` se añada al elemento `<html>`

### Problema: Los colores no cambian

**Solución:** Usar variables CSS o clases `dark:` de Tailwind

### Problema: El estado no persiste

**Solución:** Verificar que localStorage esté disponible

### Problema: Parpadeo al cargar

**Solución:** Añadir script inline para aplicar clase antes del render

---

**¡El modo oscuro está listo! 🌗**

Usa `DarkModeToggleCompact` en el navbar y `DarkModeToggle` en otros lugares.
