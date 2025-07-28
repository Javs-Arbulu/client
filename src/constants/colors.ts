/**
 * Paleta de colores simplificada de Nueva Casa
 * Sistema unificado con tonos 50-900 para primary, secondary y neutral
 */

// ===== COLORES PRINCIPALES =====
export const COLORS = {
  // Cyan (Principal)
  primary: {
    50: 'var(--primary-50)',
    100: 'var(--primary-100)',
    200: 'var(--primary-200)',
    300: 'var(--primary-300)',
    400: 'var(--primary-400)',
    500: 'var(--primary-500)',
    600: 'var(--primary-600)',
    700: 'var(--primary-700)',
    800: 'var(--primary-800)',
    900: 'var(--primary-900)',
    DEFAULT: 'var(--primary-500)',
  },
  // Azul (Secundario)
  secondary: {
    50: 'var(--secondary-50)',
    100: 'var(--secondary-100)',
    200: 'var(--secondary-200)',
    300: 'var(--secondary-300)',
    400: 'var(--secondary-400)',
    500: 'var(--secondary-500)',
    600: 'var(--secondary-600)',
    700: 'var(--secondary-700)',
    800: 'var(--secondary-800)',
    900: 'var(--secondary-900)',
    DEFAULT: 'var(--secondary-500)',
  },
  // Slate (Neutros)
  neutral: {
    50: 'var(--neutral-50)',
    100: 'var(--neutral-100)',
    200: 'var(--neutral-200)',
    300: 'var(--neutral-300)',
    400: 'var(--neutral-400)',
    500: 'var(--neutral-500)',
    600: 'var(--neutral-600)',
    700: 'var(--neutral-700)',
    800: 'var(--neutral-800)',
    900: 'var(--neutral-900)',
    DEFAULT: 'var(--neutral-500)',
  },
} as const;

// ===== COLORES SEMÁNTICOS =====
export const SEMANTIC_COLORS = {
  success: 'var(--success)',
  warning: 'var(--warning)',
  error: 'var(--error)',
  info: 'var(--info)',
} as const;

// ===== FONDOS =====
export const BACKGROUNDS = {
  primary: 'var(--bg-primary)',
  secondary: 'var(--bg-secondary)',
  accent: 'var(--bg-accent)',
} as const;

// ===== TEXTO =====
export const TEXT_COLORS = {
  primary: 'var(--text-primary)',
  secondary: 'var(--text-secondary)',
  muted: 'var(--text-muted)',
  inverse: 'var(--text-inverse)',
} as const;

// ===== GRADIENTES =====
export const GRADIENTS = {
  primary: 'var(--gradient-primary)',
  brand: 'var(--gradient-brand)',
  dark: 'var(--gradient-dark)',
} as const;

// ===== EXPORTACIÓN UNIFICADA =====
export const COLOR_SYSTEM = {
  ...COLORS,
  semantic: SEMANTIC_COLORS,
  bg: BACKGROUNDS,
  text: TEXT_COLORS,
  gradient: GRADIENTS,
} as const;

// ===== TIPOS =====
export type ColorTone = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type ColorType = 'primary' | 'secondary' | 'neutral';
export type SemanticColor = keyof typeof SEMANTIC_COLORS;
