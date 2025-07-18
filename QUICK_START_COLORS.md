# 🚀 Implementación Rápida - Paleta de Colores

## ⚡ Cambios Realizados

Se ha implementado un sistema completo de paleta de colores personalizable para el proyecto Nueva Casa. Estos son los archivos que se han creado/modificado:

### 📁 Archivos Nuevos:

- `src/styles/colors.css` - Variables CSS con toda la paleta
- `src/constants/colors.ts` - Constantes TypeScript
- `src/components/ui/Button.tsx` - Componentes de botón reutilizables
- `src/components/demo/ColorPaletteDemo.tsx` - Demo visual de la paleta
- `COLOR_GUIDE.md` - Guía completa de uso

### 📝 Archivos Modificados:

- `src/index.css` - Importa la paleta de colores
- `tailwind.config.js` - Configuración extendida con la paleta
- `src/components/layout/navbar/index.tsx` - Actualizado con nuevos colores
- `src/components/layout/navbar/sections/navItem.tsx` - Actualizado con nuevos colores

## 🎨 Cómo Cambiar los Colores Principales

### Cambio Rápido (Recomendado)

Edita `src/styles/colors.css` y cambia estas variables:

```css
:root {
  /* CAMBIA ESTOS VALORES PARA MODIFICAR LA PALETA COMPLETA */

  /* Color principal (actualmente azul) */
  --primary-600: #2563eb; /* Cambia por tu color preferido */
  --primary-700: #1d4ed8; /* Versión más oscura del anterior */

  /* Color secundario (actualmente rojo para "Ver en vivo") */
  --secondary-600: #dc2626; /* Cambia por tu color preferido */
  --secondary-700: #b91c1c; /* Versión más oscura del anterior */

  /* Color de acento (actualmente verde) */
  --accent-600: #16a34a; /* Cambia por tu color preferido */
  --accent-700: #15803d; /* Versión más oscura del anterior */
}
```

### Cambio de Paleta Completa

Si quieres cambiar todos los tonos de un color, modifica toda la gama:

```css
/* Ejemplo: Cambiar primarios a púrpura */
--primary-50: #faf5ff;
--primary-100: #f3e8ff;
--primary-200: #e9d5ff;
--primary-300: #d8b4fe;
--primary-400: #c084fc;
--primary-500: #a855f7;
--primary-600: #9333ea; /* Color principal */
--primary-700: #7c3aed; /* Hover */
--primary-800: #6b21a8; /* Active */
--primary-900: #581c87;
--primary-950: #3b0764;
```

## 🔧 Uso en Componentes

### Clases de Tailwind CSS Disponibles:

```jsx
// Fondos
<div className="bg-primary-600">Fondo azul principal</div>
<div className="bg-secondary-600">Fondo rojo</div>
<div className="bg-surface-primary">Fondo blanco</div>

// Textos
<p className="text-primary-text">Texto principal (negro)</p>
<p className="text-secondary-text">Texto secundario (gris)</p>
<p className="text-primary-600">Texto azul</p>

// Botones
<button className="btn-primary">Botón con estilos predefinidos</button>
```

### Componentes React Disponibles:

```jsx
import { Button, LiveStreamButton } from '../ui/Button';

<Button variant="primary">Botón Principal</Button>
<Button variant="secondary">Botón Secundario</Button>
<LiveStreamButton href="https://youtube.com/live" />
```

## 🎯 Colores Específicos Aplicados

### Navbar:

- ✅ Fondo: `bg-surface-primary` (blanco)
- ✅ Texto del logo: `text-primary-text` (negro)
- ✅ Enlaces: `text-primary-text` con hover `text-primary-600`
- ✅ Botón "Ver en vivo": `bg-secondary-600` (rojo)
- ✅ Menú móvil: Actualizado con la nueva paleta

### Variables Semánticas Disponibles:

- `--primary-600` - Color principal de la marca
- `--secondary-600` - Color para llamadas a la acción
- `--surface-primary` - Fondo blanco para superficies
- `--text-primary` - Texto principal negro
- `--text-secondary` - Texto secundario gris
- `--border-light` - Bordes claros

## 📱 Ver la Demo

Para ver todos los colores en acción, importa y usa el componente de demo:

```jsx
import { ColorPaletteDemo } from "./components/demo/ColorPaletteDemo";

// En tu componente o página
<ColorPaletteDemo />;
```

## 🎨 Herramientas para Elegir Colores

### Generadores de Paletas Recomendados:

1. **Coolors.co** - Generador de paletas de colores
2. **Adobe Color** - Herramienta profesional de colores
3. **Tailwind Color Palette Generator** - Específico para Tailwind
4. **Material Design Color Tool** - Para paletas consistentes

### Cómo Usar un Generador:

1. Ve a coolors.co o Adobe Color
2. Elige tu color base (ej: un azul para primary)
3. Genera una paleta de 5-10 tonos
4. Copia los códigos hex y reemplázalos en `colors.css`

## ⚠️ Notas Importantes

1. **Consistencia**: Siempre usa las variables de la paleta, nunca colores hardcodeados
2. **Contraste**: Asegúrate de que el texto sea legible sobre los fondos
3. **Testing**: Prueba los cambios en toda la aplicación
4. **Documentación**: Actualiza la documentación si haces cambios importantes

## 🔄 Próximos Pasos

1. **Aplicar a más componentes**: Usa la paleta en páginas, formularios, etc.
2. **Modo oscuro**: ✅ **¡YA IMPLEMENTADO!** - Botón funcional en navbar
3. **Optimización**: Revisar y optimizar los colores según feedback
4. **Accesibilidad**: Verificar contraste con herramientas WCAG

## 🌗 Modo Oscuro - ¡NUEVO!

### ✅ **Ya Implementado y Funcionando:**

- **Botón toggle** en navbar (desktop, tablet, móvil)
- **Detección automática** de preferencia del sistema
- **Persistencia** en localStorage
- **Transiciones suaves** entre modos
- **Variables CSS adaptables** automáticamente

### 🎯 **Cómo Usar el Modo Oscuro:**

```jsx
// Importar componente de toggle
import { DarkModeToggle, DarkModeToggleCompact } from '../ui/DarkModeToggle';

// Usar en cualquier lugar
<DarkModeToggle showLabel />           // Con etiqueta
<DarkModeToggleCompact />              // Compacto (ya en navbar)

// Usar hook para lógica personalizada
import { useDarkMode } from '../hooks/useDarkMode';
const { isDark, toggleDarkMode } = useDarkMode();
```

### 🎨 **Colores Automáticos:**

- **Modo Claro**: Fondos blancos, texto negro
- **Modo Oscuro**: Fondos grises oscuros, texto blanco
- **Transición**: Suave y automática

### 📍 **Ubicación del Botón:**

- **Desktop**: Al lado del botón "Ver en vivo"
- **Tablet**: Junto al menú hamburguesa
- **Móvil**: Junto al menú hamburguesa

---

**¡La paleta Y el modo oscuro están listos para usar!** 🎉

Simplemente cambia los valores en `src/styles/colors.css` y todos los componentes se actualizarán automáticamente en ambos modos.
