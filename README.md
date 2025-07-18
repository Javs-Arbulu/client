# NC Deployment - Frontend Client

## 📋 Descripción

Aplicación web frontend desarrollada con React, TypeScript y Vite. Es una aplicación moderna con soporte para modo oscuro, diseño responsive y arquitectura modular de componentes.

## 🛠️ Tecnologías

- **Framework**: React 19
- **Lenguaje**: TypeScript
- **Build Tool**: Vite 7.x
- **Estilos**: TailwindCSS 3.4
- **Navegación**: React Router DOM 7.x
- **HTTP Client**: Axios
- **Iconos**: Lucide React
- **Post-procesador CSS**: PostCSS + Autoprefixer

## 📁 Estructura del Proyecto

```
src/
├── App.tsx                 # Componente principal
├── main.tsx               # Punto de entrada
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes UI básicos
│   │   ├── Button.tsx
│   │   └── DarkModeToggle.tsx
│   ├── layout/           # Componentes de layout
│   │   ├── mainLayout.tsx
│   │   ├── footer/
│   │   └── navbar/
│   ├── pages/            # Páginas de la aplicación
│   │   ├── about/
│   │   ├── main/
│   │   ├── ministerios/
│   │   ├── ContactoPage.tsx
│   │   └── EventosPage.tsx
│   └── demo/             # Componentes de demostración
├── hooks/                # Custom hooks
│   └── useDarkMode.ts
├── routes/               # Configuración de rutas
│   ├── AppRoutes.tsx
│   ├── routes.config.tsx
│   └── routes.constants.ts
├── services/             # Servicios API
│   └── api.ts
├── constants/            # Constantes de la app
│   └── colors.ts
├── styles/               # Estilos globales
│   └── colors.css
└── assets/               # Recursos estáticos
```

## 🚀 Configuración

### Prerequisitos

- Node.js (v18 o superior)
- npm o yarn

### Instalación

1. **Instalar dependencias**

```bash
npm install
```

2. **Configurar variables de entorno** (opcional)
   Crear un archivo `.env` si necesitas configurar URLs de API u otras variables.

### Ejecución

```bash
# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Vista previa de la build
npm run preview
```

El cliente se ejecutará en `http://localhost:5173` por defecto.

## 🐳 Docker

Para ejecutar con Docker:

```bash
# Construir y ejecutar
docker-compose up --build

# Solo ejecutar (si ya está construido)
docker-compose up
```

La aplicación estará disponible en `http://localhost:4200` cuando se ejecute con Docker.

## 🔧 Scripts Disponibles

```bash
npm run start          # Alias para dev
npm run dev            # Servidor de desarrollo con HMR
npm run build          # Build para producción
npm run preview        # Vista previa de la build
npm run lint           # Linter con ESLint
```

## 🎨 Características

### Dark Mode

- Toggle de modo oscuro funcional
- Persistencia en localStorage
- Transiciones suaves entre temas
- Soporte completo en todos los componentes

### Responsive Design

- Diseño mobile-first con TailwindCSS
- Breakpoints optimizados para todos los dispositivos
- Grid y flexbox layouts adaptativos

### Componentes UI

- Sistema de componentes modular y reutilizable
- Props tipadas con TypeScript
- Consistencia visual en toda la aplicación

### Navegación

- SPA con React Router DOM
- Rutas tipadas y organizadas
- Lazy loading de componentes

### Estado Global

- Custom hooks para manejo de estado
- Persistencia de preferencias
- Context API cuando sea necesario

## 🗂️ Páginas Disponibles

- **Home** (`/`) - Página principal
- **About** (`/about`) - Información sobre la organización
- **Ministerios** - Secciones especializadas:
  - Jóvenes (`/jovenes`)
  - Niños (`/ninos`)
  - Matrimonios (`/matrimonios`)
- **Eventos** (`/eventos`) - Calendario y eventos
- **Contacto** (`/contacto`) - Información de contacto

## 🎨 Guías de Estilo

El proyecto incluye guías detalladas para:

- **Colores**: `COLOR_GUIDE.md` - Paleta de colores y uso
- **Modo Oscuro**: `DARK_MODE_GUIDE.md` - Implementación de dark mode
- **Inicio Rápido**: `QUICK_START_COLORS.md` - Referencia rápida de colores

## 🔌 API Integration

La aplicación se conecta con el backend a través de:

- **Axios** para peticiones HTTP
- **Servicios** organizados en `src/services/`
- **Tipos** TypeScript para respuestas API

```typescript
// Ejemplo de uso del servicio API
import { api } from "../services/api";

const data = await api.get("/endpoint");
```

## 🧪 Testing

Para ejecutar tests (cuando estén configurados):

```bash
npm run test           # Tests unitarios
npm run test:watch     # Tests en modo watch
npm run test:coverage  # Coverage report
```

## 📱 PWA Ready

La aplicación está preparada para ser convertida en PWA:

- Service Workers configurables
- Manifest.json incluido
- Assets optimizados

## 🎯 SEO y Performance

- Meta tags optimizadas
- Lazy loading de componentes
- Bundle splitting automático con Vite
- Optimización de assets

## 📋 Desarrollo

### Estructura de Componentes

```typescript
// Estructura recomendada para componentes
interface ComponentProps {
  // Props tipadas
}

const Component: React.FC<ComponentProps> = ({ ...props }) => {
  // Lógica del componente
  return (
    // JSX
  );
};

export default Component;
```

### Estándares de Código

- ESLint para linting
- TypeScript estricto
- Prettier para formateo (si está configurado)
- Convenciones de naming consistentes

### Manejo de Estado

```typescript
// Custom hooks para estado local
const useDarkMode = () => {
  // Lógica del hook
  return { darkMode, toggleDarkMode };
};
```

## 🚀 Despliegue

### Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Deployment

- **Vercel**: `vercel --prod`
- **Netlify**: Conectar repositorio o drag & drop de `dist/`
- **Docker**: Usar el `Dockerfile.dev` incluido

## 📚 Recursos

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [TypeScript Documentation](https://www.typescriptlang.org)

---

Para información del proyecto completo, consulta el README principal en la raíz del repositorio.
